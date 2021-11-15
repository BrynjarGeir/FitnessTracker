<template>
  <q-page class="q-pa-lg">
    <h5 class="q-mt-none"> Chest exercises </h5>
    <h6 class="q-mt-none"> Chest Press </h6>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w11"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n11"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w12"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n12"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w13"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n13"/></div></div> 
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w14"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n14"/></div></div>
    <q-btn @click="ex1"> Log exercise </q-btn> 
    
    <h6 class="q-mt-none"> Inclined Chest Press </h6>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w21"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n21"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w22"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n22"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w23"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n23"/></div></div>
    <q-btn @click="ex2"> Log exercise </q-btn> 

    <h6 class="q-mt-none"> Cable Fly </h6>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w31"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n31"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w31"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n32"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w31"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n33"/></div></div>
    <q-btn @click="ex3"> Log exercise </q-btn> 

    <h6 class="q-mt-none"> Press up </h6>
    <q-input type="number" placeholder="Number of iterations" v-model="n41"/>
    <q-input type="number" placeholder="Number of iterations" v-model="n42"/>
    <q-input type="number" placeholder="Number of iterations" v-model="n43"/>
    <q-btn @click="ex4"> Log exercise </q-btn> 

    <h6 class="q-mt-none"> Narrow Press Up </h6>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w51"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n51"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w52"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n52"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w53"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n53"/></div></div>
    <q-btn @click="ex5"> Log exercise </q-btn> 

    <h6 class="q-mt-none"> Dumbbel Chest Press </h6>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w61"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n61"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w62"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n62"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w63"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n63"/></div></div>
    <q-btn @click="ex6"> Log exercise </q-btn> 

    <h6 class="q-mt-none"> Dumbbell Chest Fly </h6>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w71"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n71"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w72"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n72"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w73"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n73"/></div></div>
    <q-btn @click="ex7"> Log exercise </q-btn> 

    <h6 class="q-mt-none"> Inclined Dumbbell Chest Fly </h6>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w81"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n81"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w82"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n82"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w83"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n83"/></div></div>
    <q-btn @click="ex8"> Log exercise </q-btn> 

    <h6 class="q-mt-none"> Machine Fly </h6>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w91"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n91"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w92"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n92"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w93"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n93"/></div></div>
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
        w21: null, w22: null, w23: null,
        w31: null, w32: null, w33: null,
        w51: null, w52: null, w53: null,
        w61: null, w62: null, w63: null,
        w71: null, w72: null, w73: null,
        w81: null, w82: null, w83: null,
        w91: null, w92: null, w93: null,
        n11: null, n12: null, n13: null, n14: null,
        n21: null, n22: null, n23: null,
        n31: null, n32: null, n33: null,
        n41: null, n42: null, n43: null,
        n51: null, n52: null, n53: null,
        n61: null, n62: null, n63: null,
        n71: null, n72: null, n73: null,
        n81: null, n82: null, n83: null,
        n91: null, n92: null, n93: null
    }
  },

  methods: {
    async ex1() {
      await setDoc(doc(db, 'chest', 'ChestPress' + Date.now()), {
          name: 'Chest Press',
          weight: [parseInt(this.w11), parseInt(this.w12), parseInt(this.w13), parseInt(this.w14)],
          iterattions:  [parseInt(this.n11), parseInt(this.n12), parseInt(this.n13), parseInt(this.n14)],
          date: Date.now()
      }).then(
          this.w11 = null, this.w12 = null, this.w13 = null, this.w14 = null,
        this.n11 = null, this.n12 = null, this.n13 = null, this.n14 = null
      )

    },
    async ex2() {
      await setDoc(doc(db, 'chest', 'Pull-up' + Date.now()), {
          name: 'Pull up',
          weight: [parseInt(this.w21), parseInt(this.w22), parseInt(this.w23)],
          iterations: [parseInte(this.n21), parseInt(this.n22), parseInt(this.n23)],
          date: Date.now()
      }).then(
            this.w21 = null, this.w22 = null, this.w23 = null,
            this.n21 = null, this.n22 = null, this.n23 = null
      )

    },
    async ex3() {
      await setDoc(doc(db, 'chest', 'Single-arm-row' + Date.now()), {
          name: 'Single-arm row',
          weight:  [parseInt(this.w21), parseInt(this.w22), parseInt(this.w23)],
          iterations: [parseInte(this.n21), parseInt(this.n22), parseInt(this.n23)],
          date: Date.now()
      }).then(
            this.w31 = null, this.w32 = null, this.w33 = null,
            this.n31 = null, this.n32 = null, this.n33 = null
      )

    },
    async ex4() {
      await setDoc(doc(db, 'chest', 'Inverted-row' + Date.now()), {
          name: 'Inverted row',
          iterations:  [parseInt(this.n41), parseInt(this.n42), parseInt(this.n43)],
          date: Date.now()
      }).then(
          this.n41 = null, this.n41 = null, this.n43 = null   
      )
    },
    async ex5() {    
      await setDoc(doc(db, 'chest', 'RenegadeRow' + Date.now()), {
          name: 'Renegade row',
          weight: [parseInt(this.w51), parseInt(this.w52), parseInt(this.w53)],
          iterattions: [parseInt(this.n51), parseInt(this.w52), parseInt(this.w53)],
          date: Date.now()
      }).then(
          this.w51 = null, this.w52 = null, this.w53 = null,
          this.n51 = null, this.n52 = null, this.n53 = null          
      )

    },
    async ex6() {
      setDoc(doc(db, 'chest', 'LatPulldown' + Date.now()), {
          name: 'Lat Pulldown',
          weight: [parseInt(this.w61), parseInt(this.w62), parseInt(this.w63)],
          iterations: [parseInt(this.n61), parseInt(this.w62), parseInt(this.w63)],
          date: Date.now()
      }).then(
            this.w61 = null, this.w62 = null, this.w63 = null,
            this.n61 = null, this.n62 = null, this.n63 = null
      )

    },
    async ex7() {
      await setDoc(doc(db, 'chest', 'Seated-Cable-Row' + Date.now()), {
          name: 'Seated Cable Row',
          weight: [parseInt(this.w71), parseInt(this.w72), parseInt(this.w73)],
          iterations: [parseInt(this.n61), parseInt(this.w62), parseInt(this.w63)],
          date: Date.now()
      }).then(
            this.w71 = null, this.w72 = null, this.w73 = null,
            this.n71 = null, this.n72 = null, this.n73 = null          
      )

    }      
  }
})
</script>

<style lang='scss'>

</style>