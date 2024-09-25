import { defineStore } from 'pinia';
import Axios from 'axios';
const API = '/api';

interface IProduct{
  id?: string,
  name: string,
  category: string,
  activo?: boolean
}

interface IState{
  ProductCurrent: IProduct,
  listProduct: IProduct[]
}

export const usePruductStore = defineStore('taskStore', {
  state: ():IState=>{
    return{
      ProductCurrent:{
        name:'',
        category:''
      },
      listProduct: []
    }
  },
  actions:{
    async addProduct(product:IProduct){
      try {
        const {name, category} = product;
        const data = await Axios({
          url:API,
          method:'POST',
          data:{
            name,
            category
          }
        });
        
        if(data.data.status == 201){

          this.getAllProduct();
          this.ProductCurrent = {
            name:'',
            category:''
          }
        }
        
      } catch (error) {
        console.log(error);
        
      }
    },

    async getAllProduct(){
      try {
        const data = await Axios({
          url:API,
          method:'GET'
        })  
        this.listProduct = data.data.body;
      } catch (error) {
        console.log(error);
        
      }
    },

    async deleteProduct(id?:string){ 
      try {
        const data = await Axios({
          url:`${API}`,
          method:'DELETE',
          data:{
            id
          }
        })
        
        this.listProduct = this.listProduct.filter(x => x.id !== id);
      } catch (error) {
        console.log(error);
        
      }
    },

    async updateProduct(product:IProduct){
      try {
        const {id, name, category, activo} = product;
        const data = await Axios({
          url:`${API}/${id}`,
          method:'PUT',
          data:{
            name,
            category, 
            activo
          }
        });
        console.log(data);
        
      } catch (error) {
        console.log(error);
        
      }
    },
  }

})