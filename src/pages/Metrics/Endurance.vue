<template>
  <div class='row'>
    <div class='column'>
      <RunningCard/>
    </div>
    <div class='column'>
      <CyclingCard/>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import RunningCard from '../../components/Metrics/Endurance/RunningCard'
import CyclingCard from '../../components/Metrics/Endurance/CyclingCard'

export default defineComponent({
  name: 'Metrics',
  components: {
    RunningCard, CyclingCard
  }
})
</script>
