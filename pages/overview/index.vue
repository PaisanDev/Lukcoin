<template>
  <div class="overview-wrapper">
    <!-- Discussion Section -->
    <b-row class="mb-5">
      <b-col cols="12" class="mb-3"
        >Recently Discussion
        <i
          class="far fa-question-circle"
          v-b-tooltip.hover
          title="A section for display recently discussion from social media"
      /></b-col>
      <b-col cols="12">
        <OverviewComment :comments="comments" />
      </b-col>
    </b-row>

    <!-- Discussion Section -->
    <b-row>
      <b-col cols="12" class="mb-3">
        Cryptocurrency Lists
        <i
          class="far fa-question-circle"
          v-b-tooltip.hover
          title="A section for display all avaliable token in our website"
        />
      </b-col>
      <b-col cols="12">
        <OverviewMostSentiment :data="sentiments" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
// import data from '/store/data.js'
export default {
  data() {
    return {
      sentiments: [],
      comments: [],
    }
  },
  created() {
    this.fetchComment()
    this.fetchSomething()
  },
  methods: {
    async fetchSomething() {
      await this.$axios.$get('http://127.0.0.1:5000/getOverview/').then((e) => {
        this.sentiments = e
      })
    },

    async fetchComment() {
      await this.$axios
        .$get('http://127.0.0.1:5000/getAllComment/')
        .then((e) => {
          for (const [key, value] of Object.entries(e)) {
            let temp = {
              date: '',
              data: '',
              type: 'Twitter',
            }
            temp.date = key
            value.forEach((element) => {
              temp.data = element
              this.comments.push(temp)
            })
          }
        })
    },
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
