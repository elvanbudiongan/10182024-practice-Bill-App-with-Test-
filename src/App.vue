<script setup lang="ts">
import BillInput from '@/components/BillInput.vue'
import CurrencySelector from '@/components/CurrencySelector.vue'
import TotalBill from '@/components/TotalBill.vue'
</script>

<template>
  <div id="app">
    <h1>Bill Calculator</h1>
    <div class="input-display">
       <CurrencySelector/>
       <BillInput/>
       <TotalBill/>
    </div>
  </div>
</template>

<style scoped>
  #app{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: #DADDB1;
  }
  h1{
    color: black;
    font-weight: bold;
  }

  .input-display{
    direction: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 55%;
  }
</style>
