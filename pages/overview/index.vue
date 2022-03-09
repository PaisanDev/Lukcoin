<template>
  <div class="overview-wrapper">
    <!-- Discussion Section -->
    <b-row class="mb-5">
      <b-col cols="12" class="mb-3">Discussion</b-col>
      <b-col cols="12">
        <OverviewComment :comments="comments" />
      </b-col>
    </b-row>

    <!-- Discussion Section -->
    <b-row>
      <b-col cols="12" class="mb-3">Most sentiment</b-col>
      <b-col cols="12">
        <OverviewMostSentiment :data="sentiments" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comments: [
        {
          type: 'Twitter',
          name: 'name1aaaaa',
          comment:
            'comment somethingaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          date: '25/2/2022',
          time: '15:00AM',
        },
        {
          type: 'Reddit',
          name: 'name2',
          comment: 'comment something',
          date: '25/2/2022',
          time: '15:00AM',
        },
        {
          type: 'Twitter',
          name: 'name3',
          comment: 'comment something',
          date: '25/2/2022',
          time: '15:00AM',
        },
        {
          type: 'Twitter',
          name: 'name4',
          comment: 'comment something',
          date: '25/2/2022',
          time: '15:00AM',
        },
        {
          type: 'Reddit',
          name: 'name5',
          comment: 'comment something',
          date: '25/2/2022',
          time: '15:00AM',
        },
      ],
      sentiments: [
        {
          name: 'LUK COIN',
          symbol: 'LUK',
          cap: '1,000,000',
          volume: '100',
          score: '3.5',
        },
        {
          name: 'LUK COIN',
          symbol: 'LUK',
          cap: '1,000,000',
          volume: '100',
          score: '3.5',
        },
        {
          name: 'LUK COIN',
          symbol: 'LUK',
          cap: '1,000,000',
          volume: '100',
          score: '3.5',
        },
      ],
    }
  },
}
</script>

<style lang="sass" scoped>

.overview-wrapper
  min-height: 100vh
  padding: 80px 60px
</style>
