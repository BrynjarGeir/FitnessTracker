<template>
    <q-page class='q-pa-lg'>
        <h5 class='q-mt-none'> Endurance Exercises </h5>
        <h6 class='q-pa-sm'> Running </h6>
        <div class='row'>
            <q-input type='number' placeholder='Duration of run' v-model='d1'/>
            <q-input type='number' placeholder='Length of run' v-model='l1'/>
            <q-input type='number' placeholder='Calories of run' v-model='c1'/>
        </div>
        <q-btn @click="ex1"> Log Run </q-btn> <br>

        <h6 class='q-pa-sm'> Cycling </h6>
        <div class='row'>
            <q-input type='number' placeholder='Duration of ride' v-model='d2'/>
            <q-input type='number' placeholder='Length of ride' v-model="l2"/>
            <q-input type='number' placeholder='Calories of ride' v-model='c2'/>
            </div>
        <q-btn @click="ex2"> Log Ride </q-btn> <br>

        <h6 class='q-pa-sm'> Swimming </h6>
        <div class='row'>
            <q-input type='number' placeholder='Duration of swim' v-model='d3'/>
            <q-input type='number' placeholder='Length of swim' v-model="l3"/>
            <q-input type='number' placeholder='Calories of swim' v-model='c3'/>
            </div>
        <q-btn @click="ex3"> Log Swim </q-btn> <br>


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
            d1: null, d2: null, d3: null,
            l1: null, l2: null, l3: null,
            c1: null, c2: null, c3: null
        }
    },

    methods: {
        async ex1() {
            const auth = getAuth()
            const userID = auth.currentUser.uid 
            await setDoc(doc(db, 'fitnesstracker/' + userID + '/endurance', 'Running' + Date.now()), {
                name: 'Running',
                duration: parseInt(this.d1),
                length: parseFloat(this.l1),
                calories: parseInt(this.c1),
                date: Date.now()
            }).then(this.d1 = null, this.l1 = null, this.c1 = null)
        },

        async ex2() {
            const auth = getAuth()
            const userID = auth.currentUser.uid 
            await setDoc(doc(db, 'fitnesstracker/' + userID + '/endurance', 'Cycling' + Date.now()), {
                name: 'Cycling',
                duration: parseInt(this.d2),
                length: parseFloat(this.l2),
                calories: parseInt(this.c2),
                date: Date.now()
            }).then(this.d2 = null, this.l2 = null, this.c2 = null)
        },

        async ex3() {
            const auth = getAuth()
            const userID = auth.currentUser.uid 
            await setDoc(doc(db, 'fitnesstracker/' + userID + '/endurance', 'Swimming' + Date.now()), {
                name: 'Swimming',
                duration: parseInt(this.d3),
                length: parseFloat(this.l3),
                calories: parseInt(this.c3),
                date: Date.now()
            }).then(this.d3 = null, this.l3 = null, this.c3 = null)
        }
    }
})
</script>



<style lang="scss">
div.flex {
    display: inline;
    
}
</style>