<template>
  <div class="overview-wrapper">
    <!-- Discussion Section -->
    <b-row class="mb-5">
      <b-col cols="12" class="mb-3"
        >Recently Discussion
        <i
          class="far fa-question-circle"
          v-b-tooltip.hover
          title="A section for display 5 recently discussion from social media"
      /></b-col>
      <b-col cols="12">
        <OverviewComment :comments="comments" />
      </b-col>
    </b-row>

    <!-- Discussion Section -->
    <b-row>
      <b-col cols="12" class="mb-3">
        Weekly Most Sentiment
        <i
          class="far fa-question-circle"
          v-b-tooltip.hover
          title="A section for display 5 weekly most sentiment	score"
        />
      </b-col>
      <b-col cols="12">
        <OverviewMostSentiment :data="sentiments" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import data from '/store/data.js'
import comment from '/store/commends.js'
export default {
  data() {
    return {
      sentiments: data,
      comments: comment,
    }
  },
}
</script>

<style lang="sass" scoped>

.overview-wrapper
  min-height: 100vh
  padding: 80px 60px

@media only screen and (max-width: $sm-width)
  .overview-wrapper
    padding: 80px 20px
</style>
