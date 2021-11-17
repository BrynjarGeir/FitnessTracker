<template>
    <q-page class='q-pa-lg'>
        <h5 class='q-mt-none'> Endurance Exercises </h5>
        <h6 class='q-pa-sm'> Wood Chopper </h6>
            <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w11"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n11"/></div></div>
            <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w12"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n12"/></div></div>
            <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w13"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n13"/></div></div>
        <q-btn @click="ex1"> Log Exercise </q-btn> <br>


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
            n11: null, n12: null, n13: null
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
        }
    }
})
</script>
