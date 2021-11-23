<template>
  <div class='row'>
    <div class='column'>
      <ChestPressCard/>
    </div>
    <div class='column'>
      <InclinedChestPressCard/>
    </div>
    <div class='column'>
      <CableFlyCard/>
    </div>
    <div class='column'>
      <PressUpCard/>
    </div>
    <div class='column'>
      <NarrowPressUpCard/>
    </div>
    <div class='column'>
      <DumbbellChestPressCard/>
    </div>
    <div class='column'>
      <DumbbellChestFlyCard/>
    </div>
    <div class='column'>
      <InclinedDumbbellChestPressCard/>
    </div>
    <div class='column'>
      <InclinedDumbbellChestFlyCard/>
    </div>
    <div class='column'>
      <MachineFlyCard/>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import ChestPressCard from '../../components/Metrics/Chest/ChestPressCard'
import InclinedChestPressCard from '../../components/Metrics/Chest/InclinedChestPressCard'
import CableFlyCard from '../../components/Metrics/Chest/CableFlyCard'
import PressUpCard from '../../components/Metrics/Chest/PressUpCard'
import NarrowPressUpCard from '../../components/Metrics/Chest/NarrowPressUpCard'
import DumbbellChestPressCard from '../../components/Metrics/Chest/DumbbellChestPressCard'
import DumbbellChestFlyCard from '../../components/Metrics/Chest/DumbbellChestFlyCard'
import InclinedDumbbellChestFlyCard from '../../components/Metrics/Chest/InclinedDumbbellChestFlyCard'
import MachineFlyCard from '../../components/Metrics/Chest/MachineFlyCard'
import InclinedDumbbellChestPressCard from '../../components/Metrics/Chest/InclinedDumbbellChestPressCard'




export default defineComponent({
  name: 'Metrics',
  components: {
    ChestPressCard, InclinedChestPressCard, CableFlyCard, PressUpCard, NarrowPressUpCard, DumbbellChestPressCard,
    DumbbellChestFlyCard, InclinedDumbbellChestFlyCard, MachineFlyCard, InclinedDumbbellChestPressCard
  }
})
</script>
