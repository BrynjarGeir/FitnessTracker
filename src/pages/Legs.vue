<template>
    <q-page class='q-pa-lg'>
        <h5 class='q-mt-none'> Leg Exercises </h5>
        <h6 class='q-pa-sm'> Squat </h6>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w11'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n11'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w12'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n12'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w13'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n13'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w14'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n14'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w15'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n15'/></div></div>
        <q-btn @click="ex1"> Log Exercise </q-btn> <br>

        <h6 class='q-pa-sm'> Bulgarian Split Squat </h6>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w21'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n21'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w22'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n22'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w23'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n23'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w24'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n24'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w25'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n25'/></div></div>
        <q-btn @click="ex2"> Log Exercise </q-btn> <br>

        <h6 class='q-pa-sm'> Walking Lunge </h6>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w31'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n31'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w32'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n32'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w33'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n33'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w34'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n34'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w35'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n35'/></div></div>
        <q-btn @click="ex3"> Log Exercise </q-btn> <br>

        <h6 class='q-pa-sm'> Stiff Barbell Deadlift </h6>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w41'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n41'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w42'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n42'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w43'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n43'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w44'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n44'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w45'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n45'/></div></div>
        <q-btn @click="ex4"> Log Exercise </q-btn> <br>

        <h6 class='q-pa-sm'> Lunge With Plate </h6>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w51'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n51'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w52'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n52'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w53'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n53'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w54'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n54'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w55'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n55'/></div></div>
        <q-btn @click="ex5"> Log Exercise </q-btn> <br>

        <h6 class='q-pa-sm'> Squat With Kettlebell </h6>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w61'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n61'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w62'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n62'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w63'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n63'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w64'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n64'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w65'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n65'/></div></div>
        <q-btn @click="ex6"> Log Exercise </q-btn> <br>

        <h6 class='q-pa-sm'> Machine Leg Press </h6>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w71'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n71'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w72'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n72'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w73'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n73'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w74'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n74'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w75'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n75'/></div></div>
        <q-btn @click="ex7"> Log Exercise </q-btn> <br>

        <h6 class='q-pa-sm'> Machine Calf Press </h6>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w81'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n81'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w82'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n82'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w83'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n83'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w84'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n84'/></div></div>
        <div class='row'><div class='col'><q-input type='number' placeholder='Weight of Exercise' v-model='w85'/></div><div class='col'><q-input type='number' placeholder='Number of iterations' v-model='n85'/></div></div>
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
            w11: null, w12: null, w13: null, w14: null, w15: null,
            w21: null, w22: null, w23: null, w24: null, w25: null,
            w31: null, w32: null, w33: null, w34: null, w35: null,
            w41: null, w42: null, w43: null, w44: null, w45: null,
            w51: null, w52: null, w53: null, w54: null, w55: null,
            w61: null, w62: null, w63: null, w64: null, w65: null,
            w71: null, w72: null, w73: null, w74: null, w75: null,
            w81: null, w82: null, w83: null, w84: null, w85: null,
            n11: null, n12: null, n13: null, n14: null, n15: null,
            n21: null, n22: null, n23: null, n24: null, n25: null,
            n31: null, n32: null, n33: null, n34: null, n35: null,
            n41: null, n42: null, n43: null, n44: null, n45: null,
            n51: null, n52: null, n53: null, n54: null, n55: null,
            n61: null, n62: null, n63: null, n64: null, n65: null,
            n71: null, n72: null, n73: null, n74: null, n75: null,
            n81: null, n82: null, n83: null, n84: null, n85: null
        }
    },

    methods: {
        async ex1() {
            const auth = getAuth()
            const userID = auth.currentUser.uid
            weights = []; iters = []
            if(!isNaN(this.w11)){weights.push(parseFloat(this.w11))}; if(!isNan(this.w12)){weights.push(parseFloat(this.w12))}
            if(!isNaN(this.w13)){weights.push(parseFloat(this.w13))}; if(!isNan(this.w14)){weights.push(parseFloat(this.w14))};
            if(!isNan(this.w15)){weights.push(this.w15)}
            if(!isNaN(this.n11)){iters.push(parseInt(this.n11))}; if(!isNan(this.n12)){iters.push(parseInt(this.n12))}
            if(!isNaN(this.n13)){iters.push(parseInt(this.n13))}; if(!isNan(this.n14)){iters.push(parseInt(this.n14))};
            if(!isNan(this.n15)){iters.push(this.n15)}
            await setDoc(doc(db, 'fitnesstracker/' + userID + '/legs', 'Squat' + Date.now()), {
                name: 'Squat',
                weight: weights,
                iterations: iters,
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
            if(!isNaN(this.w21)){weights.push(parseFloat(this.w21))}; if(!isNan(this.w22)){weights.push(parseFloat(this.w22))}
            if(!isNaN(this.w23)){weights.push(parseFloat(this.w23))}; if(!isNan(this.w24)){weights.push(parseFloat(this.w24))};
            if(!isNan(this.w25)){weights.push(this.w25)}
            if(!isNaN(this.n21)){iters.push(parseInt(this.n21))}; if(!isNan(this.n22)){iters.push(parseInt(this.n22))}
            if(!isNaN(this.n23)){iters.push(parseInt(this.n23))}; if(!isNan(this.n24)){iters.push(parseInt(this.n24))};
            if(!isNan(this.n25)){iters.push(this.n25)}
            await setDoc(doc(db, 'fitnesstracker/' + userID + '/legs', 'BulgSplitSquat' + Date.now()), {
                name: 'Bulgarian Split Squat',
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
            if(!isNaN(this.w31)){weights.push(parseFloat(this.w31))}; if(!isNan(this.w32)){weights.push(parseFloat(this.w32))}
            if(!isNaN(this.w33)){weights.push(parseFloat(this.w33))}; if(!isNan(this.w34)){weights.push(parseFloat(this.w34))};
            if(!isNan(this.w35)){weights.push(this.w35)}
            if(!isNaN(this.n31)){iters.push(parseInt(this.n31))}; if(!isNan(this.n32)){iters.push(parseInt(this.n32))}
            if(!isNaN(this.n33)){iters.push(parseInt(this.n33))}; if(!isNan(this.n34)){iters.push(parseInt(this.n34))};
            if(!isNan(this.n35)){iters.push(this.n35)}
            await setDoc(doc(db, 'fitnesstracker/' + userID + '/legs', 'WalkingLunge' + Date.now()), {
                name: 'Walking Lunge',
                weight: weights,
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
            weights = []; iters = []
            if(!isNaN(this.w41)){weights.push(parseFloat(this.w41))}; if(!isNan(this.w42)){weights.push(parseFloat(this.w42))}
            if(!isNaN(this.w43)){weights.push(parseFloat(this.w43))}; if(!isNan(this.w44)){weights.push(parseFloat(this.w44))};
            if(!isNan(this.w45)){weights.push(this.w45)}
            if(!isNaN(this.n41)){iters.push(parseInt(this.n41))}; if(!isNan(this.n42)){iters.push(parseInt(this.n42))}
            if(!isNaN(this.n43)){iters.push(parseInt(this.n43))}; if(!isNan(this.n44)){iters.push(parseInt(this.n44))};
            if(!isNan(this.n45)){iters.push(this.n45)}
            await setDoc(doc(db, 'fitnesstracker/' + userID + '/legs', 'StiffDeadlift' + Date.now()), {
                name: 'Stiff Deadlift',
                weight: weights,
                iterations: iters,
                date: Date.now()
            }).then(
                this.w41 = null, this.w42 = null, this.w43 = null, this.w44 = null, this.w45 = null,
                this.n41 = null, this.n42 = null, this.n43 = null, this.n44 = null, this.n45 = null
            )
        },

        async ex5() {
            const auth = getAuth()
            const userID = auth.currentUser.uid
            weights = []; iters = []
            if(!isNaN(this.w51)){weights.push(parseFloat(this.w51))}; if(!isNan(this.w52)){weights.push(parseFloat(this.w52))}
            if(!isNaN(this.w53)){weights.push(parseFloat(this.w53))}; if(!isNan(this.w54)){weights.push(parseFloat(this.w54))};
            if(!isNan(this.w55)){weights.push(this.w55)}
            if(!isNaN(this.n51)){iters.push(parseInt(this.n51))}; if(!isNan(this.n52)){iters.push(parseInt(this.n52))}
            if(!isNaN(this.n53)){iters.push(parseInt(this.n53))}; if(!isNan(this.n54)){iters.push(parseInt(this.n54))};
            if(!isNan(this.n55)){iters.push(this.n55)}
            await setDoc(doc(db, 'fitnesstracker/' + userID + '/legs', 'LungeWPlate' + Date.now()), {
                name: 'Lunge With Plate',
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
            if(!isNaN(this.w61)){weights.push(parseFloat(this.w61))}; if(!isNan(this.w62)){weights.push(parseFloat(this.w62))}
            if(!isNaN(this.w63)){weights.push(parseFloat(this.w63))}; if(!isNan(this.w64)){weights.push(parseFloat(this.w64))};
            if(!isNan(this.w65)){weights.push(this.w65)}
            if(!isNaN(this.n61)){iters.push(parseInt(this.n61))}; if(!isNan(this.n62)){iters.push(parseInt(this.n62))}
            if(!isNaN(this.n63)){iters.push(parseInt(this.n63))}; if(!isNan(this.n64)){iters.push(parseInt(this.n64))};
            if(!isNan(this.n65)){iters.push(this.n65)}
            await setDoc(doc(db, 'fitnesstracker/' + userID + '/legs', 'KettlebellSquat' + Date.now()), {
                name: 'Squat With Kettlebell',
                weight: weights,
                iterations: iters,
                date: Date.now()
            }).then(
                this.w61 = null, this.w62 = null, this.w63 = null, this.w64 = null, this.w65 = null,
                this.n61 = null, this.n62 = null, this.n63 = null, thi.n64 = null, this.n65 = null
            )
        },

        async ex7() {
            const auth = getAuth()
            const userID = auth.currentUser.uid
            weights = []; iters = []
            if(!isNaN(this.w71)){weights.push(parseFloat(this.w71))}; if(!isNan(this.w72)){weights.push(parseFloat(this.w72))}
            if(!isNaN(this.w73)){weights.push(parseFloat(this.w73))}; if(!isNan(this.w74)){weights.push(parseFloat(this.w74))};
            if(!isNan(this.w75)){weights.push(this.w75)}
            if(!isNaN(this.n71)){iters.push(parseInt(this.n71))}; if(!isNan(this.n72)){iters.push(parseInt(this.n72))}
            if(!isNaN(this.n73)){iters.push(parseInt(this.n73))}; if(!isNan(this.n74)){iters.push(parseInt(this.n74))};
            if(!isNan(this.n75)){iters.push(this.n75)}
            await setDoc(doc(db, 'fitnesstracker/' + userID + '/legs', 'MachineLegPress' + Date.now()), {
                name: 'Machine Leg Press',
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
            if(!isNaN(this.w81)){weights.push(parseFloat(this.w81))}; if(!isNan(this.w82)){weights.push(parseFloat(this.w82))}
            if(!isNaN(this.w83)){weights.push(parseFloat(this.w83))}; if(!isNan(this.w84)){weights.push(parseFloat(this.w84))};
            if(!isNan(this.w85)){weights.push(this.w85)}
            if(!isNaN(this.n81)){iters.push(parseInt(this.n81))}; if(!isNan(this.n82)){iters.push(parseInt(this.n82))}
            if(!isNaN(this.n83)){iters.push(parseInt(this.n83))}; if(!isNan(this.n84)){iters.push(parseInt(this.n84))};
            if(!isNan(this.n85)){iters.push(this.n85)}
            await setDoc(doc(db, 'fitnesstracker/' + userID + '/legs', 'MachineCalfPress' + Date.now()), {
                name: 'Machine Calf Press',
                weight: weights,
                iterations: iters,
                date: Date.now()
            }).then(
                this.w81 = null, this.w82 = null, this.w83 = null, this.w84 = null, this.w85 = null,
                this.n81 = null, this.n82 = null, this.n83 = null, this.n84 = null, this.n85 = null
            )
        }

    }
})
</script>



<style lang="scss">

</style>