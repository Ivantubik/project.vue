
import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
        showModalAuth: false,
        showModalCard: false,
        loggedIn: false,
        card: [],
        user: {login:'',password:''},
        lang: 'ru'
        
    }
  },
  getters:{
    cardTotal(state){
        let count = 0 
        for (let index = 0; index < state.card.length; index++) {
            const element = state.card[index];
            count += element.price * element.count 
        }
        return count
    },
    productsCount(state){

      let count = 0
      for (let index = 0; index < state.card.length; index++) {
        const element = state.card[index];
          // count = count + element.count 
          count += element.count 
          console.log(count);
      }
      return count
    },
    lang(state){
      return state.lang
    }
            
  },
  mutations: {
   showModel(state,value){
    state.showModalCard = value;
   },
   addToCard(state,value){
    const findResult = state.card.find(element => {
      return  element.id == value.id
    });

    // console.log(value);
    if (findResult !== undefined) {
      value.count++
    } else{
      state.card.push(value)
    }
   },
   removeCard(state,value){
    state.card.splice(value,1)
   },
   login(state,value){
    const {login,password} = value;
    state.user.login = login
    state.user.password = password
   },
   showAuth(state,value){
    state.showModalAuth = value
   },
   logStatus(state, value){
    state.loggedIn = value
   },

   clearCard(state){
    state.card.length = 0 
    state.showModalCard = false
   },
    setLang(state, value){
      state.lang = value
    }
   
  }
})
export default store