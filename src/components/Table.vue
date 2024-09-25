<template>
  <table>
    <thead>
      <th>Nombre</th>
      <th>Categoría</th>
      <th>Acción</th>
    </thead>
    <tbody>
      <tr v-for="(item, index) in listProduct" :key="index" :class="index % 2 == 0 ? 'fila-par': ''">
        <td :class="!item.activo ? 1: ''">{{item.name}}</td>
        <td :class="!item.activo ? 1: ''">{{item.category}}</td>
        <td>
          <button @click="deleteProduct(item.id)">❌</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {mapState, mapActions} from 'pinia';
import {usePruductStore} from '../stores/ProductStore'

export default defineComponent({
  setup() {
    
  },
  methods:{
    ...mapActions(usePruductStore, ['getAllProduct','deleteProduct','updateProduct']),
    complete(product:any){
      product.status = false;
      this.updateProduct(product);
    }
  },
  computed:{
    ...mapState(usePruductStore, ['listProduct']),
  },
  mounted(){

    this.getAllProduct();
  }
})
</script>

<style scope>
table{
  width: 90%;
  margin-top: 15px;
  margin-right: auto;
  margin-left: auto;
  border: 0.5px solid;
  border-color: gray;
  border-spacing: 0;
}
thead{
  background: #2fc3dd;
  height: 50px;
  color: #fff;
}
th{
  padding: 0;
}
tr{
  margin-top: 10px;
}
td{
  padding:10px;
}
.fila-par{
  background: #E7E9EB;

}
button{
  border-color: transparent;
  margin-right: 5px;
}
.completada{
  text-decoration: line-through;
}
</style>