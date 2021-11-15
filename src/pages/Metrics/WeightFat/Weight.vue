<template>
  <div class='row justify-center q-pa-lg'>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-10 col-xs-12 q-pa-sm">
      <curr-w></curr-w>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import CurrW from '../../../components/Charts/WeightFat/Weight/CurrW'


export default defineComponent({
  name: 'WeightMetrics',
  components: { CurrW },
  data() {
    return {}
  }
})
</script>
