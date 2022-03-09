<template>
  <!-- {{ $route.params.name }} -->
  <div class="detail-wrapper">
    <b-row>
      <b-col cols="12" sm="12" md="12" lg="5" class="mb-3">
        <OverviewProjectName img="Logo.svg" name="LUK COIN" />
      </b-col>
      <b-col cols="12" sm="6" md="6" lg="4" class="mb-3">
        <OverviewProjectAudit :audit="true" />
      </b-col>
      <b-col cols="12" sm="6" md="6" lg="3" class="mb-3">
        <OverviewProjectPublish date="2021-09-27" />
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" class="mb-3">
        <OverviewProjectTokenList :data="data" />
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" sm="6" class="mb-3">
        <OverviewProjectStatus />
      </b-col>
      <b-col cols="12" sm="6" class="mb-3">
        <OverviewProjectScore />
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" sm="6" class="mb-3">
        <OverviewProjectGraph />
      </b-col>
      <b-col cols="12" sm="6" class="mb-3">
        <OverviewProjectLinks :links="links" />
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
      data: [
        {
          symbol: 'LUK',
          price: '0.513411001',
          address: '0x1D229B958D5DDFca92146585a8711aECbE56F095',
        },
        {
          symbol: 'LUK2',
          price: '0.513411001',
          address: '0x1D229B958D5DDFca92146585a8711aECbE56F095',
        },
        {
          symbol: 'LUK3',
          price: '0.513411001',
          address: '0x1D229B958D5DDFca92146585a8711aECbE56F095',
        },
      ],
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
      links: [
        { link: 'www.google.com', type: 'website' },
        { link: 'www.google.com', type: 'facebook' },
        { link: 'www.google.com', type: 'twitter' },
      ],
    }
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
