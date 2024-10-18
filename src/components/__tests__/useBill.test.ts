import { setActivePinia, createPinia } from 'pinia' ;
import { describe, it, expect , beforeEach } from 'vitest'
import { useBill } from '@/composables/useBill'
import { useBillStore } from '@/stores/billStore'

describe('useBill composable' , () =>{
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('should return correct currency symbol for USD', () => {
    const { currencySymbol, store } = useBill()
    store.currency = 'USD'
    expect(currencySymbol.value).toBe('$')
  });

   it('should return correct currency symbol for PHP', () => {
    const { currencySymbol, store } = useBill()
    store.currency = 'PHP'
    expect(currencySymbol.value).toBe('₱')
  });

   it('should return correct currency symbol for YEN', () => {
    const { currencySymbol, store } = useBill()
    store.currency = 'YEN'
    expect(currencySymbol.value).toBe('¥')
  });

   it('should return default currency symbol', () => {
    const { currencySymbol, store } = useBill()
    store.currency = ''
    expect(currencySymbol.value).toBe('$')
  });

   it('should return red color for total less than 100', () => {
    const { totalColor, store } = useBill()
    store.total = '99'
    expect( totalColor.value).toBe('red')
  });

  it('should return green color for total greater than 999', () => {
    const { totalColor, store } = useBill()
    store.total = '1000'
    expect( totalColor.value).toBe('green')
  });

  it('should return black color for total between 100 - 999', () => {
    const { totalColor, store } = useBill()
    store.total = '500'
    expect(totalColor.value).toBe('black')
  });

})
