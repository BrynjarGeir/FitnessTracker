<template>
  <div class='row'>
    <div class='column'>
      <NarrowChestPressCard/>
    </div>
    <div class='column'>
      <CableRopeTricepPushdownCard/>
    </div>
    <div class='column'>
      <LyingTricepExtensionCard/>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import NarrowChestPressCard from '../../components/Metrics/Triceps/NarrowChestPressCard'
import CableRopeTricepPushdownCard from '../../components/Metrics/Triceps/CableRopeTricepPushdownCard'
import LyingTricepExtensionCard from '../../components/Metrics/Triceps/LyingTricepExtensionCard'

export default defineComponent({
  name: 'TricepsMetrics',
  components: {
    NarrowChestPressCard, CableRopeTricepPushdownCard, LyingTricepExtensionCard
  }
})
</script>
