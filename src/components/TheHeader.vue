<template>
<div class="container">
   	<header class="header">
			<router-link to="/" class="logo">
				<img src="/img/icon/logo.svg" alt="Logo" />
			</router-link>
			<label class="address">
				<input type="text" class="input input-address" placeholder="Адрес доставки" />
			</label>
			<div class="buttons">
				<span class="user-name">{{$store.state.user.login}}</span>
				<button class="button button-primary button-auth" @click="$emit('onClickLogin')" v-if="!$store.state.loggedIn" >
					<span class="button-auth-svg"></span>
					<span class="button-text">Войти</span>
				</button>
			<template v-else>
				<button class="button button-cart" @click="showBasket">
					<span class="button-cart-svg"></span>
					<span class="button-text">Корзина</span>
					<span class="count" v-show="count > 0">{{count}}</span>
				</button>
				<button class="button button-primary button-out" @click="logOut">
					<span class="button-text">Выйти</span>
					<span class="button-out-svg"></span>
				</button>
			</template>
			<div class="lang">
				<span class="ru" :class="{'active': lang == 'ru'}"  @click="changeLang('ru')">RU</span>
				<span class="md" :class="{'active': lang == 'md'}" @click="changeLang('md')">MD</span>
			</div>
			</div>		
		</header>
</div>			
</template>
<script>
export default {

	methods:{
		showBasket(){
			this.$store.commit('showModel',true)
		},
		logOut(){
				localStorage.clear();
				this.$store.commit('login', {login: '', password: ''});
				this.$store.commit('logStatus', false)
				
		},
		changeLang(value){
			this.$store.commit('setLang',value)
		}
	},
	computed:{
		lang(){
			return this.$store.getters.lang
		},
		count(){
			return this.$store.getters.productsCount
		}
	}
}
</script>
<style lang='scss' scoped>
	.count {
    background: red;
    border-radius: 50%;
    font-size: 10px;
    width: 15px;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
	margin-left: 5px;
	}
	.lang{
		font-weight: bold;
		span {
			&.active {
				color: red;
			}
			cursor: pointer;
		}
		.md{
			margin-left: 10px;
		}

	}
</style>

