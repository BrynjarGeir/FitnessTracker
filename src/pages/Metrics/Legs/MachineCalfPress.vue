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
import TopW from '../../../components/Charts/Legs/MachineCalfPress/TopW'
import TotalW from '../../../components/Charts/Legs/MachineCalfPress/TotalW'
import TotalI from '../../../components/Charts/Legs/MachineCalfPress/TotalI'


export default defineComponent({
  name: 'MachineCalfPressMetrics',
  components: {
    TopW, TotalW, TotalI
  },
  data() {
    return {}
  }
})
</script>
