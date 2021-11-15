<template>
  <div class='row justify-center q-pa-lg'>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-10 col-xs-12 q-pa-sm">
      <curr-f></curr-f>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import CurrF from '../../../components/Charts/WeightFat/Fat/CurrF'

export default defineComponent({
  name: 'FatPercentageMetrics',
  components: { CurrF },
  data() {
    return {}
  }
})
</script>
