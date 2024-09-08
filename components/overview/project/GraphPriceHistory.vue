<template>
  <div class="score-wrapper shadow h-100">
    <header>
      Coin predicted price
      <i
        class="far fa-question-circle"
        v-b-tooltip.hover
        title="A section for displaying history of past coin price prediction result from our trained model"
      />
    </header>
    <div class="mt-4">
      <b-table striped sticky-header="450px" :items="data"></b-table>
    </div>

    <p v-if="data == null">Unavailable to find</p>
  </div>
</template>

<script>
export default {
  props: {
    data: [],
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

.score-wrapper header i
    font-size: 16px

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

.tableSentiment
  height: 300px
  overflow: scroll


@media only screen and (max-width: $md-width)
  .score
    font-size: 20px

@media only screen and (max-width: 570px)
  .score
    font-size: 25px
</style>
