<template>
  <div class="main">
    <indent-header class="indentheader"></indent-header>
    <indent-price class="indentprice"></indent-price>
    <indent-number class="indentnumber"></indent-number>
    <indent-brief class="indentbrief"></indent-brief>
    <indent-commit class="indentcommit"></indent-commit>
  </div>
</template>

<script>
import IndentHeader from './header'
import IndentPrice from './price'
import IndentNumber from './number'
import IndentBrief from './brief'
import IndentCommit from './commit'
export default {
  name: 'indent',
  components: {
    IndentHeader,
    IndentPrice,
    IndentNumber,
    IndentBrief,
    IndentCommit
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .main
    height:100%
    width:100%
    background:#f7f4f4
</style>
