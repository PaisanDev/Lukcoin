<template>
  <div class="compare-wrapper shadow">
    <b-row>
      <b-col cols="12">
        <div>
          <b-form-input
            class="search-input"
            placeholder="Enter token name"
            v-model="searchSymbol"
            @change="selectToken($event)"
          ></b-form-input>

          <!-- <datalist id="list">
            <option
              v-for="token in tokens"
              :key="token.symbol"
              :value="token.symbol"
            >
              {{ token.symbol }}
            </option>
          </datalist> -->
        </div>
      </b-col>
    </b-row>
    <b-row align-h="center" class="mb-5">
      <b-col cols="12" class="text-center my-4">
        <img
          :src="selectedToken.src"
          alt="Token Icon"
          height="50px"
          v-if="selectedToken.src != ''"
        />
        <img
          :src="require('~/assets/images/Logo.svg')"
          alt="Token Icon"
          height="50px"
          v-if="selectedToken.src == ''"
        />
      </b-col>
      <b-col cols="12" class="text-center">
        <span class="tokenName">{{ selectedToken.symbol }}</span>
      </b-col>
    </b-row>

    <!-- Price -->
    <b-row align-h="center" class="mb-2">
      <b-col cols="6" class="text-left"> Price </b-col>
      <b-col cols="6" class="text-right"> {{ selectedToken.price }} </b-col>
    </b-row>

    <!-- Market Cap -->
    <b-row align-h="center" class="mb-2">
      <b-col cols="6" class="text-left"> Market Cap </b-col>
      <b-col cols="6" class="text-right"> {{ selectedToken.cap }} </b-col>
    </b-row>

    <!-- Trading Volume -->
    <b-row align-h="center" class="mb-2">
      <b-col cols="6" class="text-left"> Trading Volume </b-col>
      <b-col cols="6" class="text-right"> {{ selectedToken.volume }} </b-col>
    </b-row>

    <!-- Max Supply -->
    <b-row align-h="center" class="mb-2">
      <b-col cols="6" class="text-left"> Max Supply </b-col>
      <b-col cols="6" class="text-right">
        {{ selectedToken.maxSupply }}
      </b-col>
    </b-row>

    <!-- Total Supply -->
    <b-row align-h="center" class="mb-2">
      <b-col cols="6" class="text-left"> Total Supply </b-col>
      <b-col cols="6" class="text-right">
        {{ selectedToken.totalSupply }}
      </b-col>
    </b-row>

    <b-row align-h="center" class="mb-2">
      <b-col cols="12" class="text-center">
        <NuxtLink
          :to="'/overview/' + selectedToken.symbol"
          v-if="selectedToken.symbol != defaultData.symbol"
        >
          <button class="viewProject-BTN">VISIT PROJECT</button>
        </NuxtLink>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchSymbol: '',
      selectedToken: {
        name: '',
        symbol: 'Select Token',
        price: '0',
        cap: '0',
        volume: '0',
        maxSupply: '0',
        totalSupply: '0',
        score: '0',
        src: '',
      },
      defaultData: {
        name: '',
        symbol: 'Select Token',
        price: '0',
        cap: '0',
        volume: '0',
        maxSupply: '0',
        totalSupply: '0',
        score: '0',
        src: '',
      },
    }
  },
  props: {
    tokens: Array,
  },

  methods: {
    async fetchData(symbol) {
      await this.$axios
        .$get(
          'https://arainaknhawa.herokuapp.com/getToCompare/' +
            symbol.toUpperCase()
        )
        .then((e) => {
          console.log(e)
          this.selectedToken.src = e.src
          this.selectedToken.symbol = e.symbol
          this.selectedToken.price = e.price.toLocaleString('en-UK', {
            style: 'currency',
            currency: 'USD',
          })
          this.selectedToken.cap = e.cap.toLocaleString('en-UK', {
            style: 'currency',
            currency: 'USD',
          })
          this.selectedToken.volume = e.volume.toLocaleString('en-UK', {
            style: 'currency',
            currency: 'USD',
          })
          this.selectedToken.maxSupply = e.maxSupply.toLocaleString()
          this.selectedToken.totalSupply = e.totalSupply.toLocaleString()
        })
        .catch((e) => {
          console.log(e)
        })
    },
    selectToken(event) {
      if (
        event == ''
        // event == '' ||
        // this.tokens.filter((get) => {
        //   if (get.symbol == event) {
        //     return get
        //   }
        // })[0] == undefined
      ) {
        this.selectedToken = Object.assign({}, this.defaultData)
      } else {
        // this.selectedToken = Object.assign(
        //   {},
        //   this.tokens.filter((get) => {
        //     if (get.symbol == event) {
        //       return get
        //     }
        //   })[0]
        // )
        this.fetchData(event)
      }
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
