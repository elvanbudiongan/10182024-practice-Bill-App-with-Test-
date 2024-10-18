<script setup lang="ts">
  import {computed} from 'vue'
  import { useBillStore } from '@/stores/billStore' ;

  const store = useBillStore();
  const currency = computed( () => store.currency );

  const currencyChange = () =>{
    store.resetInput();
    store.calculateTotal();
  };

</script>

<template>
  <select v-model="currency" @change="currencyChange">
    <option value="USD">$ USD</option>
    <option value="PHP">₱ PHP</option>
    <option value="YEN">¥ YEN</option>
  </select>
</template>
