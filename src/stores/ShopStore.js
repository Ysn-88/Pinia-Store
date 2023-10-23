import {defineStore} from 'pinia'

export const useShopStore = defineStore('shopStore' , {
  state: ()=> ({
    items: [],
  }),
  getters: {

  },
  actions: {
    async fetchItems() {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        this.items = data;

      } catch (error) {
        console.error('Error fetching items:', error);
      }
    },
  },
})
