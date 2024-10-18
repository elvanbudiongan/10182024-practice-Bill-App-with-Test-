
import { defineStore } from 'pinia'

export const useBillStore = defineStore('bill', {
  state: () => ({
    currency: 'USD',
    price: 0,
    tip: 0,
    total: 0,
  }),

  actions: {
    calculateTotal(){
      this.total = this.price + this.tip;
    },

    resetInput(){
      this.price = 0;
      this.tip = 0;
    }
  },

});
