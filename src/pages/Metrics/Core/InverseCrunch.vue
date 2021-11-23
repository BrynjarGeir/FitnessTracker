<template>
  <div class='row justify-center q-pa-lg'>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-10 col-xs-12 q-pa-sm">
      <total-i></total-i>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import TotalI from '../../../components/Charts/Core/InverseCrunch/TotalI'


export default defineComponent({
  name: 'InverseCrunchMetrics',
  components: {
    TotalI
  },
  data() {
    return {}
  }
})
</script>
