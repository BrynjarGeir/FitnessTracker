<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md bg-grey-10 text-white">
    <div class="q-gutter-sm">
      <q-checkbox dark disable v-model="teal" label="Weight at under 82kg" color="teal" /><br>
      <q-checkbox dark disable v-model="orange" label="Fat percentage at under 10%" color="orange" /><br>
      <q-checkbox dark disable v-model="red" label="Benching at/over 100kg" color="red" /><br>
      <q-checkbox dark disable v-model="cyan" label="Deadlift at/over 150kg" color="cyan" /><br>
    </div>
  </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import db from 'src/boot/firebase'
import { collection, query, orderBy, limit, getDocs, where } from 'firebase/firestore'


export default defineComponent({
  name: 'PageIndex',
  data() {
    return {
      teal: null, orange: null, red: null, cyan: null
    }
  },
  mounted() {
    this.getCheckboxData()
  },
  methods: {
    async getCheckboxData() {
      let currWeight, currFatPer, currBenchWeight, currDeadWeight
        const qWeight = query(collection(db, 'weight'), orderBy('date', 'desc'), limit(1))
        const qWeightSnapshot = await getDocs(qWeight)
        qWeightSnapshot.forEach((doc) => {
          currWeight = doc.data().weight
          if (currWeight <= 82) { this.teal = ref(true) } else { this.teal = ref(false) }
        })
        const qFat = query(collection(db, 'fat'), orderBy('date', 'desc'), limit(1))
        const qFatSnapshot = await getDocs(qFat)
        qFatSnapshot.forEach((doc) => {
          currFatPer = doc.data().percentage
          if (currFatPer <= 10) { this.orange = ref(true) } else { this.orange = ref(false) }
        })
        const qBench = query(collection(db, 'chest'), where('name', '==', 'Chest Press'), orderBy('date', 'desc'), limit(1))
        const qBenchSnapshot = await getDocs(qBench)
        qBenchSnapshot.forEach((doc) => {
          currBenchWeight = Math.max(...doc.data().weight)
          if (currBenchWeight >= 100) { this.red = ref(true) } else { this.red = ref(false) }
        })
        const qDeadlift = query(collection(db, 'back'), where('name', '==', 'Deadlift'), orderBy('date', 'desc'), limit(1))
        const qDeadliftSnapshot = await getDocs(qDeadlift)
        qDeadliftSnapshot.forEach((doc) => {
          currDeadWeight = Math.max(...doc.data().weight)
          if (currDeadWeight >= 150) { this.cyan = ref(true) } else { this.cyan = ref(false) }
        })
      }
    }
})
</script>
