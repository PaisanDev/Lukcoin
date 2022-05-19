<template>
  <div class="detail-wrapper">
    <b-row>
      <b-col cols="12" sm="12" md="12" lg="5" class="mb-3">
        <OverviewProjectName :img="data.src" :name="data.name" />
      </b-col>
      <b-col cols="12" sm="6" md="6" lg="4" class="mb-3">
        <OverviewProjectAudit :audit="true" />
      </b-col>
      <b-col cols="12" sm="6" md="6" lg="3" class="mb-3">
        <OverviewProjectPublish :date="data.date_added" />
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" class="mb-3">
        <OverviewProjectTokenList
          :symbol="data.symbol"
          :price="data.price"
          :address="data.address"
          :chain="data.platform"
        />
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" sm="6" class="mb-3">
        <OverviewProjectStatus :data="data.status_sentiment" />
      </b-col>
      <b-col cols="12" sm="6" class="mb-3">
        <OverviewProjectScore :data="data.score" />
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" sm="6" class="mb-3">
        <OverviewProjectGraph />
      </b-col>
      <b-col cols="12" sm="6" class="mb-3">
        <OverviewProjectLinks :links="data.links" />
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12">
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
      data: [],
      comments: [],
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      await this.$axios
        .$get('https://arainaknhawa.herokuapp.com/getDetail/' + this.name)
        .then((e) => {
          this.data = e.info
          this.comments = e.comment
          console.log(e)
        })
        .catch((e) => {
          console.log(e)
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
