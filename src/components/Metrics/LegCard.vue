<template>
  <div class="q-pa-md">
    <q-card style="max-width: 400px">
      <q-item>
        <q-avatar size='150px' class='q-mb-sm'>
          <img src='../../assets/legs.jpg'/>
        </q-avatar>
      </q-item>

      <q-card-actions align="center" class="q-gutter-md">
        <q-btn to='/Metrics/Legs'> Leg Exercise Analytics </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'LegCard'
})
</script>
