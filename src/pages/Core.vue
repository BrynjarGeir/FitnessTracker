<template>
    <q-page class='q-pa-lg'>
        <h5 class='q-mt-none'> Endurance Exercises </h5>
        <h6 class='q-pa-sm'> Wood Chopper </h6>
            <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w11"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n11"/></div></div>
            <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w12"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n12"/></div></div>
            <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w13"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n13"/></div></div>
        <q-btn @click="ex1"> Log Exercise </q-btn> <br>

        <h6 class='q-pa-sm'> Crunch </h6>
            <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w21"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n21"/></div></div>
            <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w22"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n22"/></div></div>
            <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w13"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n23"/></div></div>
        <q-btn @click="ex2"> Log Exercise </q-btn> <br>

        <h6 class='q-pa-sm'> Inverse Crunch </h6>
            <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w31"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n31"/></div></div>
            <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w32"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n32"/></div></div>
            <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w33"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n33"/></div></div>
        <q-btn @click="ex3"> Log Exercise </q-btn> <br>

        <h6 class='q-pa-sm'> Machine Crunch </h6>
            <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w31"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n41"/></div></div>
            <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w32"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n42"/></div></div>
            <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w33"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n43"/></div></div>
        <q-btn @click="ex4"> Log Exercise </q-btn> <br>
        
        <h6 class='q-pa-sm'> Machine Torso Rotation </h6>
            <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w31"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n51"/></div></div>
            <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w32"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n52"/></div></div>
            <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w33"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n53"/></div></div>
        <q-btn @click="ex5"> Log Exercise </q-btn> <br>


    </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import db from 'src/boot/firebase'
import { setDoc, doc } from 'firebase/firestore'

export default defineComponent({
    name: 'PageIndex',

    data() {
        return {
            w11: null, w12: null, w13: null,
            w21: null, w22: null, w23: null,
            w31: null, w32: null, w33: null,
            w41: null, w42: null, w43: null,
            w51: null, w52: null, w53: null,
            n11: null, n12: null, n13: null,
            n21: null, n22: null, n23: null,
            n31: null, n32: null, n33: null,
            n41: null, n42: null, n43: null,
            n51: null, n52: null, n53: null
        }
    },

    methods: {
        async ex1() {
            await setDoc(doc(db, 'core', 'Wood-Chopper' + Date.now()), {
                name: 'Wood Chopper',
                weight: [parseFloat(this.w11), parseFloat(this.w12), parseFloat(this.w13)],
                iterations: [parseInt(this.n11), parseInt(this.n12), parseInt(this.n13)],
                date: Date.now()
            }).then(this.w11 = null, this.w12 = null, this.w13 = null,
                    this.n11 = null, this.n12 = null, this.n13 = null)
        },

        async ex2() {
            await setDoc(doc(db, 'core', 'Crunch' + Date.now()), {
                name: 'Crunch',
                weight: [parseFloat(this.w21), parseFloat(this.w22), parseFloat(this.w23)],
                iterations: [parseInt(this.n21), parseInt(this.n22), parseInt(this.n23)],
                date: Date.now()
            }).then(this.w21 = null, this.w22 = null, this.w23 = null,
                    this.n21 = null, this.n22 = null, this.n23 = null)
        },

        async ex3() {
            await setDoc(doc(db, 'core', 'Inverse-Crunch' + Date.now()), {
                name: 'Inverse Crunch',
                weight: [parseFloat(this.w31), parseFloat(this.w32), parseFloat(this.w33)],
                iterations: [parseInt(this.n31), parseInt(this.n32), parseInt(this.n33)],
                date: Date.now()
            }).then(this.w31 = null, this.w32 = null, this.w33 = null,
                    this.n31 = null, this.n32 = null, this.n33 = null)
        },

        async ex4() {
            await setDoc(doc(db, 'core', 'Machine-Crunch' + Date.now()), {
                name: 'Machine Crunch',
                weight: [parseFloat(this.w41), parseFloat(this.w42), parseFloat(this.w43)],
                iterations: [parseInt(this.n41), parseInt(this.n42), parseInt(this.n43)],
                date: Date.now()
            }).then(this.w41 = null, this.w42 = null, this.w43 = null,
                    this.n41 = null, this.n42 = null, this.n43 = null)
        },

        async ex5() {
            await setDoc(doc(db, 'core', 'Machine-Torso-Rotation' + Date.now()), {
                name: 'Machine Torso Rotation',
                weight: [parseFloat(this.w51), parseFloat(this.w52), parseFloat(this.w53)],
                iterations: [parseInt(this.n51), parseInt(this.n52), parseInt(this.n53)],
                date: Date.now()
            }).then(this.w51 = null, this.w52 = null, this.w53 = null,
                    this.n51 = null, this.n52 = null, this.n53 = null)
        }
    }
})
</script>
