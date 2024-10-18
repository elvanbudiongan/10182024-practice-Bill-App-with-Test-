<script setup lang="ts">
  import { useBillStore } from '@/stores/billStore' ;

  const store = useBillStore();

  const updatePrice = (value: number ) => {
    store.price = value
    store.calculateTotal()
  };

  const updateTip = (value: number ) => {
    store.tip = value
    store.calculateTotal()
  };
</script>

<template>
  <div class="input-container">
    <div>
      <label>Price</label>
      <input type="number" v-model.number="store.price" @input="updatePrice(store.price)">
    </div>

    <div>
      <label>Tip</label>
      <input type="number" v-model.number="store.tip" @input="updateTip(store.tip)">
    </div>

  </div>
</template>

<style scoped>
  label{
    color: black;
    font-size: 20px;
    font-weight: bold;
  }

  .input-container{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
</style>
