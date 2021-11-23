<template>
  <q-card class="bg-white full-width">
    <q-card-section class="bg-blue-grey-8">
      <div class="row items-center no-wrap">
        <div class="col">
          <div class="text-h6 text-white text-center">Total iterations of inclined dumbbell chest press exercises</div>
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
      const q = query(collection(db, 'chest'), where('name', '==', 'Inclined Dumbbell Chest Press'))
      const qSnapShot = await getDocs(q)
      const dates = []
      const totalI = []
      qSnapShot.forEach((doc) => {
        let currDate = new Date(doc.data().date)
        dates.push(currDate.getDate() + '/' + currDate.getMonth() + '/' + currDate.getFullYear().toString())
        totalI.push(doc.data().iterations.reduce((a,b) => a+b,0))
      })
      const myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: dates,//[1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
          datasets: [{
            data: totalI,//[86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
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
            text: ''
          }
        }
      })
      return myChart
    }
  }
}
</script>