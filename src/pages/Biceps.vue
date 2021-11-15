<template>
  <q-page class="q-pa-lg">
    <h5 class="q-mt-none"> Bicep exercises </h5>
    <h6 class="q-mt-none"> Barbell Curl </h6>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w11"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n11"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w12"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n12"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w13"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n13"/></div></div> 
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w14"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n14"/></div></div>
    <q-btn @click="ex1"> Log exercise </q-btn>

    <h6 class="q-mt-none"> Hammer Curl </h6>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w31"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n31"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w32"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n32"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w33"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n33"/></div></div>
    <q-btn @click="ex3"> Log exercise </q-btn> 

    <h6 class="q-mt-none"> Standing Dumbbell Curl </h6>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w41"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n41"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w41"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n42"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w41"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n43"/></div></div>
    <q-btn @click="ex4"> Log exercise </q-btn>  

    <h6 class="q-mt-none"> Inclined Dumbbell Curl </h6>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w51"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n51"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w52"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n52"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w53"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n53"/></div></div>
    <q-btn @click="ex5"> Log exercise </q-btn> 

    <h6 class="q-mt-none"> Zottman Curl </h6>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w61"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n61"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w62"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n62"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w63"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n63"/></div></div>
    <q-btn @click="ex6"> Log exercise </q-btn> 
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
        w31: null, w32: null, w33: null,
        w41: null, w42: null, w43: null,
        w51: null, w52: null, w53: null,
        w61: null, w62: null, w63: null,
        n11: null, n12: null, n13: null, n14: null,
        n31: null, n32: null, n33: null,
        n41: null, n42: null, n43: null,
        n51: null, n52: null, n53: null,
        n61: null, n62: null, n63: null
    }
  },

  methods: {
    async ex1() {
      await setDoc(doc(db, 'biceps', 'Barbell-Curl' + Date.now()), {
          name: 'Barbell Curl',
          weight: [parseInt(this.w11), parseInt(this.w12), parseInt(this.w13), parseInt(this.w14)],
          iterations: [parseInt(this.n11), parseInt(this.n12), parseInt(this.n13), parseInt(this.n14)],
          date: Date.now()
      }).then(
            this.w11 = null, this.w12 = null, this.w13 = null, this.w14 = null,
            this.n11 = null, this.n12 = null, this.n13 = null, this.n14 = null
      )

    },
    async ex3() {
      await setDoc(doc(db, 'biceps', 'Hammer-Curl' + Date.now()), {
          name: 'Hammer Curl',
          weight:  [parseInt(this.w21), parseInt(this.w22), parseInt(this.w23)],
          iterations: [parseInte(this.n21), parseInt(this.n22), parseInt(this.n23)],
          date: Date.now()
      }).then(
            this.w31 = null, this.w32 = null, this.w33 = null,
            this.n31 = null, this.n32 = null, this.n33 = null
      )

    },
    async ex4() {
      await setDoc(doc(db, 'biceps', 'Standing-Dumbbell-Curl' + Date.now()), {
          name: 'Standing Dumbbell Curl',
          iterations:  [parseInt(this.n41), parseInt(this.n42), parseInt(this.n43)],
          date: Date.now()
      }).then(
          this.n41 = null, this.n41 = null, this.n43 = null   
      )
    },
    async ex5() {    
      await setDoc(doc(db, 'biceps', 'Inclined-Dumbbell-Curl' + Date.now()), {
          name: 'Inclined Dumbbell Curl',
          weight: [parseInt(this.w51), parseInt(this.w52), parseInt(this.w53)],
          iterattions: [parseInt(this.n51), parseInt(this.w52), parseInt(this.w53)],
          date: Date.now()
      }).then(
          this.w51 = null, this.w52 = null, this.w53 = null,
          this.n51 = null, this.n52 = null, this.n53 = null          
      )

    },
    async ex6() {
      setDoc(doc(db, 'biceps', 'Zottman-Curl' + Date.now()), {
          name: 'Zottman Curl',
          weight: [parseInt(this.w61), parseInt(this.w62), parseInt(this.w63)],
          iterations: [parseInt(this.n61), parseInt(this.w62), parseInt(this.w63)],
          date: Date.now()
      }).then(
            this.w61 = null, this.w62 = null, this.w63 = null,
            this.n61 = null, this.n62 = null, this.n63 = null
      )

    }     
  }
})
</script>

<style lang='scss'>

</style>