<template>
  <div class='row justify-center q-pa-lg'>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-10 col-xs-12 q-pa-sm">
      <length></length>
      <duration></duration>
      <calories></calories>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Length from '../../../components/Charts/Endurance/Running/Length'
import Duration from '../../../components/Charts/Endurance/Running/Duration'
import Calories from '../../../components/Charts/Endurance/Running/Calories'


export default defineComponent({
  name: 'RunningMetrics',
  components: {
    Length, Duration, Calories
  },
  data() {
    return {}
  }
})
</script>
