<template>
  <div class="compare-wrapper shadow">
    <b-row>
      <b-col cols="12">
        <div>
          <b-form-input
            list="list"
            class="search-input"
            placeholder="Enter token name"
            v-model="searchSymbol"
            @change="selectToken($event)"
          ></b-form-input>

          <datalist id="list">
            <option
              v-for="token in tokens"
              :key="token.symbol"
              :value="token.symbol"
            >
              {{ token.symbol }}
            </option>
          </datalist>
        </div>
      </b-col>
    </b-row>
    <b-row align-h="center" class="mb-5">
      <b-col cols="12" class="text-center my-4">
        <img
          :src="require(`~/assets/images/${selectedToken.icon}`)"
          alt="Token Icon"
          height="50px"
        />
      </b-col>
      <b-col cols="12" class="text-center">
        <span class="tokenName">{{ selectedToken.symbol }}</span>
      </b-col>
    </b-row>

    <!-- Price -->
    <b-row align-h="center" class="mb-2">
      <b-col cols="6" class="text-left"> Price </b-col>
      <b-col cols="6" class="text-right"> ${{ selectedToken.price }} </b-col>
    </b-row>

    <!-- Market Cap -->
    <b-row align-h="center" class="mb-2">
      <b-col cols="6" class="text-left"> Market Cap </b-col>
      <b-col cols="6" class="text-right"> ${{ selectedToken.price }} </b-col>
    </b-row>

    <!-- Trading Volume -->
    <b-row align-h="center" class="mb-2">
      <b-col cols="6" class="text-left"> Trading Volume </b-col>
      <b-col cols="6" class="text-right"> ${{ selectedToken.price }} </b-col>
    </b-row>

    <!-- Max Supply -->
    <b-row align-h="center" class="mb-2">
      <b-col cols="6" class="text-left"> Max Supply </b-col>
      <b-col cols="6" class="text-right">
        {{ selectedToken.price }}
      </b-col>
    </b-row>

    <!-- Total Supply -->
    <b-row align-h="center" class="mb-2">
      <b-col cols="6" class="text-left"> Total Supply </b-col>
      <b-col cols="6" class="text-right">
        {{ selectedToken.price }}
      </b-col>
    </b-row>

    <b-row align-h="center" class="mb-2">
      <b-col cols="12" class="text-center">
        <button class="viewProject-BTN">VISIT PROJECT</button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchSymbol: '',
      selectedToken: { symbol: 'LUK', price: 0, icon: 'Logo.svg', link: '' },
      tokens: [
        { symbol: 'BTC', price: '1000', icon: 'Logo.svg' },
        { symbol: 'ETH', price: '1000', icon: 'Logo.svg' },
        { symbol: 'BNB', price: '1000', icon: 'Logo.svg' },
        { symbol: 'SOL', price: '1000', icon: 'Logo.svg' },
      ],
    }
  },
  methods: {
    selectToken(event) {
      if (event == '') {
        this.selectedToken.symbol = 'LUK'
      } else this.selectedToken.symbol = event
    },
  },
}
</script>

<style lang="sass" scoped>
.compare-wrapper
    min-height: 500px
    width: 400px
    padding: 30px
    background: #FFFFFF
    border: #F1F1F1 1px solid
    border-radius: 15px
    transition: all 0.5s

.search-input
    height: 40px
    width: 100%
    padding: 0 20px
    border-radius: 20px
    border: #BEBEBE 1px solid

.search-input:focus
    outline: none

.tokenName
  margin: 10px 0
  font-size: 20px

.viewProject-BTN
  height: 40px
  border-radius: 20px
  border: none
  color: white
  background: $color-secondary
  padding: 0 20px
  transition: all 0.15s
  box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.10)
  -webkit-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.10)
  -moz-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.10)

.viewProject-BTN:hover
  background: $color-primary

@media only screen and (max-width: $sm-width)
    .compare-wrapper
        width: 300px
</style>
