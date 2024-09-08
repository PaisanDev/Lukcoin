<template>
  <div class="tokenlist-wrapper shadow">
    <table style="border-spacing: 0 10px; border-collapse: separate">
      <tbody>
        <tr>
          <th class="text-center token-img">
            CHAIN
            <i
              class="far fa-question-circle"
              v-b-tooltip.hover
              title="A section for displaying token deployed chain."
            />
          </th>
          <th class="token-name">
            SYMBOL
            <i
              class="far fa-question-circle"
              v-b-tooltip.hover
              title="Symbol or Short signature text of the token name."
            />
          </th>
          <th class="token-price">
            PRICE
            <i
              class="far fa-question-circle"
              v-b-tooltip.hover
              title="A section for displaying current price the token."
            />
          </th>
          <th class="token-address">
            ADDRESS
            <i
              class="far fa-question-circle"
              v-b-tooltip.hover
              title="A section for displaying token official address reference from website Coingecko (An address can click to copy to prevent miss typing and convenient use)"
            />
          </th>
        </tr>
        <tr class="table-row">
          <td class="text-center">
            <img
              src="~/images/chain/BSC.png"
              alt="Chain Logo"
              v-if="chain == 'binance-smart-chain'"
            />

            <img
              src="~/images/chain/ETH.png"
              alt="Chain Logo"
              v-if="chain == 'ethereum'"
            />

            <img
              src="~/images/chain/Solana.png"
              alt="Chain Logo"
              v-if="chain == 'solana'"
            />

            <img
              src="~/images/chain/Wanchain.png"
              alt="Chain Logo"
              v-if="chain == 'wanchain'"
            />
          </td>
          <td class="token-name">{{ symbol }}</td>
          <td class="token-price">
            <div>$ {{ price }}</div>
          </td>
          <td class="token-address">
            <div
              @click="copyAddress(address, 'address' + symbol)"
              :id="'address' + symbol"
            >
              {{ address }}
            </div>
            <b-tooltip
              :ref="'address' + symbol"
              :target="'address' + symbol"
              title="Copied!"
              triggers="click"
            ></b-tooltip>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    chain: '',
    symbol: '',
    price: 0,
    address: '',
  },
  methods: {
    copyAddress(getAddress, tooltipID) {
      this.$copyText(getAddress)
      setTimeout(() => {
        this.$root.$emit('bv::hide::tooltip', tooltipID)
      }, 600)
    },
  },
}
</script>

<style lang="sass" scoped>
.tokenlist-wrapper
    display: flex
    vertical-align: middle
    padding: 20px
    border-radius: 10px
    transition: all 0.5s
    background: $color-bg

.tokenlist-wrapper table tr th
    font-weight: 400
    color: $color-ascent

.tokenlist-wrapper span header
    display: inline
    color: $color-ascent

.token-img
  width: 100px

.token-name
  width: 300px
  margin: 0 10px 0 0

.token-price div
  white-space: nowrap
  overflow: hidden
  text-overflow: ellipsis
  width: 300px

.token-address div
  width: 400px
  cursor: pointer
  white-space: nowrap
  overflow: hidden
  text-overflow: ellipsis
  user-select: none
  -moz-user-select: none
  -webkit-user-select: none
  -ms-user-select: none
  transition: all 0.1s

.token-address div:active
  color: $color-primary

.table-row td img
  height: 30px

@media only screen and (max-width: 992px)

  .token-name
    width: 100px

  .token-price div
    width: 200px
    margin: 0 15px 0 0

  .token-address div
    width: 200px


@media only screen and (max-width: 845px)

  .token-name
    width: 100px

  .token-price div
    width: 100px
    margin: 0 15px 0 0

  .token-address div
    width: 200px

@media only screen and (max-width: $sm-width)

  .token-name
    width: 80px

  .token-price div
    width: 80px

  .token-address div
    width: 100px

@media only screen and (max-width: 400px)
  .token-name
    width: 80px

  .token-price div
    width: 80px

  .token-address div
    width: 80px
</style>
