<script setup lang="ts">
import { useBill } from '@/composables/useBill' ;

  const{ currencySymbol, totalColor,
    store } = useBill()

  console.log(store.total)

</script>

<template>
  <div>
    <p :style="{color: totalColor}">
      Total: {{currencySymbol}} {{typeof store.total === 'number' ? store.total.toFixed(2) : "0:00"}}
    </p>
  </div>
</template>


<style scoped>
  p{
    font-size: 30px;
  }
</style>
