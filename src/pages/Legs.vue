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

        <h6 class='q-pa-sm'> Walking Lunge </h6>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w31'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n31'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w32'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n32'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w33'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n33'/></div></div>
        <q-btn @click="ex3"> Log Exercise </q-btn> <br>

        <h6 class='q-pa-sm'> Stiff Barbell Deadlift </h6>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w41'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n41'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w42'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n42'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w43'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n43'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w44'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n44'/></div></div>
        <q-btn @click="ex4"> Log Exercise </q-btn> <br>

        <h6 class='q-pa-sm'> Lunge With Plate </h6>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w51'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n51'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w52'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n52'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w53'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n53'/></div></div>
        <q-btn @click="ex5"> Log Exercise </q-btn> <br>

        <h6 class='q-pa-sm'> Squat With Kettlebell </h6>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w61'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n61'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w62'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n62'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w63'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n63'/></div></div>
        <q-btn @click="ex6"> Log Exercise </q-btn> <br>

        <h6 class='q-pa-sm'> Machine Leg Press </h6>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w71'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n71'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w72'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n72'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w73'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n73'/></div></div>
        <q-btn @click="ex7"> Log Exercise </q-btn> <br>

        <h6 class='q-pa-sm'> Machine Calf Press </h6>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w81'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n81'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w82'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n82'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w83'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n83'/></div></div>
        <q-btn @click="ex8"> Log Exercise </q-btn> <br>


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
            w41: null, w42: null, w43: null, w44: null,
            w51: null, w52: null, w53: null,
            w61: null, w62: null, w63: null,
            w71: null, w72: null, w73: null,
            w81: null, w82: null, w83: null,
            n11: null, n12: null, n13: null, n14: null,
            n21: null, n22: null, n23: null, n24: null,
            n31: null, n32: null, n33: null,
            n41: null, n42: null, n43: null, n44: null,
            n51: null, n52: null, n53: null,
            n61: null, n62: null, n63: null,
            n71: null, n72: null, n73: null,
            n81: null, n82: null, n83: null
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
        },

        async ex4() {
            const auth = getAuth()
            const userID = auth.currentUser.uid
            await setDoc(doc(db, 'fitnesstracker/' + userID + '/legs', 'StiffDeadlift' + Date.now()), {
                name: 'Stiff Deadlift',
                weight: [parseFloat(this.w41), parseFloat(this.w42), parseFloat(this.w43), parseFloat(this.w44)],
                iterations: [parseInt(this.n41), parseInt(this.n42), parseInt(this.n43), parseInt(this.n44)],
                date: Date.now()
            }).then(
                this.w41 = null, this.w42 = null, this.w43 = null, this.w44 = null,
                this.n41 = null, this.n42 = null, this.n43 = null, this.n44 = null
            )
        },

        async ex5() {
            const auth = getAuth()
            const userID = auth.currentUser.uid
            await setDoc(doc(db, 'fitnesstracker/' + userID + '/legs', 'LungeWPlate' + Date.now()), {
                name: 'Lunge With Plate',
                weight: [parseFloat(this.w51), parseFloat(this.w52), parseFloat(this.w53)],
                iterations: [parseInt(this.n51), parseInt(this.n52), parseInt(this.n53)],
                date: Date.now()
            }).then(
                this.w51 = null, this.w52 = null, this.w53 = null,
                this.n51 = null, this.n52 = null, this.n53 = null
            )
        },

        async ex6() {
            const auth = getAuth()
            const userID = auth.currentUser.uid
            await setDoc(doc(db, 'fitnesstracker/' + userID + '/legs', 'KettlebellSquat' + Date.now()), {
                name: 'Squat With Kettlebell',
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
            await setDoc(doc(db, 'fitnesstracker/' + userID + '/legs', 'MachineLegPress' + Date.now()), {
                name: 'Machine Leg Press',
                weight: [parseFloat(this.w71), parseFloat(this.w72), parseFloat(this.w73)],
                iterations: [parseInt(this.n71), parseInt(this.n72), parseInt(this.n73)],
                date: Date.now()
            }).then(
                this.w71 = null, this.w72 = null, this.w73 = null,
                this.n71 = null, this.n72 = null, this.n73 = null
            )
        },

        async ex8() {
            const auth = getAuth()
            const userID = auth.currentUser.uid
            await setDoc(doc(db, 'fitnesstracker/' + userID + '/legs', 'MachineCalfPress' + Date.now()), {
                name: 'Machine Calf Press',
                weight: [parseFloat(this.w81), parseFloat(this.w82), parseFloat(this.w83)],
                iterations: [parseInt(this.n81), parseInt(this.n82), parseInt(this.n83)],
                date: Date.now()
            }).then(
                this.w81 = null, this.w82 = null, this.w83 = null,
                this.n81 = null, this.n82 = null, this.n83 = null
            )
        }

    }
})
</script>



<style lang="scss">

</style>