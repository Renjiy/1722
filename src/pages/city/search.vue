<template>
  <div class="search-con">
    <input type="text" 
           class="search-con-text" 
           placeholder="请输入城市名或拼音"
           @input="handleInputChange">
    <div class="search-list" v-show="showList" ref="searchList">
      <ul>
        <li class="search-list-title border-bottom" 
            v-for="item of filterResult">
            {{item.name}}
        </li>
      </ul>
    </div><!--<div class="search-list">-->
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'search',
    props: {
      list: Array
    },
    data () {
      return {
        showList: false,
        filterResult: []
      }
    },
    computed: {
      result () {
        const result = []
        for (let i in this.list) {
          const listItem = this.list[i][1]
          for (let j in listItem) {
            result.push({
              name: listItem[j].cityarea,
              spell: listItem[j].itemName
            })
          }
        }
        return result
      }
    },
    watch: {
      filterResult () {
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      }
    },
    methods: {
      handleInputChange (e) {
        const value = e.target.value.toLowerCase()
        if (value) {
          this.showList = true
          this.filterResult = this.result.filter((item) => {
            if (item.spell.indexOf(value) > -1 || item.name.indexOf(value) > -1) {
              return true
            }
          })
        } else {
          this.showList = false
        }
      }
    },
    mounted () {
      this.scroll = new BScroll(this.$refs.searchList)
    }
  }
</script>

<style lang="stylus" scoped>
  .search-con
    padding: 0 .3rem
    height: .74rem
    background: #00bcd4
    box-sizing: border-box
    .search-con-text
      display: block
      line-height: .62rem
      margin-bottom: .1rem
      width: 100%
      background: #fff
      border: none
      border-radius: .1rem
      text-align: center
      font-size: .24rem
      color: #212121
    .search-list
      overflow: hidden
      position: absolute
      z-index: 1
      top: 1.62rem
      left: 0
      right: 0
      bottom: 0
      background: #f5f5f5
      .search-list-title
        padding-left: .2rem
        line-height: .8rem
        background: #f5f5f5
        color: #333
</style>