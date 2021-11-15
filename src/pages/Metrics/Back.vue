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
      <LatPulldownCard/>
    </div>
    <div class='column'>
      <SeatedCableRowCard/>
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
import LatPulldownCard from '../../components/Metrics/Back/LatPulldownCard'
import SeatedCableRowCard from '../../components/Metrics/Back/SeatedCableRowCard'



export default defineComponent({
  name: 'Metrics',
  components: {
    DeadliftCard, PullUpCard, SingleArmRowCard, InvertedRowCard, RenegadeRowCard, LatPulldownCard, SeatedCableRowCard
  }
})
</script>
