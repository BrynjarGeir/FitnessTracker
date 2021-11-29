<template>
  <q-page class="q-pa-lg">
    <h5 class="q-mt-none"> Bicep exercises </h5>
    <h6 class="q-mt-none"> Barbell Curl </h6>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w11"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n11"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w12"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n12"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w13"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n13"/></div></div> 
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w14"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n14"/></div></div>
    <q-btn @click="ex1"> Log exercise </q-btn> <br>

    <h6 class="q-mt-none"> Hammer Curl </h6>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w31"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n31"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w32"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n32"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w33"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n33"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w34"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n34"/></div></div>
    <q-btn @click="ex3"> Log exercise </q-btn> <br> 

    <h6 class="q-mt-none"> Standing Dumbbell Curl </h6>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w41"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n41"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w42"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n42"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w43"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n43"/></div></div>
    <q-btn @click="ex4"> Log exercise </q-btn> <br>  

    <h6 class="q-mt-none"> Inclined Dumbbell Curl </h6>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w51"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n51"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w52"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n52"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w53"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n53"/></div></div>
    <q-btn @click="ex5"> Log exercise </q-btn> <br> 

    <h6 class="q-mt-none"> Zottman Curl </h6>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w61"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n61"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w62"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n62"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w63"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n63"/></div></div>
    <q-btn @click="ex6"> Log exercise </q-btn> <br> 

    <h6 class="q-mt-none"> EZ-bar curl </h6>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w71"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n71"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w72"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n72"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w73"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n73"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w74"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n74"/></div></div>
    <q-btn @click="ex7"> Log exercise </q-btn> <br> 
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
        w31: null, w32: null, w33: null, w34: null,
        w41: null, w42: null, w43: null,
        w51: null, w52: null, w53: null,
        w61: null, w62: null, w63: null,
        w71: null, w72: null, w73: null, w74: null,
        n11: null, n12: null, n13: null, n14: null,
        n31: null, n32: null, n33: null, n34: null,
        n41: null, n42: null, n43: null,
        n51: null, n52: null, n53: null,
        n61: null, n62: null, n63: null,
        n71: null, n72: null, n73: null, n74: null
    }
  },

  methods: {
    async ex1() {
      const auth = getAuth()
      const userID = auth.currentUser.uid 
      await setDoc(doc(db, 'fitnesstracker/' + userID + '/biceps', 'Barbell-Curl' + Date.now()), {
          name: 'Barbell Curl',
          weight: [parseFloat(this.w11), parseFloat(this.w12), parseFloat(this.w13), parseFloat(this.w14)],
          iterations: [parseInt(this.n11), parseInt(this.n12), parseInt(this.n13), parseInt(this.n14)],
          date: Date.now()
      }).then(
            this.w11 = null, this.w12 = null, this.w13 = null, this.w14 = null,
            this.n11 = null, this.n12 = null, this.n13 = null, this.n14 = null
      )

    },
    async ex3() {
      const auth = getAuth()
      const userID = auth.currentUser.uid 
      await setDoc(doc(db, 'fitnesstracker/' + userID + '/biceps', 'Hammer-Curl' + Date.now()), {
          name: 'Hammer Curl',
          weight:  [parseFloat(this.w31), parseFloat(this.w32), parseFloat(this.w33), parseFloat(this.w34)],
          iterations: [parseInt(this.n31), parseInt(this.n32), parseInt(this.n33), parseInt(this.n34)],
          date: Date.now()
      }).then(
            this.w31 = null, this.w32 = null, this.w33 = null,
            this.n31 = null, this.n32 = null, this.n33 = null
      )

    },
    async ex4() {
      const auth = getAuth()
      const userID = auth.currentUser.uid 
      await setDoc(doc(db, 'fitnesstracker/' + userID + '/biceps', 'Standing-Dumbbell-Curl' + Date.now()), {
          name: 'Standing Dumbbell Curl',
          weight: [parseFloat(this.w41), parseFloat(this.w42), parseFloat(this.w43)],
          iterations:  [parseInt(this.n41), parseInt(this.n42), parseInt(this.n43)],
          date: Date.now()
      }).then(
          this.w41 = null, this.w42 = null, this.w43 = null,
          this.n41 = null, this.n42 = null, this.n43 = null   
      )
    },
    async ex5() {
      const auth = getAuth()
      const userID = auth.currentUser.uid 
      await setDoc(doc(db, 'fitnesstracker/' + userID + '/biceps', 'Inclined-Dumbbell-Curl' + Date.now()), {
          name: 'Inclined Dumbbell Curl',
          weight: [parseFloat(this.w51), parseFloat(this.w52), parseFloat(this.w53)],
          iterattions: [parseInt(this.n51), parseInt(this.n52), parseInt(this.n53)],
          date: Date.now()
      }).then(
          this.w51 = null, this.w52 = null, this.w53 = null,
          this.n51 = null, this.n52 = null, this.n53 = null          
      )

    },
    async ex6() {
      const auth = getAuth()
      const userID = auth.currentUser.uid 
      await setDoc(doc(db, 'fitnesstracker/' + userID + '/biceps', 'Zottman-Curl' + Date.now()), {
          name: 'Zottman Curl',
          weight: [parseFloat(this.w61), parseFloat(this.w62), parseFloat(this.w63)],
          iterations: [parseInt(this.n61), parseInt(this.n62), parseInt(this.n63)],
          date: Date.now()
      }).then(
            this.w61 = null, this.w62 = null, this.w63 = null,
            this.n61 = null, this.n62 = null, this.n63 = null
      )
    },
    async ex7() {
      const auth = getAuth()
      const userID = auth.currentUser.uid 
      await setDoc(doc(db, 'fitnesstracker/' + userID + '/biceps', 'EZ-Barbell-Curl' + Date.now()), {
          name: 'EZ Barbell Curl',
          weight: [parseFloat(this.w71), parseFloat(this.w72), parseFloat(this.w73), parseFloat(this.w74)],
          iterations: [parseInt(this.n71), parseInt(this.n72), parseInt(this.n73), parsesInt(this.n74)],
          date: Date.now()
      }).then(
            this.w71 = null, this.w72 = null, this.w73 = null, this.w74 = null,
            this.n71 = null, this.n72 = null, this.n73 = null, this.n74 = null
      )

    }      
  }
})
</script>

<style lang='scss'>

</style>