<template>
  <q-page class="q-pa-lg">
    <h5 class="q-mt-none"> Back exercises </h5>
    <h6 class="q-mt-none"> Deadlift </h6>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w11"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n11"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w12"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n12"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w13"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n13"/></div></div> 
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w14"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n14"/></div></div> <br>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w15"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n15"/></div></div> <br>
    <q-btn @click="ex1"> Log Exercise </q-btn> <br> 
    
    <h6 class="q-mt-none"> Pull up </h6>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w21"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n21"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w22"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n22"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w23"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n23"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w24"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n24"/></div></div> 
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w25"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n25"/></div></div> <br>
    <q-btn @click="ex2"> Log exercise </q-btn> <br> 

    <h6 class="q-mt-none"> Single-arm Row </h6>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w31"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n31"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w32"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n32"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w33"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n33"/></div></div> 
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w34"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n34"/></div></div> 
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w35"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n35"/></div></div> <br>
    <q-btn @click="ex3"> Log exercise </q-btn> <br> 

    <h6 class="q-mt-none"> Inverted Row </h6>
    <q-input type="number" placeholder="Number of iterations" v-model="n41"/>
    <q-input type="number" placeholder="Number of iterations" v-model="n42"/>
    <q-input type="number" placeholder="Number of iterations" v-model="n43"/>
    <q-input type="number" placeholder="Number of iterations" v-model="n44"/>
    <q-input type="number" placeholder="Number of iterations" v-model="n45"/> <br>
    <q-btn @click="ex4"> Log exercise </q-btn> <br> 

    <h6 class="q-mt-none"> Renegade Row </h6>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w51"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n51"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w52"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n52"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w53"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n53"/></div></div> 
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w54"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n53"/></div></div> 
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w55"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n53"/></div></div> <br>
    <q-btn @click="ex5"> Log exercise </q-btn> <br> 

    <h6 class="q-mt-none"> Lat Pulldown Wide Grip </h6>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w61"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n61"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w62"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n62"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w63"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n63"/></div></div> 
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w64"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n64"/></div></div> 
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w65"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n65"/></div></div> <br>
    <q-btn @click="ex6"> Log exercise </q-btn> <br>

    <h6 class="q-mt-none"> Lat Pulldown Close Grip </h6>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w71"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n71"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w72"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n72"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w74"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n74"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w75"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n75"/></div></div> <br>
    <q-btn @click="ex7"> Log exercise </q-btn> <br> 

    <h6 class="q-mt-none"> Seated Cable Row </h6>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w81"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n81"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w82"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n82"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w83"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n83"/></div></div> 
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w84"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n84"/></div></div> 
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w85"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n85"/></div></div> <br>
    <q-btn @click="ex8"> Log exercise </q-btn> <br>

    <h6 class="q-mt-none"> Superman Pull </h6>
    <q-input type="number" placeholder="Number of iterations" v-model="n91"/>
    <q-input type="number" placeholder="Number of iterations" v-model="n92"/>
    <q-input type="number" placeholder="Number of iterations" v-model="n93"/>
    <q-input type="number" placeholder="Number of iterations" v-model="n94"/>
    <q-input type="number" placeholder="Number of iterations" v-model="n95"/> <br>
    <q-btn @click="ex9"> Log exercise </q-btn> <br>

    <h6 class="q-mt-none"> Standing Row </h6>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w101"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n101"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w102"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n102"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w103"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n103"/></div></div>
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w104"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n104"/></div></div> 
    <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w105"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n105"/></div></div> <br>
    <q-btn @click="ex10"> Log exercise </q-btn> <br> 
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
      w11: null, w12: null, w13: null, w14: null, w15: null,
      w21: null, w22: null, w23: null, w24: null, w25: null,
      w31: null, w32: null, w33: null, w34: null, w35: null,
      w51: null, w52: null, w53: null, w54: null, w55: null,
      w61: null, w62: null, w63: null, w64: null, w65: null,
      w71: null, w72: null, w73: null, w74: null, w75: null,
      w81: null, w82: null, w83: null, w84: null, w85: null,
      w101: null, w102: null, w103: null, w104: null, w105: null,
      n11: null, n12: null, n13: null, n14: null, n15: null,
      n21: null, n22: null, n23: null, n24: null, n25: null,
      n31: null, n32: null, n33: null, n34: null, n35: null,
      n41: null, n42: null, n43: null, n44: null, n45: null,
      n51: null, n52: null, n53: null, n54: null, n55: null,
      n61: null, n62: null, n63: null, n64: null, n65: null,
      n71: null, n72: null, n73: null, n74: null, n75: null,
      n81: null, n82: null, n83: null, n84: null, n85: null,
      n91: null, n92: null, n93: null, n94: null, n95: null,
      n101: null, n102: null, n103: null, n104: null, n105: null
    }
  },

  methods: {
    async ex1() {
      const auth = getAuth()
      const userID = auth.currentUser.uid 
      await setDoc(doc(db, 'fitnesstracker/' + userID + '/back', 'Deadlift' + Date.now()), {
        name: 'Deadlift',
        weight: [parseFloat(this.w11), parseFloat(this.w12), parseFloat(this.w13), parseFloat(this.w14), parseFloat(this.w15)],
        iterations:  [parseInt(this.n11), parseInt(this.n12), parseInt(this.n13), parseInt(this.n14), parseInt(this.n15)],
        date: Date.now()
      }).then(
        this.w11 = null, this.w12 = null, this.w13 = null, this.w14 = null, this.w15 = null,
        this.n11 = null, this.n12 = null, this.n13 = null, this.n14 = null, this.n15 = null
      )

    },
    async ex2() {
      const auth = getAuth()
      const userID = auth.currentUser.uid 
      await setDoc(doc(db, 'fitnesstracker/' + userID + '/back', 'Pull-Up' + Date.now()), {
        name: 'Pull Up',
        weight: [parseFloat(this.w21), parseFloat(this.w22), parseFloat(this.w23), parseFloat(this.w24), parseFloat(this.w25)],
        iterations: [parseInt(this.n21), parseInt(this.n22), parseInt(this.n23), parseInt(this.n24), parseInt(this.n25)],
        date: Date.now()
      }).then(
        this.w21 = null, this.w22 = null, this.w23 = null, this.w24 = null, this.w25 = null,
        this.n21 = null, this.n22 = null, this.n23 = null, this.n24 = null, this.n25 = null
      )

    },
    async ex3() {
      const auth = getAuth()
      const userID = auth.currentUser.uid 
      await setDoc(doc(db, 'fitnesstracker/' + userID + '/back', 'Single-Arm-Row' + Date.now()), {
        name: 'Single-Arm Row',
        weight:  [parseFloat(this.w31), parseFloat(this.w32), parseFloat(this.w33), parseFloat(this.w34), parseFloat(this.w35)],
        iterations: [parseInt(this.n31), parseInt(this.n32), parseInt(this.n33), parseInt(this.n34), parseInt(this.n35)],
        date: Date.now()
      }).then(
        this.w31 = null, this.w32 = null, this.w33 = null, this.w34 = null, this.w35 = null,
        this.n31 = null, this.n32 = null, this.n33 = null, this.n34 = null, this.n35 = null
      )

    },
    async ex4() {
      const auth = getAuth()
      const userID = auth.currentUser.uid 
      await setDoc(doc(db, 'fitnesstracker/' + userID + '/back', 'Inverted-Row' + Date.now()), {
        name: 'Inverted Row',
        iterations:  [parseInt(this.n41), parseInt(this.n42), parseInt(this.n43), parseInt(this.n44), parseInt(this.n45)],
        date: Date.now()
      }).then(
        this.n41 = null, this.n42 = null, this.n43 = null, this.n44 = null, this.n45 = null
      )
    },
    async ex5() {
      const auth = getAuth()
      const userID = auth.currentUser.uid 
      await setDoc(doc(db, 'fitnesstracker/' + userID + '/back', 'RenegadeRow' + Date.now()), {
        name: 'Renegade Row',
        weight: [parseFloat(this.w51), parseFloat(this.w52), parseFloat(this.w53), parseFloat(this.w54), parseFloat(this.w55)],
        iterattions: [parseInt(this.n51), parseInt(this.n52), parseInt(this.n53), parseInt(this.n54), parseInt(this.n55)],
        date: Date.now()
      }).then(
        this.w51 = null, this.w52 = null, this.w53 = null, this.w54 = null, this.w55 = null,
        this.n51 = null, this.n52 = null, this.n53 = null, this.n54 = null, this.n55 = null
      )

    },
    async ex6() {
      const auth = getAuth()
      const userID = auth.currentUser.uid 
      await setDoc(doc(db, 'fitnesstracker/' + userID + '/back', 'Lat-Pulldown-Wide-Grip' + Date.now()), {
        name: 'Lat Pulldown Wide Grip',
        weight: [parseFloat(this.w61), parseFloat(this.w62), parseFloat(this.w63), parseFloat(this.w64), parseFloat(this.w65)],
        iterations: [parseInt(this.n61), parseInt(this.n62), parseInt(this.n63), parseInt(this.n64), parseInt(this.n65)],
        date: Date.now()
      }).then(
        this.w61 = null, this.w62 = null, this.w63 = null, this.w64 = null, this.w65 = null,
        this.n61 = null, this.n62 = null, this.n63 = null, this.n64 = null, this.n65 = null
      )

    },
    async ex7() {
      const auth = getAuth()
      const userID = auth.currentUser.uid 
      await setDoc(doc(db, 'fitnesstracker/' + userID + '/back', 'Lat-Pulldown-Close-Grip' + Date.now()), {
        name: 'Lat Pulldown Close Grip',
        weight: [parseFloat(this.w71), parseFloat(this.w72), parseFloat(this.w73), parseFloat(this.w74), parseFloat(this.w75)],
        iterations: [parseInt(this.n71), parseInt(this.n72), parseInt(this.n73), parseInt(this.n74), parseInt(this.n75)],
        date: Date.now()
      }).then(
        this.w71 = null, this.w72 = null, this.w73 = null, this.w74 = null, this.w75 = null,
        this.n71 = null, this.n72 = null, this.n73 = null, this.n74 = null, this.n75 = null
      )

    },
    async ex8() {
      const auth = getAuth()
      const userID = auth.currentUser.uid 
      await setDoc(doc(db, 'fitnesstracker/' + userID + '/back', 'Seated-Cable-Row' + Date.now()), {
        name: 'Seated Cable Row',
        weight: [parseFloat(this.w81), parseFloat(this.w82), parseFloat(this.w83), parseFloat(this.w84), parseFloat(this.w85)],
        iterations: [parseInt(this.n81), parseInt(this.n82), parseInt(this.n83), parseInt(this.n84), parseInt(this.n85)],
        date: Date.now()
      }).then(
        this.w81 = null, this.w82 = null, this.w83 = null, this.w84 = null, this.w85 = null,
        this.n81 = null, this.n82 = null, this.n83 = null, this.n84 = null, this.n85 = null
      )

    },
    async ex9() {
      const auth = getAuth()
      const userID = auth.currentUser.uid 
      await setDoc(doc(db, 'fitnesstracker/' + userID + '/back', 'Superman-Pull' + Date.now()), {
        name: 'Superman Pull',
        iterations: [parseInt(this.n91), parseInt(this.n92), parseInt(this.n93), parseInt(this.n94), parseInt(this.n95)],
        date: Date.now()
      }).then(
        this.n91 = null, this.n92 = null, this.n93 = null, this.n94 = null, this.n95 = null
      )
    },
    async ex10() {
      const auth = getAuth()
      const userID = auth.currentUser.uid 
      await setDoc(doc(db, 'fitnesstracker/' + userID + '/back', 'Standing-Row' + Date.now()), {
        name: 'Standing Row',
        weight: [parseFloat(this.w101), parseFloat(this.w102), parseFloat(this.w103), parseFloat(this.w104), parseFloat(this.w105)],
        iterations: [parseInt(this.n101), parseInt(this.n102), parseInt(this.n103), parseInt(this.n104), parseInt(this.n105)],
        date: Date.now()
      }).then(
        this.w101 = null, this.w102 = null, this.w103 = null, this.w104 = null, this.w105 = null,
        this.n101 = null, this.n102 = null, this.n103 = null, this.n104 = null, this.n105 = null
      )
    }              
  }
})
</script>

<style lang='scss'>

</style>