<template>
  <div class="detail-wrapper">
    <b-row>
      <b-col cols="12" sm="12" md="12" lg="6" class="mb-3">
        <OverviewProjectName :img="img" :name="data.name" />
      </b-col>
      <b-col cols="12" sm="12" md="12" lg="6" class="mb-3">
        <OverviewProjectAudit :audit="true" />
      </b-col>
      <!-- <b-col cols="12" sm="6" md="6" lg="3" class="mb-3">
        <OverviewProjectPublish :date="data.date_added" />
      </b-col> -->
    </b-row>

    <b-row>
      <b-col cols="12" class="mb-3">
        <OverviewProjectTokenList
          :symbol="data.symbol"
          :price="data.price"
          :address="data.address"
          :chain="data.chain"
        />
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" sm="6" class="mb-3">
        <OverviewProjectStatus :data="data.cur_sentiment" />
      </b-col>
      <b-col cols="12" sm="6" class="mb-3">
        <OverviewProjectPredictStatus :data="percent" :status="status" />
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" sm="6" class="mb-3">
        <OverviewProjectGraph :data="data.all_sentiment" />
      </b-col>
      <b-col cols="12" sm="6" class="mb-3">
        <OverviewProjectGraphPriceHistory :data="data.all_predict" />
        <!-- <OverviewProjectLinks :links="data.links" /> -->
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" class="mb-3"
        ><OverviewProjectLinks :links="data.links"
      /></b-col>
    </b-row>

    <b-row>
      <b-col cols="12">
        <header>
          Social discussion
          <i
            class="far fa-question-circle"
            v-b-tooltip.hover
            title="A section for displaying social media discuss or referenced to this token"
          />
        </header>
        <OverviewComment :comments="comments" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: this.$route.params.name,
      img: '',
      data: [],
      comments: [],
      percent: 0.0,
      status: '',
      date: [],
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      await this.$axios
        .$get('http://127.0.0.1:5000/getDetail/' + this.name)
        .then((e) => {
          console.log(e)
          e.all_price = JSON.parse(e.all_price)
          e.price = e.price.toFixed(4).replace(/\d(?=(\d{3})+\.)/g, '$&,')
          e.all_sentiment = JSON.parse(e.all_sentiment)
          e.all_sentiment.forEach((element) => {
            if (element.sentiment == 1) {
              element.sentiment = 'Positive'
            } else {
              element.sentiment = 'Negative'
            }
          })
          e.all_predict = JSON.parse(e.all_predict)
          // e.all_predict.forEach((e) => {
          //   console.log(e)
          //   e.predicted = e.predicted
          //     .toFixed(4)
          //     .replace(/\d(?=(\d{3})+\.)/g, '$&,')
          // })

          this.percent = e.cur_predict.predict.percent
          this.status = e.cur_predict.predict.status

          this.data = e
        })
        .catch((e) => {
          console.log(e)
          this.$router.push('/400')
        })

      await this.$axios
        .$get('http://127.0.0.1:5000/getToCompare/' + this.name)
        .then((e) => {
          this.img = e.pic
        })
        .catch((e) => {
          console.log(e)
          this.$router.push('/400')
        })

      await this.$axios
        .$get('http://127.0.0.1:5000//getComment/' + this.name)
        .then((e) => {
          for (let i = 0; i < e.tweets.length; i++) {
            let temp = {
              date: '',
              data: [],
              type: 'Twitter',
            }
            temp.date = e.date
            temp.data = [e.tweets[i]]
            this.comments.push(temp)
          }
        })
        .catch((e) => {
          console.log(e)
          this.$router.push('/400')
        })
    },
  },
}
</script>

<style lang="sass" scoped>
.detail-wrapper
  min-height: 100vh
  padding: 80px 40px
  transition: all 0.5s

@media only screen and (max-width: $sm-width)
  .detail-wrapper
    padding: 80px 10px
</style>
