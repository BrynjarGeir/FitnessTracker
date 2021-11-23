<template>
  <div class='row'>
    <div class='column'>
      <WoodChopperCard/>
    </div>
    <div class='column'>
      <CrunchCard/>
    </div>
    <div class='column'>
      <InverseCrunchCard/>
    </div>
    <div class='column'>
      <MachineCrunchCard/>
    </div>
    <div class='column'>
      <MachineTorsoRotationCard/>
    </div>    
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import WoodChopperCard from '../../components/Metrics/Core/WoodChopperCard'
import CrunchCard from '../../components/Metrics/Core/CrunchCard'
import InverseCrunchCard from '../../components/Metrics/Core/InverseCrunchCard'
import MachineCrunchCard from '../../components/Metrics/Core/MachineCrunchCard'
import MachineTorsoRotationCard from '../../components/Metrics/Core/MachineTorsoRotationCard'


export default defineComponent({
  name: 'Metrics',
  components: {
    WoodChopperCard, CrunchCard, InverseCrunchCard, MachineCrunchCard, MachineTorsoRotationCard
  }
})
</script>
