<template>
    <div class="modal-auth" :class="{ 'is-open': $store.state.showModalAuth}" @click.self="close">
		<div class="modal-dialog modal-dialog-auth">
			<button class="close-auth" @click="close">&times;</button>
			<form id="logInForm">
				<fieldset class="modal-body">
					<legend class="modal-title">Авторизация</legend>
					<label class="label-auth">
						<span>Логин</span>
						<input type="text" v-model="login" @keypress.enter="loginForm">
					</label>
					<label class="label-auth">
						<span>Пароль</span>
						<input type="password" v-model="password" @keypress.enter="loginForm">
					</label>
				</fieldset>
				<div class="modal-footer">
					<div class="footer-buttons">
						<button class="button button-primary button-login" type="button" @click="loginForm" >Войти</button>
					</div>
				</div>
			</form>

		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			login: '',
			password: ''
		}
	},
	
	methods:{
		close(){
            this.$store.commit('showAuth', false)
        },
		loginForm(){
			if (this.password == '12345' && this.login != "") {
				this.$store.commit('logStatus', true)
				this.$store.commit('login',{login: this.login,password: this.password})
				let dataUser = JSON.stringify({login: this.login,password: this.password})
				localStorage.setItem('user',dataUser)
				localStorage.setItem('loggedIn','true')

				this.close();
			}
		}
	}
}
</script>