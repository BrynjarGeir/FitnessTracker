<template>
  <div class='row'>
    <div class='column'>
      <BarbellCurlCard/>
    </div>
    <div class='column'>
      <HammerCurlCard/>
    </div>
    <div class='column'>
      <InclinedDumbbellCurlCard/>
    </div>
    <div class='column'>
      <StandingDumbbellCurlCard/>
    </div>
    <div class='column'>
      <ZottmanCurlCard/>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import BarbellCurlCard from '../../components/Metrics/Biceps/BarbellCurlCard'
import HammerCurlCard from '../../components/Metrics/Biceps/HammerCurlCard'
import InclinedDumbbellCurlCard from '../../components/Metrics/Biceps/InclinedDumbbellCurlCard'
import StandingDumbbellCurlCard from '../../components/Metrics/Biceps/StandingDumbbellCurlCard'
import ZottmanCurlCard from '../../components/Metrics/Biceps/ZottmanCurlCard'


export default defineComponent({
  name: 'BicepsMetrics',
  components: {
    BarbellCurlCard, HammerCurlCard, InclinedDumbbellCurlCard, StandingDumbbellCurlCard, ZottmanCurlCard
  }
})
</script>
