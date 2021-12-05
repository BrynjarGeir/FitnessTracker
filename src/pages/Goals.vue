<template>
<q-input dark outlined v-model="GoalWeight" :readonly="readonly" :disable="disable" placeholder="Goal Weight" type="number" maxlength="3"><q-btn @click="LogWeight">Log Goal</q-btn></q-input>
<q-input dark outlined v-model="GoalFatPer" :readonly="readonly" :disable="disable" placeholder="Goal Fat Percentage" type="number" maxlength="3"><q-btn @click="LogFatPer">Log Goal</q-btn></q-input>
<q-input dark outlined v-model="GoalBench" :readonly="readonly" :disable="disable" placeholder="Bench Press Goal" type="number" maxlength="3"><q-btn @click="LogBench">Log Goal</q-btn></q-input>
<q-input dark outlined v-model="GoalDeadlift" :readonly="readonly" :disable="disable" placeholder="Deadlift Goal" type="number" maxlength="3"><q-btn @click="LogDeadlift">Log Goal</q-btn></q-input>
<q-input dark outlined v-model="GoalSquat" :readonly="readonly" :disable="disable" placeholder="Squat Goal" type="number" maxlength="3"><q-btn @click="LogSquat">Log Goal</q-btn></q-input>

</template>


<script>
import { defineComponent, ref } from 'vue'
import db from 'src/boot/firebase'
import { setDoc, doc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

export default defineComponent({
  data() {
    return {
      GoalWeight: ref(''), GoalFatPer: ref(''), GoalBench: ref(''), GoalDeadlift: ref(''), GoalSquat: ref(''),
      readonly: ref(false), disable: ref(false)
    }
  },
  methods: {
    async LogWeight() {
      const auth = getAuth()
      const uid = auth.currentUser.uid
      await setDoc(doc(db, 'fitnesstracker/' + uid + '/goals', 'Goal Weight'), {
        weight: parseInt(this.GoalWeight),
        date: Date.now()
      }).then(this.GoalWeight = ref(''))
    },
    async LogFatPer() {
      const auth = getAuth()
      const uid = auth.currentUser.uid
      await setDoc(doc(db, 'fitnesstracker/' + uid + '/goals', 'Goal Fat Percentage'), {
        per: parseInt(this.GoalFatPer),
        date: Date.now()
      }).then(this.GoalFatPer = ref(''))
    },
    async LogBench() {
      const auth = getAuth()
      const uid = auth.currentUser.uid
      await setDoc(doc(db, 'fitnesstracker/' + uid + '/goals', 'Goal Bench'), {
        weight: parseInt(this.GoalBench),
        date: Date.now()
      }).then(this.GoalBench = ref(''))
    },
    async LogDeadlift() {
      const auth = getAuth()
      const uid = auth.currentUser.uid
      await setDoc(doc(db, 'fitnesstracker/' + uid + '/goals', 'Goal Deadlift'), {
        weight: parseInt(this.GoalDeadlift),
        date: Date.now()
      }).then(this.GoalDeadlift = ref(''))
    },
    async LogSquat() {
      const auth = getAuth()
      const uid = auth.currentUser.uid
      await setDoc(doc(db, 'fitnesstracker/' + uid + '/goals', 'Goal Squat'), {
        weight: parseInt(this.GoalSquat),
        date: Date.now()
      }).then(this.GoalSquat = ref(''))

    }
  }
})
</script>

<style scoped>
.q-input{
  background-color: black;
}
.q-btn{
  background-color: grey;
}
</style>
