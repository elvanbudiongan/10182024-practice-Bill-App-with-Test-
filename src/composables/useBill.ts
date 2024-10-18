import {computed} from 'vue';
import { useBillStore } from '@/stores/billStore' ;

export function useBill(){
  const store = useBillStore()

  const currencySymbol = computed( () => {
    switch (store.currency){
      case 'PHP': return '₱';
        break;
      case 'YEN': return  '¥' ;
        break;
      case 'USD': return '$' ;
        break;
      defaul: return '$' ;
        break;
    }
  });

  const totalColor = computed( () => {
    if(store.total < 100 ){
      return 'red';
    } else if(store.total > 999){
      return 'green' ;
    } else {
      return 'black' ;
    }
  });

  return{
    currencySymbol,
    totalColor,
    store,
  };
}
