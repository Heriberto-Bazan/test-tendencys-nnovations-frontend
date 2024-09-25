<template>
  <form @submit.prevent="send">
    <h1>Agregar Producto</h1>
    <div>
      <input type="text" placeholder="Nombre" required v-model="ProductCurrent.name">
    </div>
    <div>
      <input type="text" placeholder="Categoría" required v-model="ProductCurrent.category">
    </div>
    <div>
      <button type="submit">Guardar</button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {mapState, mapActions} from 'pinia'
import {usePruductStore} from '../stores/ProductStore';

export default defineComponent({
  setup() {
    
  },
  methods:{
    ...mapActions(usePruductStore, ['addProduct']),
    send(){
      this.addProduct(this.ProductCurrent);
    }
  },
  computed:{
    ...mapState(usePruductStore, ['ProductCurrent'])
  }
})
</script>


<style scoped>
form{
    width: 350px;
    margin:auto;
    background: rgb(236, 231, 231);
    padding: 10px;
    margin-top: 10px;
    
  }
  h1{
    text-align: center;
  }
  input{
    width: 98%;
    padding: 5px;
    border-radius: 10px;
    margin-top: 10px;
    border-color: transparent;
    font-size: 15px;
  }
  button{
    border-color: transparent;
    background: #2fc3dd;
    width: 100%;
    padding: 5px;
    color: white;
    margin-top: 10px;
    border-radius: 10px;
    font-size: 20px;
  }
</style>