<template>
  <div class='row'>
    <div class='column'>
      <RunningCard/>
    </div>
    <div class='column'>
      <CyclingCard/>
    </div>
    <div class='column'>
      <SwimmingCard/>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import RunningCard from '../../components/Metrics/Endurance/RunningCard'
import CyclingCard from '../../components/Metrics/Endurance/CyclingCard'
import SwimmingCard from '../../components/Metrics/Endurance/SwimmingCard'

export default defineComponent({
  name: 'Metrics',
  components: {
    RunningCard, CyclingCard, SwimmingCard
  }
})
</script>
