<template>
    <router-link to="/restaurant" class="card card-restaurant">
        <img :src="image" alt="image" class="card-image" />
        <div class="card-text">
            <div class="card-heading">
                <h3 class="card-title">{{title}}</h3>
                <span class="card-tag tag">{{time}}</span>
            </div>
            <div class="card-info">
                <div class="rating">
                    {{rating}}
                </div>
                <div class="price">{{price}}</div>
                <div class="category">{{tipe}}</div>
            </div>
        </div>
    </router-link>
</template>
<script>
export default {
	props: {
        image:{
            type: String,
            default: "/img/pizza-plus/preview.jpg"
        },
        title:{
            type: String,
            default: 'Пицца плюс'
        },
        time: {
            type: String,
            default: '50 мин'
        },
        rating:{
            type: String,
            default: '4.5'
        },
        price:{
            type: String,
            default: 'От 900 ₽'
        },
        tipe:{
            type: String,
            default: 'Пицца'
        }
    }
}
</script>