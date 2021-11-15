<template>
  <div class='row'>
    <div class='column'>
      <LegCard/>
    </div>
    <div class='column'>
      <BackCard/>
    </div>
    <div class='column'>
      <ChestCard/>
    </div>
    <div class='column'>
      <TricepCard/>
    </div>
    <div class='column'>
      <BicepCard/>
    </div>
    <div class='column'>
      <EnduranceCard/>
    </div>
    <div class='column'>
      <WeightFatCard/>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import LegCard from '../../components/Metrics/LegCard'
import BackCard from '../../components/Metrics/BackCard'
import ChestCard from '../../components/Metrics/ChestCard'
import TricepCard from '../../components/Metrics/TricepsCard'
import BicepCard from '../../components/Metrics/BicepsCard'
import EnduranceCard from '../../components/Metrics/EnduranceCard'
import WeightFatCard from '../../components/Metrics/WeightFatCard'


export default defineComponent({
  name: 'Metrics',
  components: {
    LegCard, BackCard, ChestCard, TricepCard, BicepCard, EnduranceCard, WeightFatCard
  }
})
</script>
