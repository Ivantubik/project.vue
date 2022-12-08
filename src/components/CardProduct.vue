<template>
    <div class="card">
        <img :src="img" alt="image" class="card-image" @click="$emit('clickImage')" />
        <div class="card-text">
            <div class="card-heading">
                <h3 class="card-title card-title-reg">{{title}}</h3>
            </div>
            <!-- /.card-heading -->
            <div class="card-info">
                <div class="ingredients">{{desc}}
                </div>
            </div>
            <!-- /.card-info -->
            <div class="card-buttons">
                <button @click="$emit('openCard')" class="button button-primary button-add-cart">
                    <span class="button-card-text">В корзину</span>
                    <span class="button-cart-svg"></span>
                </button>
                <strong class="card-price-bold">{{price}} ₽</strong>
            </div>
        </div>
        <!-- /.card-text -->
    </div>
</template>
<script>
export default {
    props:{
        img:{
            type: String,
            default:"img/pizza-plus/pizza-classic.jpg"
        },
        title:{
            type: String,
            default: 'Пицца Классика'
        },
        desc:{
            type: String,
            default: 'Соус томатный, сыр «Моцарелла», сыр «Пармезан», ветчина,салями,грибы.'
        },
        price:{
            type: Number,
            default: 0
        }
    }
}
</script>