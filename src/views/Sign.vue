<template>
	<div class="sign-bg">
		<div class="from-wrapper" v-if="!step2">
			<el-form class="sign-form" style="border-radius:6px 6px 0 0;padding-bottom:2px;" status-icon :model="form" :rules="rules" ref="form">
				<h3>欢迎注册</h3>
				<div class="sign-link">
					<router-link :to="{name:'index'}">返回首页</router-link>
					<router-link to="login">已有帐号？快速登录</router-link>
				</div>
				<el-form-item prop="loginname">
					<div class="input-wrapper">
						<el-input ref="loginname" id="loginname" type="text" name="loginname" v-model="form.loginname" placeholder="手机号注册">
							<template slot="append">
								<el-button :class="{'btn-primary':notSend}" @click="sendCode('form')" :disabled="!notSend">{{btnText}}</el-button>
							</template>
						</el-input>
					</div>
				</el-form-item>
			</el-form>
			<el-form class="sign-form" style="border-radius:0 0 6px 6px;padding-top:2px;" status-icon :model="formCode" :rules="rules" ref="formCode">
				<el-form-item prop="code" v-if="!showCode">
					<div class="input-wrapper">
						<el-input ref="code" id="code" type="text" name="code" v-model="formCode.code" placeholder="验证码"></el-input>
					</div>
				</el-form-item>
				<p class="sign-tips" @click="dialogVisible = true">注册条款</p>
				<button class="btn-primary btn-fluid border" type="button" @click="checkCode('formCode')">下一步</button>
			</el-form>
			<el-dialog
				title="注册条款"
				:visible.sync="dialogVisible"
				width="50%"
				center>
				<div v-html="signTips">
				</div>
			</el-dialog>
		</div>
		<sign2 v-if="step2" :info="signData"></sign2>
	</div>
</template>

<script>
import sign2 from '@/view/sign2'
export default {
	name:'sign',
	components:{ sign2 },
	data(){
		//验证邮箱或者电话号码
		var validateLoginname = (rule, value, callback) => {
		//   var patten1 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+(\.[a-zA-Z]{2,4})$/;
		  var patten2 = /^1\d{10}$/;
		  if (value === '') {
            callback(new Error('请输入手机号'));
        //   } else if (!(patten2.test(value)||patten1.test(value))) {
		//     callback(new Error('请输入正确的手机号码或邮箱'));
		  } else if (!(patten2.test(value))) {
			callback(new Error('请输入正确的手机号'));
          } else {
            callback();
          }
		};
		//验证手机验证码位数
		var validateCode = (rule, value, callback) => {
		  var patten2 = /^\d{4}$/;
		  if (value === '') {
            callback(new Error('请输入验证码'));
		  } else if (!(patten2.test(value))) {
			callback(new Error('请输入正确的验证码'));
          } else {
            callback();
          }
		};
		return {
			form:{
				loginname:'',
			},
			formCode:{
				code:'',
			},

			signTips:'',
			dialogVisible:false,

			pwkey:'',
			rules: {
	          loginname: [
	          	{ validator: validateLoginname, trigger: 'blur,change' },
			  ],
			  code: [
				{ validator: validateCode, trigger: 'blur,change' }
			  ]
			},
			btnText:'发送验证码',

			notSend:true,
			showCode:false,
			step2:false,

			signData:{},
		}
	},
	created(){
		this.getSignTips()
	},
	methods:{
		sendCode(form){
			this.$refs[form].validate((valid) => {
				if (!valid) {
					this.$message({
						type:'error',
						message:'请填写正确的手机号码'
					})
					return false;
				}
				let time = 60;
				let data = {
					phone:this.form.loginname,
					type:1
				}
				
				//发送验证码API
				this.$ajax({
					method: 'post',
					url: '/api/user/getcode',
					data:data
				})
				.then(res=>{
					console.log(res);
					
					console.log(JSON.stringify(data))
					if(res.data.msg !== 'success'){
						this.$message({
							type:'error',
							message:res.data.msg
						})
						return false;
					}
					if(res.data.msg === 'success'){
						// this.showCode = false;
						this.notSend = false;
						this.btnText = `${time}s后重新发送`;
						let timer = setInterval(()=>{
							time--;
							this.btnText = `${time}s后重新发送`;
							if (time === 0) {
								clearInterval(timer);
								this.notSend = true;
								this.btnText = '发送验证码';
							}
						},1000)
					}
					console.log(res)
				})
				.catch(err=>{
					console.log(err)
				})
			});
		},
		checkCode(form){
			if (this.formCode.code === '') {
				this.$message({
					type:'error',
					message:'请填写验证码'
				});
				return false;
			}
				
			this.$refs[form].validate((valid) => {
				if (valid) {
					console.log('success')
					
					//验证验证码API，返回pwkey，成功后渲染第二个组件
					let data = {
						phone:this.form.loginname,
						code:this.formCode.code
					}
					this.$ajax({
						method: 'post',
						url: '/api/user/checkcode',
						data:data
					})
					.then(res=>{
						console.log(res)
						if(res.data.msg !== 'success'){
							this.$message({
								type:'error',
								message:res.data.msg
							})
							return false;
						}
						this.pwkey = res.data.pwkey;
						this.step2 = true;
						//构造signData props，传给sign2
						this.signData = {
							phone:this.form.loginname,
							pwkey:this.pwkey,
						}
					})
					.catch(err=>{
						console.log(err)
					})
				}
			});
		},
		getSignTips(){
			this.$ajax({
				method: 'get',
				url: '/api/user/agreement',
			})
			.then(res=>{
				console.log(res);
				this.signTips = res.data.userAgreement;
			})
			.catch(err=>{
				console.log(err);
			})
		}
	}
}
</script>