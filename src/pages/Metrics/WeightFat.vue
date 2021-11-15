<template>
  <div class='row'>
    <div class='column'>
      <WeightCard/>
    </div>
    <div class='column'>
      <FatPercentageCard/>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import WeightCard from '../../components/Metrics/WeightFat/WeightCard'
import FatPercentageCard from '../../components/Metrics/WeightFat/FatPercentageCard'

export default defineComponent({
  name: 'Metrics',
  components: {
    WeightCard, FatPercentageCard
  }
})
</script>
