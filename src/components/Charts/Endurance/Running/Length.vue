<template>
  <q-card class="bg-white full-width">
    <q-card-section class="bg-blue-grey-8">
      <div class="row items-center no-wrap">
        <div class="col">
          <div class="text-h6 text-white text-center">Length of running exercises</div>
        </div>
      </div>
    </q-card-section>
    <q-card-section>
      <canvas id="length"></canvas>
    </q-card-section>
  </q-card>
</template>

<script>
import Chart from 'chart.js'
import db from 'src/boot/firebase'
import { query, collection, where, getDocs } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

export default {
  data () {
    return {
    }
  },
  mounted () {
    this.createChart('length')
  },
  methods: {
    async createChart (chartId) {
      const ctx = document.getElementById(chartId)
      const auth = getAuth()
      const userID = auth.currentUser.uid
      const q = query(collection(db, 'fitnesstracker/' + userID + '/endurance'), where('name', '==', 'Running'))
      const qSnapShot = await getDocs(q)
      const dates = []
      const length = []
      qSnapShot.forEach((doc) => {
        let currDate = new Date(doc.data().date)
        const month = parseInt(currDate.getMonth()) + 1
        dates.push(currDate.getDate() + '/' + month + '/' + currDate.getFullYear().toString())
        length.push(doc.data().length)
      })
      const myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: dates.slice(-8),
          datasets: [{
            data: length.slice(-8),
            label: 'Kilometers',
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
            text: 'In kilometers'
          }
        }
      })
      return myChart
    }
  }
}
</script>