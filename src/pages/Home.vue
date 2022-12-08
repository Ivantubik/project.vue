<template>
	<main class="main">
		<div class="container">
			<section class="container-promo">
				<section class="promo pizza">
					<h1 class="promo-title">{{banner[lang].first}}</h1>
					<p class="promo-text">
						{{banner[lang].second}}
					</p>
				</section>
			</section>
			<section class="restaurants">
				<div class="section-heading">
					<h2 class="section-title">{{title[lang].title}}</h2>
					<label class="search">
						<input type="text" class="input input-search" placeholder="Поиск блюд и ресторанов" />
					</label>
				</div>
				<div class="cards cards-restaurants">
					<Card 
						v-for="item, index in magazin[lang].cards"
						:key="index"
						:image='item.image'
						:title='item.title'
						:time='item.time'
						:rating='item.rating'
						:price='item.price'
						:tipe='item.tipe'
					/>
				</div>
			</section>
		</div>
		<!-- /.container -->
	</main>
</template>

<script>

import Card from '@/components/Card.vue'
export default {
  name: 'Home',
	components: {
		Card,
		
	},
	data(){
		return {
			magazin:{
				ru:{
					cards:[
						{
							image: 'img/pizza-plus/preview.jpg',
							title: 'Пицца плюс',
							time: '50 мин',
							rating: '4.5',
							price: 'От 900 ₽',
							tipe: 'Пицца'
						},
						{
							image: 'img/tanuki/preview.jpg',
							title: 'Тануки',
							time: '60 мин',
							rating: '4.5',
							price: 'От 1 200 ₽',
							tipe: 'Суши, роллы'
						},
						{
							image: 'img/food-band/preview.jpg',
							title: 'FoodBand',
							time: '40 мин',
							rating: '4.5',
							price: 'От 450 ₽',
							tipe: 'Пицца'
						}, 
						{
							image: 'img/palki-skalki/preview.jpg',
							title: 'Палки скалки',
							time: '55 мин',
							rating: '4.5',
							price: 'От 500 ₽',
							tipe: 'Пицца'
						}, 
						{
							image: 'img/gusi-lebedi/preview.jpg',
							title: 'Гуси Лебеди',
							time: '75 мин',
							rating: '4.5',
							price: 'От 1 000 ₽',
							tipe: 'Русская кухня'
						}, 
						{
							image: 'img/pizza-burger/preview.jpg',
							title: 'PizzaBurger',
							time: '45 мин',
							rating: '4.5',
							price: 'От 700 ₽',
							tipe: 'Пицца'
						}, 
		
					],	
				},
				md:{
					cards:[
						{
							image: 'img/pizza-plus/preview.jpg',
							title: 'Pizza plus',
							time: '50 min',
							rating: '4.5',
							price: 'От 900 ₽',
							tipe: 'Pizza'
						},
						{
							image: 'img/tanuki/preview.jpg',
							title: 'Tanuki',
							time: '60 min',
							rating: '4.5',
							price: 'От 1 200 ₽',
							tipe: 'Sushi, roluri'
						},
						{
							image: 'img/food-band/preview.jpg',
							title: 'FoodBand',
							time: '40 мин',
							rating: '4.5',
							price: 'От 450 ₽',
							tipe: 'Пицца'
						}, 
						{
							image: 'img/palki-skalki/preview.jpg',
							title: 'Палки скалки',
							time: '55 мин',
							rating: '4.5',
							price: 'От 500 ₽',
							tipe: 'Пицца'
						}, 
						{
							image: 'img/gusi-lebedi/preview.jpg',
							title: 'Гуси Лебеди',
							time: '75 мин',
							rating: '4.5',
							price: 'От 1 000 ₽',
							tipe: 'Русская кухня'
						}, 
						{
							image: 'img/pizza-burger/preview.jpg',
							title: 'PizzaBurger',
							time: '45 мин',
							rating: '4.5',
							price: 'От 700 ₽',
							tipe: 'Пицца'
						}, 
		
					],	
				},
			},
			banner: {
				md: {
					first: 'Serviciu de livrare de alimente online',
					second: 'Mâncărurile din restaurantul tău preferat vor fi aduse de un curier în mănuși, mască și antiseptic'
				},
				ru: {
					first: 'Онлайн-сервис доставки еды на дом' ,
					second: 'Блюда из любимого ресторана привезет курьер в перчатках, маске и с антисептиком',
					
				},
				
			},
			title: {
				md:{
					title: 'Restoraunt'
				},
				ru:{
					title: 'Ресторан'
				}
			}
			
		
		}
	},
	computed:{
		lang(){
			return this.$store.getters.lang
		}
	}
}
</script>
<style scoped>
.promo-title{
	    max-width: 450px;

}
</style>
