<template>
  <div class='row'>
    <div class='column'>
      <WoodChopperCard/>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import WoodChopperCard from '../../components/Metrics/Core/WoodChopperCard'

export default defineComponent({
  name: 'Metrics',
  components: {
    WoodChopperCard
  }
})
</script>
