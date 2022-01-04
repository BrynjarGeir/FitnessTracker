 <template>
    <q-page class='q-pa-lg'>
        <h5 class='q-mt-none'> Endurance Exercises </h5>
        <h6 class='q-pa-sm'> Wood Chopper </h6>
            <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w11"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n11"/></div></div>
            <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w12"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n12"/></div></div>
            <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w13"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n13"/></div></div>
            <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w14"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n14"/></div></div>
            <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w15"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n15"/></div></div>
        <q-btn @click="ex1"> Log Exercise </q-btn> <br>

        <h6 class='q-pa-sm'> Crunch </h6>
            <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w21"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n21"/></div></div>
            <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w22"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n22"/></div></div>
            <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w23"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n23"/></div></div>
            <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w24"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n24"/></div></div>
            <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w25"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n25"/></div></div>
        <q-btn @click="ex2"> Log Exercise </q-btn> <br>

        <h6 class='q-pa-sm'> Inverse Crunch </h6>
            <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w31"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n31"/></div></div>
            <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w32"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n32"/></div></div>
            <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w33"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n33"/></div></div>
            <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w34"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n34"/></div></div>
            <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w35"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n35"/></div></div>
        <q-btn @click="ex3"> Log Exercise </q-btn> <br>

        <h6 class='q-pa-sm'> Machine Crunch </h6>
            <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w41"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n41"/></div></div>
            <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w42"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n42"/></div></div>
            <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w43"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n43"/></div></div>
            <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w44"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n44"/></div></div>
            <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w45"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n45"/></div></div>
        <q-btn @click="ex4"> Log Exercise </q-btn> <br>
        
        <h6 class='q-pa-sm'> Machine Torso Rotation </h6>
            <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w51"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n51"/></div></div>
            <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w52"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n52"/></div></div>
            <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w53"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n53"/></div></div>
            <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w54"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n54"/></div></div>
            <div class='row'><div class='col'><q-input type="number" placeholder="Weight of exercise" v-model="w55"/></div><div class='col'><q-input type="number" placeholder="Number of iterations" v-model="n55"/></div></div>
        <q-btn @click="ex5"> Log Exercise </q-btn> <br>


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
            n11: null, n12: null, n13: null, n14: null, n15: null,
            n21: null, n22: null, n23: null, n24: null, n25: null,
            n31: null, n32: null, n33: null, n34: null, n35: null,
            n41: null, n42: null, n43: null, n44: null, n45: null,
            n51: null, n52: null, n53: null, n54: null, n55: null
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
            await setDoc(doc(db, 'fitnesstracker/' + userID + '/core', 'Wood-Chopper' + Date.now()), {
                name: 'Wood Chopper',
                weight: weights,
                iterations: iters,
                date: Date.now()
            }).then(this.w11 = null, this.w12 = null, this.w13 = null, this.w14, this.w15,
                    this.n11 = null, this.n12 = null, this.n13 = null, this.n14, this.n15)
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
            await setDoc(doc(db, 'fitnesstracker/' + userID + '/core', 'Crunch' + Date.now()), {
                name: 'Crunch',
                weight: weights,
                iterations: iters,
                date: Date.now()
            }).then(this.w21 = null, this.w22 = null, this.w23 = null, this.w24 = null, this.w25 = null,
                    this.n21 = null, this.n22 = null, this.n23 = null, this.n24 = null, this.n25 = null)
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
            await setDoc(doc(db, 'fitnesstracker/' + userID + '/core', 'Inverse-Crunch' + Date.now()), {
                name: 'Inverse Crunch',
                weight: weights,
                iterations: iters,
                date: Date.now()
            }).then(this.w31 = null, this.w32 = null, this.w33 = null, this.w34 = null, this.w35 = null,
                    this.n31 = null, this.n32 = null, this.n33 = null, this.n34 = null, this.n35 = null)
        },

        async ex4() {
            const auth = getAuth()
            const userID = auth.currentUser.uid
            weights = []; iters = []
            if(!isNaN(this.w41)){weights.push(parseFloat(this.w41))}; if(!isNaN(this.w42)){weights.push(parseFloat(this.w42))}
            if(!isNaN(this.w43)){weights.push(parseFloat(this.w43))}; if(!isNaN(this.w44)){weights.push(parseFloat(this.w44))};
            if(!isNaN(this.w45)){weights.push(this.w45)}
            if(!isNaN(this.n41)){iters.push(parseInt(this.n41))}; if(!isNaN(this.n42)){iters.push(parseInt(this.n42))}
            if(!isNaN(this.n43)){iters.push(parseInt(this.n43))}; if(!isNaN(this.n44)){iters.push(parseInt(this.n44))};
            if(!isNaN(this.n45)){iters.push(this.n45)}
            await setDoc(doc(db, 'fitnesstracker/' + userID + '/core', 'Machine-Crunch' + Date.now()), {
                name: 'Machine Crunch',
                weight: weights,
                iterations: iters,
                date: Date.now()
            }).then(this.w41 = null, this.w42 = null, this.w43 = null, this.w44 = null, this.w45 = null,
                    this.n41 = null, this.n42 = null, this.n43 = null, this.n44 = null, this.n45 = null)
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
            await setDoc(doc(db, 'fitnesstracker/' + userID + '/core', 'Machine-Torso-Rotation' + Date.now()), {
                name: 'Machine Torso Rotation',
                weight: [parseFloat(this.w51), parseFloat(this.w52), parseFloat(this.w53), parseFloat(this.w54), parseFloat(this.w55)],
                iterations: [parseInt(this.n51), parseInt(this.n52), parseInt(this.n53), parseInt(this.n54), parseInt(this.n55)],
                date: Date.now()
            }).then(this.w51 = null, this.w52 = null, this.w53 = null, this.w54 = null, this.w55 = null,
                    this.n51 = null, this.n52 = null, this.n53 = null, this.n54 = null, this.n55 = null)
        }
    }
})
</script>
