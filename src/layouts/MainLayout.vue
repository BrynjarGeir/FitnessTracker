<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <q-btn to='/'>Fitness Tracker</q-btn>
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

 <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="250"
        :breakpoint="600"
      >
        <q-scroll-area style="height: calc(100% - 100px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item clickable v-ripple to='/Legs'>
              <q-item-section avatar>
                <q-icon name="airline_seat_legroom_extra" />
              </q-item-section>

              <q-item-section>
                Leg Exercises
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to='/Back'>
              <q-item-section avatar>
                <q-icon name="arrow_back" />
              </q-item-section>

              <q-item-section>
                Back Exercises
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to='/Chest'>
              <q-item-section avatar>
                <q-icon name="accessibility_new" />
              </q-item-section>

              <q-item-section>
                Chest Exercises
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to='/Triceps'>
              <q-item-section avatar>
                <q-icon name="more_vert" />
              </q-item-section>

              <q-item-section>
                Tricep Exercises
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to='/Biceps'>
              <q-item-section avatar>
                <q-icon name='hdr_strong'/>
              </q-item-section>

              <q-item-section>
                Bicep Exercises
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to='/Endurance'>
              <q-item-section avatar>
                <q-icon name='directions_run'/>
              </q-item-section>

              <q-item-section>
                Endurance Exercises
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to='/WeightFat'>
              <q-item-section avatar>
                <q-icon name='cake'/>
              </q-item-section>

              <q-item-section>
                Weight and fat %
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to='/Metrics/Metrics'>
              <q-item-section avatar>
                <q-icon name='analytics'/>
              </q-item-section>

              <q-item-section>
                Metrics and data
              </q-item-section>
            </q-item>


          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="../assets/sweating.jpg" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="../ogRio.jpg">
            </q-avatar>
            <div class="text-weight-bold">Brynjar Geir Sigurðsson</div>
            <div>@brynjargeir</div>
          </div>
        </q-img>
      </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
  },

  setup () {
    const leftDrawerOpen = ref(true)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
