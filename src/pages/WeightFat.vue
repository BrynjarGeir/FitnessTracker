<template>
    <q-page class='q-pa-lg'>
        <h5 class='q-mt-none'> Weight and fat percentage status </h5>
        <h6 class='q-pa-sm'> Weight </h6>
        <q-input type='number' placeholder='Current Weight' v-model='w11'/>
        <q-btn @click="ex1"> Log Weight </q-btn> <br>

        <h6 class='q-pa-sm'> Fat percentage </h6>
        <q-input type='number' placeholder='Current Fat percentagee' v-model='w21'/>
        <q-btn @click="ex2"> Log Fat Percentage </q-btn> <br>


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
            w11: null, w21: null
        }
    },

    methods: {
        async ex1() {
            await setDoc(doc(db, 'weight', 'Weight' + Date.now()), {
                name: 'Weight',
                weight: parseInt(this.w11),
                date: Date.now()
            }).then(this.w11 = null)
        },

        async ex2() {
            await setDoc(doc(db, 'fat', 'FatPer' + Date.now()), {
                name: 'Fat Percentage',
                percentage: parseInt(this.w21),
                date: Date.now()
            }).then(this.w21 = null)

        }
    }
})
</script>



<style lang="scss">
div.flex {
    display: inline;
    
}
</style>