<template>
  <div class='row justify-center q-pa-lg'>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-10 col-xs-12 q-pa-sm">
      <top-w></top-w>
      <total-w></total-w>
      <total-i></total-i>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import TopW from '../../../components/Charts/Legs/MachineLegPress/TopW'
import TotalW from '../../../components/Charts/Legs/MachineLegPress/TotalW'
import TotalI from '../../../components/Charts/Legs/MachineLegPress/TotalI'


export default defineComponent({
  name: 'MachineLegPressMetrics',
  components: {
    TopW, TotalW, TotalI
  },
  data() {
    return {}
  }
})
</script>
