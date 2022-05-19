<template>
  <div class="score-wrapper shadow h-100">
    <header>Sentiment Analysis</header>
    <div class="chart mx-auto">
      <apexchart :options="chartOptions" :series="series"></apexchart>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartOptions: {
        chart: {
          id: 'vuechart-example',
          type: 'bar',
          width: '100%',
        },
        xaxis: {
          categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY'],
        },
      },
      series: [
        {
          name: 'score',
          data: [3, 4, 3.5, 4, 3],
        },
      ],
    }
  },
}
</script>

<style lang="sass" scoped>
.score-wrapper
    padding: 20px
    border-radius: 10px
    background: $color-bg

.score-wrapper header
    display: inline
    font-size: 20px
    font-weight: 350
    color: $color-ascent
    text-transform: uppercase

.score-wrapper apexchart
    max-width: 300px
    transition: all 0.5s

.score
  height: 40px
  line-height: 40px
  color: $color-primary
  font-weight: 500
  font-size: 30px
  vertical-align: middle
  transition: all 0.3s

.chart
  max-width: 400px

@media only screen and (max-width: $md-width)
  .score
    font-size: 20px

@media only screen and (max-width: 570px)
  .score
    font-size: 25px
</style>
