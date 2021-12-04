<template>
  <q-page class="q-pa-lg">
    <h5 class="q-mt-none"> Tricep exercises </h5>
    <h6 class="q-mt-none"> Narrow Chest Press </h6>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w11"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n11"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w12"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n12"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w13"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n13"/></div></div> 
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w14"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n14"/></div></div>
    <q-btn @click="ex1"> Log exercise </q-btn> 
    
    <h6 class="q-mt-none"> Cable Rope Tricep Pushdown </h6>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w21"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n21"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w22"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n22"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w23"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n23"/></div></div>
    <q-btn @click="ex2"> Log exercise </q-btn> 

    <h6 class="q-mt-none"> Lying Tricep Extension </h6>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w31"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n31"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w32"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n32"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w33"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n33"/></div></div>
    <q-btn @click="ex3"> Log exercise </q-btn>

    <h6 class="q-mt-none"> Dips on Bench </h6>
    <div class='row'><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n41"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n42"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n43"/></div></div>
    <q-btn @click="ex4"> Log exercise </q-btn>

    <h6 class="q-mt-none"> Standing Overhead Cable Rope Tricep Extension </h6>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w51"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n51"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w52"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n52"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w53"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n53"/></div></div>
    <q-btn @click="ex5"> Log exercise </q-btn>     
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import db from 'src/boot/firebase'
import { setDoc, doc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

export default defineComponent({
  name: 'PageIndex',

  data() {
    return {
      w11: null, w12: null, w13: null, w14: null,
      w21: null, w22: null, w23: null,
      w31: null, w32: null, w33: null,
      w51: null, w52: null, w53: null,
      n11: null, n12: null, n13: null, n14: null,
      n21: null, n22: null, n23: null,
      n31: null, n32: null, n33: null,
      n41: null, n42: null, n43: null,
      n51: null, n52: null, n53: null
    }
  },

  methods: {
    async ex1() {
      const auth = getAuth()
      const userID = auth.currentUser.uid
      await setDoc(doc(db, 'fitnesstracker/' + userID + '/triceps', 'Narrow-Chest-Press' + Date.now()), {
        name: 'Narrow Chest Press',
        weight: [parseFloat(this.w11), parseFloat(this.w12), parseFloat(this.w13), parseFloat(this.w14)],
        iterattions:  [parseInt(this.n11), parseInt(this.n12), parseInt(this.n13), parseInt(this.n14)],
        date: Date.now()
      }).then(
        this.w11 = null, this.w12 = null, this.w13 = null, this.w14 = null,
        this.n11 = null, this.n12 = null, this.n13 = null, this.n14 = null
      )

    },
    async ex2() {
      const auth = getAuth()
      const userID = auth.currentUser.uid
      await setDoc(doc(db, 'fitnesstracker/' + userID + '/triceps', 'Cable-Rope-Tricep-Pulldown' + Date.now()), {
        name: 'Cable Rope Tricep Pulldown',
        weight: [parseFloat(this.w21), parseFloat(this.w22), parseFloat(this.w23)],
        iterations: [parseInt(this.n21), parseInt(this.n22), parseInt(this.n23)],
        date: Date.now()
      }).then(
        this.w21 = null, this.w22 = null, this.w23 = null,
        this.n21 = null, this.n22 = null, this.n23 = null
      )

    },
    async ex3() {
      const auth = getAuth()
      const userID = auth.currentUser.uid
      await setDoc(doc(db, 'fitnesstracker/' + userID + '/triceps', 'Lying-Tricep-Extension' + Date.now()), {
        name: 'Lying Tricep Extension',
        weight:  [parseFloat(this.w31), parseFloat(this.w32), parseFloat(this.w33)],
        iterations: [parseInt(this.n31), parseInt(this.n32), parseInt(this.n33)],
        date: Date.now()
      }).then(
        this.w31 = null, this.w32 = null, this.w33 = null,
        this.n31 = null, this.n32 = null, this.n33 = null
      )
    },
    async ex4() {
      const auth = getAuth()
      const userID = auth.currentUser.uid
      await setDoc(doc(db, 'fitnesstracker/' + userID + '/triceps', 'Dips-On-Bench' + Date.now()), {
        name: 'Dips On Bench',
        iterations: [parseInt(this.n41), parseInt(this.n42), parseInt(this.n43)],
        date: Date.now()
      }).then(
        this.n41 = null, this.n42 = null, this.n43 = null
      )
    },
    async ex5() {
      const auth = getAuth()
      const userID = auth.currentUser.uid
      await setDoc(doc(db, 'fitnesstracker/' + userID + '/triceps', 'Standing-Overhead-Cable-Tricep-Extension' + Date.now()), {
        name: 'Standing Overhead Cable Tricep Extension',
        weight: [parseFloat(this.w51), parseFloat(this.w52), parseFloat(this.w53)],
        iterations: [parseInt(this.n51), parseInt(this.n52), parseInt(this.n53)],
        date: Date.now()
      }).then(
        this.w51 = null, this.w52 = null, this.w53 = null,
        this.n51 = null, this.n52 = null, this.n53 = null
      )
    }           
  }
})
</script>

<style lang='scss'>

</style>