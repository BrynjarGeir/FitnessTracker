<template>
  <div class='row'>
    <div class='column'>
      <SquatCard/>
    </div>
    <div class='column'>
      <BulgarianSplitSquatCard/>
    </div>
    <div class='column'>
      <WalkingLungeCard/>
    </div>
    <div class='column'>
      <KettlebellSquatCard/>
    </div>
    <div class='column'>
      <MachineCalfPressCard/>
    </div>
    <div class='column'>
      <LungeWPlateCard/>
    </div>
    <div class='column'>
      <MachineLegPressCard/>
    </div>
    <div class='column'>
      <StiffDeadliftCard/>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import SquatCard from '../../components/Metrics/Legs/SquatCard'
import BulgarianSplitSquatCard from '../../components/Metrics/Legs/BulgarianSplitSquatCard'
import WalkingLungeCard from '../../components/Metrics/Legs/WalkingLungeCard'
import KettlebellSquatCard from '../../components/Metrics/Legs/KettlebellSquatCard'
import MachineCalfPressCard from '../../components/Metrics/Legs/MachineCalfPressCard'
import MachineLegPressCard from '../../components/Metrics/Legs/MachinelegPressCard'
import LungeWPlateCard from '../../components/Metrics/Legs/LungeWPlateCard'
import StiffDeadliftCard from '../../components/Metrics/Legs/StiffDeadliftCard'

export default defineComponent({
  name: 'Metrics',
  components: {
    SquatCard, BulgarianSplitSquatCard, WalkingLungeCard, KettlebellSquatCard, MachineCalfPressCard, LungeWPlateCard, MachineLegPressCard, StiffDeadliftCard
  }
})
</script>
