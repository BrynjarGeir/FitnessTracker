<template>
  <q-page class="q-pa-lg">
    <h5 class="q-mt-none"> Back exercises </h5>
    <h6 class="q-mt-none"> Deadlift </h6>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w11"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n11"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w12"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n12"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w13"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n13"/></div></div> 
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w14"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n14"/></div></div>
    <q-btn @click="ex1"> Log exercise </q-btn> 
    
    <h6 class="q-mt-none"> Pull up </h6>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w21"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n21"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w22"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n22"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w23"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n23"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w24"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n24"/></div></div>

    <q-btn @click="ex2"> Log exercise </q-btn> 

    <h6 class="q-mt-none"> Single-arm Row </h6>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w31"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n31"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w31"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n32"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w31"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n33"/></div></div>
    <q-btn @click="ex3"> Log exercise </q-btn> 

    <h6 class="q-mt-none"> Inverted Row </h6>
    <q-input type="number" placeholder="Number of iterations" v-model="n41"/>
    <q-input type="number" placeholder="Number of iterations" v-model="n42"/>
    <q-input type="number" placeholder="Number of iterations" v-model="n43"/>
    <q-btn @click="ex4"> Log exercise </q-btn> 

    <h6 class="q-mt-none"> Renegade Row </h6>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w51"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n51"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w52"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n52"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w53"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n53"/></div></div>
    <q-btn @click="ex5"> Log exercise </q-btn> 

    <h6 class="q-mt-none"> Lat Pulldown </h6>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w61"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n61"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w62"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n62"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w63"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n63"/></div></div>
    <q-btn @click="ex6"> Log exercise </q-btn> 

    <h6 class="q-mt-none"> Seated Cable Row </h6>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w71"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n71"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w72"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n72"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w73"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n73"/></div></div>
    <q-btn @click="ex7"> Log exercise </q-btn>

    <h6 class="q-mt-none"> Superman Pull </h6>
    <q-input type="number" placeholder="Number of iterations" v-model="n81"/>
    <q-input type="number" placeholder="Number of iterations" v-model="n82"/>
    <q-input type="number" placeholder="Number of iterations" v-model="n83"/>
    <q-btn @click="ex8"> Log exercise </q-btn>

    <h6 class="q-mt-none"> Standing Row </h6>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w91"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n91"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w92"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n92"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w93"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n93"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w94"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n94"/></div></div>

    <q-btn @click="ex9"> Log exercise </q-btn> 
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import db from 'src/boot/firebase'
import { collection, setDoc, onSnapshot, doc } from 'firebase/firestore'
//import exercises from 'src/boot/firebase'

export default defineComponent({
  name: 'PageIndex',

  data() {
    return {
        w11: null, w12: null, w13: null, w14: null,
        w21: null, w22: null, w23: null, w24: null,
        w31: null, w32: null, w33: null,
        w51: null, w52: null, w53: null,
        w61: null, w62: null, w63: null,
        w71: null, w72: null, w73: null,
        w91: null, w92: null, w93: null, w94: null,
        n11: null, n12: null, n13: null, n14: null,
        n21: null, n22: null, n23: null, n24: null,
        n31: null, n32: null, n33: null,
        n41: null, n42: null, n43: null,
        n51: null, n52: null, n53: null,
        n61: null, n62: null, n63: null,
        n71: null, n72: null, n73: null,
        n81: null, n82: null, n83: null,
        n91: null, n92: null, n93: null, n94: null
    }
  },

  methods: {
    async ex1() {
      await setDoc(doc(db, 'back', 'Deadlift' + Date.now()), {
          name: 'Deadlift',
          weight: [parseFloat(this.w11), parseFloat(this.w12), parseFloat(this.w13), parseFloat(this.w14)],
          iterations:  [parseInt(this.n11), parseInt(this.n12), parseInt(this.n13), parseInt(this.n14)],
          date: Date.now()
      }).then(
          this.w11 = null, this.w12 = null, this.w13 = null, this.w14 = null,
          this.n11 = null, this.n12 = null, this.n13 = null, this.n14 = null
      )

    },
    async ex2() {
      await setDoc(doc(db, 'back', 'Pull-Up' + Date.now()), {
          name: 'Pull Up',
          weight: [parseFloat(this.w21), parseFloat(this.w22), parseFloat(this.w23), parseFloat(this.w24)],
          iterations: [parseInt(this.n21), parseInt(this.n22), parseInt(this.n23), parseInt(this.n24)],
          date: Date.now()
      }).then(
            this.w21 = null, this.w22 = null, this.w23 = null, this.w24 = null,
            this.n21 = null, this.n22 = null, this.n23 = null, this.n24 = null
      )

    },
    async ex3() {
      await setDoc(doc(db, 'back', 'Single-Arm-Row' + Date.now()), {
          name: 'Single-Arm Row',
          weight:  [parseFloat(this.w21), parseFloat(this.w22), parseFloat(this.w23)],
          iterations: [parseInt(this.n21), parseInt(this.n22), parseInt(this.n23)],
          date: Date.now()
      }).then(
            this.w31 = null, this.w32 = null, this.w33 = null,
            this.n31 = null, this.n32 = null, this.n33 = null
      )

    },
    async ex4() {
      await setDoc(doc(db, 'back', 'Inverted-Row' + Date.now()), {
          name: 'Inverted Row',
          iterations:  [parseInt(this.n41), parseInt(this.n42), parseInt(this.n43)],
          date: Date.now()
      }).then(
          this.n41 = null, this.n41 = null, this.n43 = null   
      )
    },
    async ex5() {    
      await setDoc(doc(db, 'back', 'RenegadeRow' + Date.now()), {
          name: 'Renegade Row',
          weight: [parseFloat(this.w51), parseFloat(this.w52), parseFloat(this.w53)],
          iterattions: [parseInt(this.n51), parseInt(this.w52), parseInt(this.w53)],
          date: Date.now()
      }).then(
          this.w51 = null, this.w52 = null, this.w53 = null,
          this.n51 = null, this.n52 = null, this.n53 = null          
      )

    },
    async ex6() {
      setDoc(doc(db, 'back', 'Lat-Pulldown' + Date.now()), {
          name: 'Lat Pulldown',
          weight: [parseFloat(this.w61), parseFloat(this.w62), parseFloat(this.w63)],
          iterations: [parseInt(this.n61), parseInt(this.n62), parseInt(this.n63)],
          date: Date.now()
      }).then(
            this.w61 = null, this.w62 = null, this.w63 = null,
            this.n61 = null, this.n62 = null, this.n63 = null
      )

    },
    async ex7() {
      await setDoc(doc(db, 'back', 'Seated-Cable-Row' + Date.now()), {
          name: 'Seated Cable Row',
          weight: [parseFloat(this.w71), parseFloat(this.w72), parseFloat(this.w73)],
          iterations: [parseInt(this.n71), parseInt(this.n72), parseInt(this.n73)],
          date: Date.now()
      }).then(
            this.w71 = null, this.w72 = null, this.w73 = null,
            this.n71 = null, this.n72 = null, this.n73 = null          
      )

    },
    async ex8() {
      await setDoc(doc(db, 'back', 'Superman-Pull' + Date.now()), {
          name: 'Superman Pull',
          iterations: [parseInt(this.n81), parseInt(this.n82), parseInt(this.n83)],
          date: Date.now()
      }).then(
            this.n81 = null, this.n82 = null, this.n83 = null          
      )
    },
    async ex9() {
      await setDoc(doc(db, 'back', 'Standing-Row' + Date.now()), {
          name: 'Standing Row',
          weight: [parseFloat(this.w91), parseFloat(this.w92), parseFloat(this.w93), parseFloat(this.w94)],
          iterations: [parseInt(this.n91), parseInt(this.n92), parseInt(this.n93), parseInt(this.n94)],
          date: Date.now()
      }).then(
            this.w91 = null, this.w92 = null, this.w93 = null, this.w94 = null,
            this.n91 = null, this.n92 = null, this.n93 = null, this.n94 = null
      )
    }              
  }
})
</script>

<style lang='scss'>

</style>