<template>
    <q-page class='q-pa-lg'>
        <h5 class='q-mt-none'> Leg Exercises </h5>
        <h6 class='q-pa-sm'> Squat </h6>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w11'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n11'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w12'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n12'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w13'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n13'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w14'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n14'/></div></div>
        <q-btn @click="ex1"> Log Exercise </q-btn> <br>

        <h6 class='q-pa-sm'> Bulgarian Split Squat </h6>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w21'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n21'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w22'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n22'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w23'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n23'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w24'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n24'/></div></div>
        <q-btn @click="ex2"> Log Exercise </q-btn> <br>

        <h6 class='q-pa-sm'> Walking lunge </h6>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w31'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n31'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w32'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n32'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w33'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n33'/></div></div>
        <q-btn @click="ex3"> Log Exercise </q-btn> <br>

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
            w21: null, w22: null, w23: null, w24: null,
            w31: null, w32: null, w33: null,
            n11: null, n12: null, n13: null, n14: null,
            n21: null, n22: null, n23: null, n24: null,
            n31: null, n32: null, n33: null
        }
    },

    methods: {
        async ex1() {
            const auth = getAuth()
            const userID = auth.currentUser.uid
            await setDoc(doc(db, 'fitnesstracker/' + userID + '/legs', 'Squat' + Date.now()), {
                name: 'Squat',
                weight: [parseFloat(this.w11), parseFloat(this.w12), parseFloat(this.w13), parseFloat(this.w14)],
                iterations: [parseInt(this.n11), parseInt(this.n12), parseInt(this.n13), parseInt(this.n14)],
                date: Date.now()
            }).then(
                this.w11 = null, this.w12 = null, this.w13 = null, this.w14 = null,
                this.n11 = null, this.n12 = null, this.n13 = null, this.n14 = null
            )
        },

        async ex2() {
            const auth = getAuth()
            const userID = auth.currentUser.uid
            await setDoc(doc(db, 'fitnesstracker/' + userID + '/legs', 'BulgSplitSquat' + Date.now()), {
                name: 'Bulgarian Split Squat',
                weight: [parseFloat(this.w21), parseFloat(this.w22), parseFloat(this.w23), parseFloat(this.w24)],
                iterations: [parseInt(this.n21), parseInt(this.n22), parseInt(this.n23), parseInt(this.n24)],
                date: Date.now()
            }).then(
                this.w21 = null, this.w22 = null, this.w23 = null, this.w24 = null,
                this.n21 = null, this.n22 = null, this.n23 = null, this.n24 = null
            )

        },

        async ex3() {
            const auth = getAuth()
            const userID = auth.currentUser.uid
            await setDoc(doc(db, 'fitnesstracker/' + userID + '/legs', 'WalkingLunge' + Date.now()), {
                name: 'Walking Lunge',
                weight: [parseFloat(this.w31), parseFloat(this.w32), parseFloat(this.w33)],
                iterations: [parseInt(this.n31), parseInt(this.n32), parseInt(this.n33)],
                date: Date.now()
            }).then(
                this.w31 = null, this.w32 = null, this.w33 = null,
                this.n31 = null, this.n32 = null, this.n33 = null
            )
        }
    }
})
</script>



<style lang="scss">

</style>