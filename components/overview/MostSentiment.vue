<template>
  <div class="MostSentiment-wrapper">
    <table
      class="w-100"
      style="border-spacing: 0 10px; border-collapse: separate"
    >
      <tbody>
        <tr>
          <th class="text-center">#</th>
          <th class="hide-mobile-sm">Token name</th>
          <th class="hide-mobile-md project-symbol">Symbol</th>
          <th class="hide-mobile-md">Market Cap</th>
          <th class="hide-mobile-sm">Volume(24h)</th>
          <th>Sentiment</th>
          <th class="text-right pr-3">Action</th>
        </tr>
        <tr class="table-row" v-for="i in data" :key="i.symbol">
          <td class="text-center">
            <img :src="i.src" alt="project Logo" class="project-icon" />
          </td>
          <td class="hide-mobile-sm">{{ i.name }}</td>
          <td class="hide-mobile-md project-symbol">{{ i.symbol }}</td>
          <td class="hide-mobile-md">$ {{ i.cap }}</td>
          <td class="hide-mobile-sm">$ {{ i.volume }}</td>
          <td>{{ i.score }}</td>
          <td class="text-right pr-3">
            <NuxtLink :to="'/overview/' + i.symbol">
              <button class="project-view-btn">
                <i class="fas fa-search"></i>
              </button>
            </NuxtLink>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
  },
}
</script>

<style lang="sass" scoped>
.MostSentiment-wrapper
    padding: 20px
    background: $color-bg
    border-radius: 10px
    border: 1px #F1F1F1 solid
    box-shadow: 0px 8px 5px 0px rgba(0,0,0,0.12)
    -webkit-box-shadow: 0px 8px 5px 0px rgba(0,0,0,0.12)
    -moz-box-shadow: 0px 8px 5px 0px rgba(0,0,0,0.12)

.MostSentiment-wrapper table tr th
    color: $color-ascent
    font-weight: 400

.table-row
    height: 60px
    border-radius: 5px
    box-shadow: 2px 4px 6px 3px rgba(0,0,0,0.1)
    -webkit-box-shadow: 2px 4px 6px 3px rgba(0,0,0,0.1)
    -moz-box-shadow: 2px 4px 6px 3px rgba(0,0,0,0.1)

.project-icon
    height: 30px

.project-view-btn
    width: 40px
    height: 40px
    color: $color-ascent
    background: white
    border-radius: 20px
    border: 1px #F1F1F1 solid
    box-shadow: 0px 8px 5px 0px rgba(0,0,0,0.1)
    -webkit-box-shadow: 0px 8px 5px 0px rgba(0,0,0,0.1)
    -moz-box-shadow: 0px 8px 5px 0px rgba(0,0,0,0.1)
    transition: all 0.2s

.project-view-btn:hover
    background: $color-primary
    color: white

.hide-mobile-md
    display: table-cell

.hide-mobile-sm
    display: table-cell

@media only screen and (max-width: $md-width)
    .hide-mobile-md
        display: none

@media only screen and (max-width: $sm-width)
    .project-icon
        height: 20px
    .project-symbol
        display: table-cell !important
    .hide-mobile-sm
        display: none
</style>
