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
      let weightGoal, fatGoal, benchGoal, deadliftGoal, squatGoal
      const qWeight = query(collection(db, 'fitnesstracker/' + userID + '/weight'), orderBy('date', 'desc'), limit(1))
      const qWeightSnapshot = await getDocs(qWeight)
      const qGoal = query(collection(db, 'fitnesstracker/' + userID + '/goals'), )
      const goals = await getDocs(qGoal)
      goals.forEach((doc) => {
        if (doc.id == 'Goal Weight') {
          weightGoal = doc.data().weight
          this.goalWeight = 'Weight at/under ' + weightGoal + 'kg'
        } else if (doc.id == 'Goal Fat Percentage') {
          fatGoal = doc.data().per
          this.goalFat = 'Fat percentage at/under ' + fatGoal + '%'
        } else if (doc.id == 'Goal Bench') {
          benchGoal = doc.data().weight
          this.goalBench = 'Benching at/over ' + benchGoal + 'kg'
        } else if (doc.id == 'Goal Deadlift') {
          deadliftGoal = doc.data().weight
          this.goalDeadlift = 'Deadlifting at/over ' + deadliftGoal + 'kg'
        } else if (doc.id == 'Goal Squat') {
          squatGoal = doc.data().weight
          this.goalSquat = 'Squatting at/over ' + squatGoal + 'kg'
        }
      })
      qWeightSnapshot.forEach((doc) => {
        currWeight = doc.data().weight
        if (currWeight <= weightGoal) { this.weight = ref(true) } else { this.weight = ref(false) }
      })
      const qFat = query(collection(db, 'fitnesstracker/' + userID + '/fat'), orderBy('date', 'desc'), limit(1))
      const qFatSnapshot = await getDocs(qFat)
      qFatSnapshot.forEach((doc) => {
        currFatPer = doc.data().percentage
        if (currFatPer <= fatGoal) { this.fat = ref(true) } else { this.fat = ref(false) }
      })
      const qBench = query(collection(db, 'fitnesstracker/' + userID + '/chest'), where('name', '==', 'Chest Press'), orderBy('date', 'desc'), limit(1))
      const qBenchSnapshot = await getDocs(qBench)
      qBenchSnapshot.forEach((doc) => {
        currBenchWeight = Math.max(...doc.data().weight)
        if (currBenchWeight >= benchGoal) { this.bench = ref(true) } else { this.bench = ref(false) }
      })
      const qDeadlift = query(collection(db, 'fitnesstracker/' + userID + '/back'), where('name', '==', 'Deadlift'), orderBy('date', 'desc'), limit(1))
      const qDeadliftSnapshot = await getDocs(qDeadlift)
      qDeadliftSnapshot.forEach((doc) => {
        currDeadWeight = Math.max(...doc.data().weight)
        if (currDeadWeight >= deadliftGoal) { this.deadlift = ref(true) } else { this.deadlift = ref(false) }
      })
      const qSquat = query(collection(db, 'fitnesstracker/' + userID + '/legs'), where('name', '==', 'Squat'), orderBy('date', 'desc'), limit(1))
      const qSquatSnapshot = await getDocs(qSquat)
      qSquatSnapshot.forEach((doc) => {
        currSquatWeight = Math.max(...doc.data().weight)
        if (currSquatWeight >= squatGoal) { this.squat = ref(true) } else { this.squat = ref(false) }
      })
    }
  }
})
</script>
