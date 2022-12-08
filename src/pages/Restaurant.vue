<template>
  <main class="main">
    <div class="container">
      <section class="menu">
        <div class="section-heading">
          <h2 class="section-title restaurant-title">Пицца Плюс</h2>
          <div class="card-info">
            <div class="rating">4.5</div>
            <div class="price">От 900 ₽</div>
            <div class="category">Пицца</div>
          </div>
          <!-- /.card-info -->
        </div>

        <div class="cards cards-menu">
          <CardProduct
            v-for="(item, index) in cards"
            :key="index"
            :img="item.img"
            :title="item.title"
            :desc="item.desc"
            :price="item.price"
            @openCard="addProduct(index)"
            @clickImage="showCard(index)"
          />
        </div>
      </section>
    </div>
    <!-- /.container -->
  </main>
</template>
<script>
import CardProduct from "@/components/CardProduct.vue";

export default {
  name: "Restaurnat",
  components: {
    CardProduct,
  },
  data() {
    return {
      cards: [
        {
          img: "img/pizza-plus/pizza-vesuvius.jpg",
          title: "Пицца Везувий<",
          desc: "Соус томатный, сыр «Моцарелла», ветчина, пепперони, перец«Халапенье», соус «Тобаско», томаты.",
          price: 150,
          count: 1,
          id: 2456,
          images: [
            {
                src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/9edc060af068da34bc5c8298755f11a2.jpg",
                type: "image",
            },
          ]
        },
        {
          img: "img/pizza-plus/pizza-girls.jpg",
          title: "Пицца Девичник",
          desc: "Соус томатный, постное тесто, нежирный сыр, кукуруза, лук,маслины,грибы, помидоры, болгарский перец.",
          price: 210,
          count: 1,
          id: 2432,
          images: [
            {
                src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/9edc060af068da34bc5c8298755f11a2.jpg",
                type: "image",
            },
          ]
        },
        {
          img: "img/pizza-plus/pizza-oleole.jpg",
          title: "Пицца Девичник",
          desc: "Соус томатный, постное тесто, нежирный сыр, кукуруза, лук,маслины,грибы, помидоры, болгарский перец.",
          price: 180,
          count: 1,
          id: 1556,
          images: [
            {
                src: "https://lipsum.app/id/98/800x600",
                type: "image",
            },
          ]
        },
        {
          img: "img/pizza-plus/pizza-plus.jpg",
          title: "Пицца Девичник",
          desc: "Соус томатный, постное тесто, нежирный сыр, кукуруза, лук,маслины,грибы, помидоры, болгарский перец.",
          price: 220,
          count: 1,
          id: 2433,
          images: [
            {
                src: "https://lipsum.app/id/98/800x600",
                type: "image",
            },
          ]
        },
        {
          img: "img/pizza-plus/pizza-hawaiian.jpg",
          title: "Пицца Девичник",
          desc: "Соус томатный, постное тесто, нежирный сыр, кукуруза, лук,маслины,грибы, помидоры, болгарский перец.",
          price: 280,
          count: 1,
          id: 3156,
          images: [
            {
                src: "https://lipsum.app/id/98/800x600",
                type: "image",
            },
          ]
        },
        {
          img: "img/pizza-plus/pizza-classic.jpg",
          title: "Пицца Девичник",
          desc: "Соус томатный, постное тесто, нежирный сыр, кукуруза, лук,маслины,грибы, помидоры, болгарский перец.",
          price: 300,
          count: 1,
          id: 3334,
          images: [
            {
                src: "https://lipsum.app/id/98/800x600",
                type: "image",
            },
          ]
        },
      ],
    };
  },
  methods: {
    addProduct(index) {
      this.$store.commit("addToCard", this.cards[index]);
    },
    showCard(index) {
        Fancybox.show(this.cards[index].images);
    },
  },
};
</script>