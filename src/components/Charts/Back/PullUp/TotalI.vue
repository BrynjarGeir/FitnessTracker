<template>
  <q-card class="bg-white full-width">
    <q-card-section class="bg-blue-grey-8">
      <div class="row items-center no-wrap">
        <div class="col">
          <div class="text-h6 text-white text-center">Total Iterations of pull up exercises</div>
        </div>
      </div>
    </q-card-section>
    <q-card-section>
      <canvas id="total-i"></canvas>
    </q-card-section>
  </q-card>
</template>

<script>
import Chart from 'chart.js'
import db from 'src/boot/firebase'
import { query, collection, where, getDocs} from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

export default {
  data () {
    return {
    }
  },
  mounted () {
    this.createChart('total-i')
  },
  methods: {
    async createChart (chartId) {
      const ctx = document.getElementById(chartId)
      const auth = getAuth()
      const userID = auth.currentUser.uid
      const q = query(collection(db, 'fitnesstracker/' + userID + '/back'), where('name', '==', 'Pull Up'))
      const qSnapShot =   await getDocs(q)
      const dates = []
      const totalI = []
      qSnapShot.forEach((doc) => {
        let currDate = new Date(doc.data().date)
        const month = parseInt(currDate.getMonth()) + 1
        dates.push(currDate.getDate() + '/' + month + '/' + currDate.getFullYear().toString())
        totalI.push(doc.data().iterations.reduce((a,b) => a + b,0))
      })
      const myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: dates.splice(-8),
          datasets: [{
            data: totalI.splice(-8),
            label: 'Total Iterations',
            borderColor: '#3e95cd',
            fill: false,
            lineTension: 0.9
          }
          ]
        },
        options: {
          legend: {
            display: false
          },
          title: {
            display: true,
            text: 'The total iterations of each exercises'
          }
        }
      })
      return myChart
    }
  }
}
</script>
