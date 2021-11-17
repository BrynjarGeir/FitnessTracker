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
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w31"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n32"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w31"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n33"/></div></div>
    <q-btn @click="ex3"> Log exercise </q-btn> 
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import db from 'src/boot/firebase'
import { setDoc, doc } from 'firebase/firestore'
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
        n11: null, n12: null, n13: null, n14: null,
        n21: null, n22: null, n23: null,
        n31: null, n32: null, n33: null,
        n41: null, n42: null, n43: null,
        n51: null, n52: null, n53: null,
        n61: null, n62: null, n63: null,
        n71: null, n72: null, n73: null
    }
  },

  methods: {
    async ex1() {
      await setDoc(doc(db, 'triceps', 'Narrow-chest-press' + Date.now()), {
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
      await setDoc(doc(db, 'triceps', 'Cable-rope-tricep-pulldown' + Date.now()), {
          name: 'Cable Rope Tricep Pulldown',
          weight: [parseFloat(this.w21), parseFloat(this.w22), parseFloat(this.w23)],
          iterations: [parseInte(this.n21), parseInt(this.n22), parseInt(this.n23)],
          date: Date.now()
      }).then(
            this.w21 = null, this.w22 = null, this.w23 = null,
            this.n21 = null, this.n22 = null, this.n23 = null
      )

    },
    async ex3() {
      await setDoc(doc(db, 'triceps', 'Lying-tricep-extension' + Date.now()), {
          name: 'Lying Tricep Extension',
          weight:  [parseFloat(this.w21), parseFloat(this.w22), parseFloat(this.w23)],
          iterations: [parseInte(this.n21), parseInt(this.n22), parseInt(this.n23)],
          date: Date.now()
      }).then(
            this.w31 = null, this.w32 = null, this.w33 = null,
            this.n31 = null, this.n32 = null, this.n33 = null
      )
    }    
  }
})
</script>

<style lang='scss'>

</style>