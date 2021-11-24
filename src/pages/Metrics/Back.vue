<template>
  <div class='row'>
    <div class='column'>
      <DeadliftCard/>
    </div>
    <div class='column'>
      <PullUpCard/>
    </div>
    <div class='column'>
      <SingleArmRowCard/>
    </div>
    <div class='column'>
      <InvertedRowCard/>
    </div>
    <div class='column'>
      <RenegadeRowCard/>
    </div>
    <div class='column'>
      <LatPulldownWideGripCard/>
    </div>
    <div class='column'>
      <LatPulldownCloseGripCard/>
    </div>
    <div class='column'>
      <SeatedCableRowCard/>
    </div>
    <div class='column'>
      <SupermanPullCard/>
    </div>
    <div class='column'>
      <StandingRowCard/>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import DeadliftCard from '../../components/Metrics/Back/DeadliftCard'
import PullUpCard from '../../components/Metrics/Back/PullUpCard'
import SingleArmRowCard from '../../components/Metrics/Back/SingleArmRowCard'
import InvertedRowCard from '../../components/Metrics/Back/InvertedRowCard'
import RenegadeRowCard from '../../components/Metrics/Back/RenegadeRowCard'
import LatPulldownWideGripCard from '../../components/Metrics/Back/LatPulldownWideGripCard'
import LatPulldownCloseGripCard from '../../components/Metrics/Back/LatPulldownCloseGripCard'
import SeatedCableRowCard from '../../components/Metrics/Back/SeatedCableRowCard'
import StandingRowCard from '../../components/Metrics/Back/StandingRowCard'
import SupermanPullCard from '../../components/Metrics/Back/SupermanPullCard'


export default defineComponent({
  name: 'Metrics',
  components: {
    DeadliftCard, PullUpCard, SingleArmRowCard, InvertedRowCard, RenegadeRowCard, LatPulldownWideGripCard, 
    LatPulldownCloseGripCard, SeatedCableRowCard, StandingRowCard, SupermanPullCard
  }
})
</script>
