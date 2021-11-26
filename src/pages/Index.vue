<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md bg-grey-10 text-white">
    <div class="q-gutter-sm">
      <q-checkbox dark disable v-model="weight" :label="goalWeight"  color="teal" /><br>
      <q-checkbox dark disable v-model="fat" :label="goalFat" color="orange" /><br>
      <q-checkbox dark disable v-model="bench" :label="goalBench" color="red" /><br>
      <q-checkbox dark disable v-model="deadlift" :label="goalDeadlift" color="cyan" /><br>
      <q-checkbox dark disable v-model="squat" :label="goalSquat" color="magenta" /><br>
    </div>
  </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
import db from 'src/boot/firebase'
import { collection, query, orderBy, limit, getDocs, where, doc, getDoc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


export default defineComponent({
  name: 'PageIndex',
  data() {
    return {
      weight: null, fat: null, bench: null, deadlift: null, squat: null,
      goalWeight: null, goalFat: null, goalBench: null, goalDeadlift: null, goalSquat: null,

    }
  },
  mounted() {
    this.getCheckboxData()
  },
  methods: {
    async getCheckboxData() {
      const auth = getAuth()
      const userID = auth.currentUser.uid
      let currWeight, currFatPer, currBenchWeight, currDeadWeight, currSquatWeight
      const qWeight = query(collection(db, 'fitnesstracker/' + userID + '/weight'), orderBy('date', 'desc'), limit(1))
      const qWeightSnapshot = await getDocs(qWeight)
      const qGoal = query(collection(db, 'fitnesstracker/' + userID + '/goals'), )
      const goals = await getDocs(qGoal)
      goals.forEach((doc) => {
        if (doc.id == 'Goal Weight') {
          const weight = doc.data().weight
          this.goalWeight = 'Weight at/under ' + weight + 'kg'
        } else if (doc.id == 'Goal Fat Percentage') {
          const fat = doc.data().per
          this.goalFat = 'Fat percentage at/under ' + fat + '%'
        } else if (doc.id == 'Goal Bench') {
          const bench = doc.data().weight
          this.goalBench = 'Benching at/over ' + bench + 'kg'
        } else if (doc.id == 'Goal Deadlift') {
          const deadlift = doc.data().weight
          this.goalDeadlift = 'Deadlifting at/over ' + deadlift + 'kg'
        } else if (doc.id == 'Goal Squat') {
          const squat = doc.data().weight
          this.goalSquat = 'Squatting at/over ' + squat + 'kg'
        }
      })
      qWeightSnapshot.forEach((doc) => {
        currWeight = doc.data().weight
        if (currWeight <= 82) { this.weight = ref(true) } else { this.weight = ref(false) }
      })
      const qFat = query(collection(db, 'fitnesstracker/' + userID + '/fat'), orderBy('date', 'desc'), limit(1))
      const qFatSnapshot = await getDocs(qFat)
      qFatSnapshot.forEach((doc) => {
        currFatPer = doc.data().percentage
        if (currFatPer <= 15) { this.fat = ref(true) } else { this.fat = ref(false) }
      })
      const qBench = query(collection(db, 'fitnesstracker/' + userID + '/chest'), where('name', '==', 'Chest Press'), orderBy('date', 'desc'), limit(1))
      const qBenchSnapshot = await getDocs(qBench)
      qBenchSnapshot.forEach((doc) => {
        currBenchWeight = Math.max(...doc.data().weight)
        if (currBenchWeight >= 90) { this.bench = ref(true) } else { this.bench = ref(false) }
      })
      const qDeadlift = query(collection(db, 'fitnesstracker/' + userID + '/back'), where('name', '==', 'Deadlift'), orderBy('date', 'desc'), limit(1))
      const qDeadliftSnapshot = await getDocs(qDeadlift)
      qDeadliftSnapshot.forEach((doc) => {
        currDeadWeight = Math.max(...doc.data().weight)
        if (currDeadWeight >= 150) { this.deadlift = ref(true) } else { this.deadlift = ref(false) }
      })
      const qSquat = query(collection(db, 'fitnesstracker/' + userID + '/legs'), where('name', '==', 'Squat'), orderBy('date', 'desc'), limit(1))
      const qSquatSnapshot = await getDocs(qSquat)
      qSquatSnapshot.forEach((doc) => {
        currSquatWeight = Math.max(...doc.data().weight)
        if (currSquatWeight >= 100) { this.squat = ref(true) } else { this.squat = ref(false) }
      })
    }
  }
})
</script>
