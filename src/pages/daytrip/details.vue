<template>
  <div class="details">
    <ul class="details-ul" v-for="(page, index) of pageList" :key="index">
      <li class="details-li"  v-for="item of page" :key="item.id">
        <div>
          <img class="details-img" :src="item.imgUrl">
        </div>
        <div class="details-info">
          {{item.title}}
          {{item.price}}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'day-trip-details',
  props: {
    list: Array
  },
  computed: {
    pageList () {
      const pages = []
      this.list.forEach((value, index) => {
        const page = Math.floor(index / 10)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(value)
        console.log(page + 1)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .details
    overflow: hidden
    height: 20rem
    .details-ul
      margin-bottom: .2rem
      .details-li
        display: flex
        padding: .2rem
        .details-img
          width: 1.6rem
          height: 1.6rem
          margin-right: .2rem
        .details-info
          border-bottom: .02rem solid #ccc
</style>