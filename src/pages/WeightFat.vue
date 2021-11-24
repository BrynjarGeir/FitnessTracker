<template>
    <q-page class='q-pa-lg'>
        <h5 class='q-mt-none'> Weight and fat percentage status </h5>
        <h6 class='q-pa-sm'> Weight </h6>
        <q-input type='number' placeholder='Current Weight' v-model='w'/>
        <q-btn @click="ex1"> Log Weight </q-btn> <br>

        <h6 class='q-pa-sm'> Fat percentage </h6>
        <q-input type='number' placeholder='Current Fat percentagee' v-model='fp'/>
        <q-btn @click="ex2"> Log Fat Percentage </q-btn> <br>


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
            w: null, fp: null
        }
    },

    methods: {
        async ex1() {
            const auth = getAuth()
            const userID = auth.currentUser.uid
            await setDoc(doc(db, 'fitnesstracker/' + userID + '/weight', 'Weight' + Date.now()), {
                name: 'Weight',
                weight: parseInt(this.w),
                date: Date.now()
            }).then(this.w = null)
        },

        async ex2() {
            const auth = getAuth()
            const userID = auth.currentUser.uid
            await setDoc(doc(db, 'fitnesstracker/' + userID + '/fat', 'FatPer' + Date.now()), {
                name: 'Fat Percentage',
                percentage: parseInt(this.fp),
                date: Date.now()
            }).then(this.fp = null)

        }
    }
})
</script>



<style lang="scss">
div.flex {
    display: inline;
    
}
</style>