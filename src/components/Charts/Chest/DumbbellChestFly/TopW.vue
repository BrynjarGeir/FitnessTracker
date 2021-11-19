<template>
  <q-card class="bg-white full-width">
    <q-card-section class="bg-blue-grey-8">
      <div class="row items-center no-wrap">
        <div class="col">
          <div class="text-h6 text-white text-center">Top weight of dumbbell chest fly exercises</div>
        </div>
      </div>
    </q-card-section>
    <q-card-section>
      <canvas id="top-w"></canvas>
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
    this.createChart('top-w')
  },
  methods: {
    async createChart (chartId) {
      const ctx = document.getElementById(chartId)
      const q = query(collection(db, 'chest'), where('name', '==', 'Dumbbell Chest Fly'))
      const qSnapShot = await getDocs(q)
      const dates = []
      const topW = []
      qSnapShot.forEach((doc) => {
        let currDate = new Date(doc.data().date)
        dates.push(currDate.getDate() + '/' + currDate.getMonth() + '/' + currDate.getFullYear().toString())
        topW.push(Math.max(...doc.data().weight))
      })
      const myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: dates,//[1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
          datasets: [{
            data: topW,//[86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
            label: 'Top Weight',
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
            text: 'In kilogramms'
          }
        }
      })
      return myChart
    }
  }
}
</script>