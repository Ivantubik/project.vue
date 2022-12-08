<template>
    <div class="modal modal-cart" :class="{'is-open': show}" @click.self="close">
		<div class="modal-dialog" >
			<div class="modal-header">
				<h3 class="modal-title">Корзина</h3>
				<button class="close" @click="close">&times;</button>
			</div>
			<div class="modal-body">
				<div class="food-row"
					v-for="item, index in $store.state.card"
					:key="index"
				>
					<span class="food-name" @dblclick="$store.commit('removeCard',index)">{{item.title}}</span>
					<strong class="food-price">{{item.price * item.count}}</strong>
					<div class="food-counter">
						<button class="counter-button" @click="minusCard(index)">-</button>
						<span class="counter">{{item.count}}</span>
						<button class="counter-button" @click="item.count++">+</button>
					</div>
				</div>
			</div>
			<div class="promo_cod">
				<input type="text" v-model="promoCod" @keypress.enter="sendPromo" >
				<button  class="button button-primary" @click="sendPromo">Применить</button>
			</div>
			<div class="modal-footer">
				<span class="modal-pricetag">{{newPrice == 0 ? cardTotal : newPrice }}  руб</span>
				<div class="footer-buttons">
					<button class="button button-primary">Оформить заказ</button>
					<button class="button clear-cart" @click="$store.commit('clearCard')">Очистить Корзину</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			promoCod: '',
			promoCodes: {
				promoVara: 5,
				promoToamna: 10
			},
			newPrice: 0
		}
	},
    props:{
        show: {
        type: Boolean,
        default: false
        }
    },
	computed:{
		cardTotal(){
			return	this.$store.getters.cardTotal;
		}
	},
    methods:{
        close(){
            this.$emit('close')
        },
		minusCard(index){
			if (this.$store.state.card[index].count > 1) {
			 this.$store.state.card[index].count--
			}
		},
		sendPromo(){
			let procent = this.getProcent(this.promoCod);
			console.log(this.cardTotal);
			console.log(procent);
			let procentResult = this.cardTotal / 100 * procent;
			this.newPrice = this.cardTotal - procentResult;

		},
		getProcent(value){
			let keysPromo = Object.keys(this.promoCodes);
			let indexKey = keysPromo.findIndex(element => {
				return	element == value
			}) 
			if (indexKey !== -1) {
				return Object.values(this.promoCodes)[indexKey]
			}
			return 0
		}

    }
}
</script>
<style scoped>
.promo_cod{
	display: flex;
    margin-bottom: 1rem
}
</style>