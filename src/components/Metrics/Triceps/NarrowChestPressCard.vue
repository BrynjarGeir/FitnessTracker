<template>
  <div class="q-pa-md">
    <q-card style="max-width: 400px">
      <q-item>
        <q-avatar size='150px' class='q-mb-sm'>
          <img src='../../../assets/narrowchestpress.jpg'/>
        </q-avatar>
      </q-item>

      <q-card-actions align="right" class="q-gutter-md">
        <q-btn to='/Metrics/Triceps/NarrowChestPress'> Narrow Chest Press Exercise Analytics </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template> 

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'NarrowChestPressCard'
})
</script>


<style lang="scss">

</style>