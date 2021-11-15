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
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import SquatCard from '../../components/Metrics/Legs/SquatCard'
import BulgarianSplitSquatCard from '../../components/Metrics/Legs/BulgarianSplitSquatCard'
import WalkingLungeCard from '../../components/Metrics/Legs/WalkingLungeCard'

export default defineComponent({
  name: 'Metrics',
  components: {
    SquatCard, BulgarianSplitSquatCard, WalkingLungeCard
  }
})
</script>
