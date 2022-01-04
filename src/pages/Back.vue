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
      weights = []; iters = []
      if(!isNaN(this.w11)){weights.push(parseFloat(this.w11))}; if(!isNaN(this.w12)){weights.push(parseFloat(this.w12))}
      if(!isNaN(this.w13)){weights.push(parseFloat(this.w13))}; if(!isNaN(this.w14)){weights.push(parseFloat(this.w14))};
      if(!isNaN(this.w15)){weights.push(this.w15)}
      if(!isNaN(this.n11)){iters.push(parseInt(this.n11))}; if(!isNaN(this.n12)){iters.push(parseInt(this.n12))}
      if(!isNaN(this.n13)){iters.push(parseInt(this.n13))}; if(!isNaN(this.n14)){iters.push(parseInt(this.n14))};
      if(!isNaN(this.n15)){iters.push(this.n15)}
      await setDoc(doc(db, 'fitnesstracker/' + userID + '/back', 'Deadlift' + Date.now()), {
        name: 'Deadlift',
        weight: weights,
        iterations:  iters,
        date: Date.now()
      }).then(
        this.w11 = null, this.w12 = null, this.w13 = null, this.w14 = null, this.w15 = null,
        this.n11 = null, this.n12 = null, this.n13 = null, this.n14 = null, this.n15 = null
      )

    },
    async ex2() {
      const auth = getAuth()
      const userID = auth.currentUser.uid
      weights = []; iters = []
      if(!isNaN(this.w21)){weights.push(parseFloat(this.w21))}; if(!isNaN(this.w22)){weights.push(parseFloat(this.w22))}
      if(!isNaN(this.w23)){weights.push(parseFloat(this.w23))}; if(!isNaN(this.w24)){weights.push(parseFloat(this.w24))};
      if(!isNaN(this.w25)){weights.push(this.w25)}
      if(!isNaN(this.n21)){iters.push(parseInt(this.n21))}; if(!isNaN(this.n22)){iters.push(parseInt(this.n22))}
      if(!isNaN(this.n23)){iters.push(parseInt(this.n23))}; if(!isNaN(this.n24)){iters.push(parseInt(this.n24))};
      if(!isNaN(this.n25)){iters.push(this.n25)}
      await setDoc(doc(db, 'fitnesstracker/' + userID + '/back', 'Pull-Up' + Date.now()), {
        name: 'Pull Up',
        weight: weights,
        iterations: iters,
        date: Date.now()
      }).then(
        this.w21 = null, this.w22 = null, this.w23 = null, this.w24 = null, this.w25 = null,
        this.n21 = null, this.n22 = null, this.n23 = null, this.n24 = null, this.n25 = null
      )

    },
    async ex3() {
      const auth = getAuth()
      const userID = auth.currentUser.uid 
      weights = []; iters = []
      if(!isNaN(this.w31)){weights.push(parseFloat(this.w31))}; if(!isNaN(this.w32)){weights.push(parseFloat(this.w32))}
      if(!isNaN(this.w33)){weights.push(parseFloat(this.w33))}; if(!isNaN(this.w34)){weights.push(parseFloat(this.w34))};
      if(!isNaN(this.w35)){weights.push(this.w35)}
      if(!isNaN(this.n31)){iters.push(parseInt(this.n31))}; if(!isNaN(this.n32)){iters.push(parseInt(this.n32))}
      if(!isNaN(this.n33)){iters.push(parseInt(this.n33))}; if(!isNaN(this.n34)){iters.push(parseInt(this.n34))};
      if(!isNaN(this.n35)){iters.push(this.n35)}
      await setDoc(doc(db, 'fitnesstracker/' + userID + '/back', 'Single-Arm-Row' + Date.now()), {
        name: 'Single-Arm Row',
        weight:  weights,
        iterations: iters,
        date: Date.now()
      }).then(
        this.w31 = null, this.w32 = null, this.w33 = null, this.w34 = null, this.w35 = null,
        this.n31 = null, this.n32 = null, this.n33 = null, this.n34 = null, this.n35 = null
      )

    },
    async ex4() {
      const auth = getAuth()
      const userID = auth.currentUser.uid
      iters = []
      if(!isNaN(this.n41)){iters.push(parseInt(this.n41))}; if(!isNaN(this.n42)){iters.push(parseInt(this.n42))}
      if(!isNaN(this.n43)){iters.push(parseInt(this.n43))}; if(!isNaN(this.n44)){iters.push(parseInt(this.n44))};
      if(!isNaN(this.n45)){iters.push(this.n45)}
      await setDoc(doc(db, 'fitnesstracker/' + userID + '/back', 'Inverted-Row' + Date.now()), {
        name: 'Inverted Row',
        iterations:  iters,
        date: Date.now()
      }).then(
        this.n41 = null, this.n42 = null, this.n43 = null, this.n44 = null, this.n45 = null
      )
    },
    async ex5() {
      const auth = getAuth()
      const userID = auth.currentUser.uid 
      weights = []; iters = []
      if(!isNaN(this.w51)){weights.push(parseFloat(this.w51))}; if(!isNaN(this.w52)){weights.push(parseFloat(this.w52))}
      if(!isNaN(this.w53)){weights.push(parseFloat(this.w53))}; if(!isNaN(this.w54)){weights.push(parseFloat(this.w54))};
      if(!isNaN(this.w55)){weights.push(this.w55)}
      if(!isNaN(this.n51)){iters.push(parseInt(this.n51))}; if(!isNaN(this.n52)){iters.push(parseInt(this.n52))}
      if(!isNaN(this.n53)){iters.push(parseInt(this.n53))}; if(!isNaN(this.n54)){iters.push(parseInt(this.n54))};
      if(!isNaN(this.n55)){iters.push(this.n55)}
      await setDoc(doc(db, 'fitnesstracker/' + userID + '/back', 'RenegadeRow' + Date.now()), {
        name: 'Renegade Row',
        weight: weights,
        iterations: iters,
        date: Date.now()
      }).then(
        this.w51 = null, this.w52 = null, this.w53 = null, this.w54 = null, this.w55 = null,
        this.n51 = null, this.n52 = null, this.n53 = null, this.n54 = null, this.n55 = null
      )

    },
    async ex6() {
      const auth = getAuth()
      const userID = auth.currentUser.uid 
      weights = []; iters = []
      if(!isNaN(this.w61)){weights.push(parseFloat(this.w61))}; if(!isNaN(this.w62)){weights.push(parseFloat(this.w62))}
      if(!isNaN(this.w63)){weights.push(parseFloat(this.w63))}; if(!isNaN(this.w64)){weights.push(parseFloat(this.w64))};
      if(!isNaN(this.w65)){weights.push(this.w65)}
      if(!isNaN(this.n61)){iters.push(parseInt(this.n61))}; if(!isNaN(this.n62)){iters.push(parseInt(this.n62))}
      if(!isNaN(this.n63)){iters.push(parseInt(this.n63))}; if(!isNaN(this.n64)){iters.push(parseInt(this.n64))};
      if(!isNaN(this.n65)){iters.push(this.n65)}
      await setDoc(doc(db, 'fitnesstracker/' + userID + '/back', 'Lat-Pulldown-Wide-Grip' + Date.now()), {
        name: 'Lat Pulldown Wide Grip',
        weight: weights,
        iterations: iters,
        date: Date.now()
      }).then(
        this.w61 = null, this.w62 = null, this.w63 = null, this.w64 = null, this.w65 = null,
        this.n61 = null, this.n62 = null, this.n63 = null, this.n64 = null, this.n65 = null
      )

    },
    async ex7() {
      const auth = getAuth()
      const userID = auth.currentUser.uid 
      weights = []; iters = []
      if(!isNaN(this.w71)){weights.push(parseFloat(this.w71))}; if(!isNaN(this.w72)){weights.push(parseFloat(this.w72))}
      if(!isNaN(this.w73)){weights.push(parseFloat(this.w73))}; if(!isNaN(this.w74)){weights.push(parseFloat(this.w74))};
      if(!isNaN(this.w75)){weights.push(this.w75)}
      if(!isNaN(this.n71)){iters.push(parseInt(this.n71))}; if(!isNaN(this.n72)){iters.push(parseInt(this.n72))}
      if(!isNaN(this.n73)){iters.push(parseInt(this.n73))}; if(!isNaN(this.n74)){iters.push(parseInt(this.n74))};
      if(!isNaN(this.n75)){iters.push(this.n75)}
      await setDoc(doc(db, 'fitnesstracker/' + userID + '/back', 'Lat-Pulldown-Close-Grip' + Date.now()), {
        name: 'Lat Pulldown Close Grip',
        weight: weights,
        iterations: iters,
        date: Date.now()
      }).then(
        this.w71 = null, this.w72 = null, this.w73 = null, this.w74 = null, this.w75 = null,
        this.n71 = null, this.n72 = null, this.n73 = null, this.n74 = null, this.n75 = null
      )

    },
    async ex8() {
      const auth = getAuth()
      const userID = auth.currentUser.uid 
      weights = []; iters = []
      if(!isNaN(this.w81)){weights.push(parseFloat(this.w81))}; if(!isNaN(this.w82)){weights.push(parseFloat(this.w82))}
      if(!isNaN(this.w83)){weights.push(parseFloat(this.w83))}; if(!isNaN(this.w84)){weights.push(parseFloat(this.w84))};
      if(!isNaN(this.w85)){weights.push(this.w85)}
      if(!isNaN(this.n81)){iters.push(parseInt(this.n81))}; if(!isNaN(this.n82)){iters.push(parseInt(this.n82))}
      if(!isNaN(this.n83)){iters.push(parseInt(this.n83))}; if(!isNaN(this.n84)){iters.push(parseInt(this.n84))};
      if(!isNaN(this.n85)){iters.push(this.n85)}
      await setDoc(doc(db, 'fitnesstracker/' + userID + '/back', 'Seated-Cable-Row' + Date.now()), {
        name: 'Seated Cable Row',
        weight: weights,
        iterations: iters,
        date: Date.now()
      }).then(
        this.w81 = null, this.w82 = null, this.w83 = null, this.w84 = null, this.w85 = null,
        this.n81 = null, this.n82 = null, this.n83 = null, this.n84 = null, this.n85 = null
      )

    },
    async ex9() {
      const auth = getAuth()
      const userID = auth.currentUser.uid 
      iters = []
      if(!isNaN(this.n91)){iters.push(parseInt(this.n91))}; if(!isNaN(this.n92)){iters.push(parseInt(this.n92))}
      if(!isNaN(this.n93)){iters.push(parseInt(this.n93))}; if(!isNaN(this.n94)){iters.push(parseInt(this.n94))};
      if(!isNaN(this.n95)){iters.push(this.n95)}
      await setDoc(doc(db, 'fitnesstracker/' + userID + '/back', 'Superman-Pull' + Date.now()), {
        name: 'Superman Pull',
        iterations: iters,
        date: Date.now()
      }).then(
        this.n91 = null, this.n92 = null, this.n93 = null, this.n94 = null, this.n95 = null
      )
    },
    async ex10() {
      const auth = getAuth()
      const userID = auth.currentUser.uid 
      weights = []; iters = []
      if(!isNaN(this.w101)){weights.push(parseFloat(this.w101))}; if(!isNaN(this.w102)){weights.push(parseFloat(this.w102))}
      if(!isNaN(this.w103)){weights.push(parseFloat(this.w103))}; if(!isNaN(this.w104)){weights.push(parseFloat(this.w104))};
      if(!isNaN(this.w105)){weights.push(this.w105)}
      if(!isNaN(this.n101)){iters.push(parseInt(this.n101))}; if(!isNaN(this.n102)){iters.push(parseInt(this.n102))}
      if(!isNaN(this.n103)){iters.push(parseInt(this.n103))}; if(!isNaN(this.n104)){iters.push(parseInt(this.n104))};
      if(!isNaN(this.n105)){iters.push(this.n105)}
      await setDoc(doc(db, 'fitnesstracker/' + userID + '/back', 'Standing-Row' + Date.now()), {
        name: 'Standing Row',
        weight: weights,
        iterations: iters,
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