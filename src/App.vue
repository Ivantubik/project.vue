<template>
 <TheHeader @onClickLogin="$store.commit('showAuth',true)"/>
 <router-view></router-view>
 <TheFooter/>
 <ModalCard :show="$store.state.showModalCard" @close="$store.commit('showModel',false)" ></ModalCard>
 <ModalAuth></ModalAuth>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue"
import TheFooter from '@/components/TheFooter.vue'
import ModalAuth from '@/components/ModalAuth.vue'
import ModalCard from '@/components/ModalCard.vue'

export default {
  name: 'App',
  components:{
    TheHeader,
    TheFooter,
    ModalAuth,
    ModalCard
  },
  data() {
    return {
      
    }
  },
  created() {

      let user = localStorage.getItem('user')
      let logged = localStorage.getItem('loggedIn')
    if(user != null && logged != null) {
      let userParse = JSON.parse(user)
      this.$store.commit('login',userParse)
      let logParse = JSON.parse(logged)
      this.$store.commit('logStatus', logParse)
    }

  }

}
</script>


