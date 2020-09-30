<!--
 * @Description:
 * @Version: 0.1
 * @Autor: 黄鹏举
 * @Date: 2020-09-26 23:23:54
 * @LastEditors: Seven
 * @LastEditTime: 2020-10-01 01:24:06
-->
<template>
<div class="aplayer" ref="aplayer">
</div>
</template>
<script>
import 'aplayer/dist/APlayer.min.css';
import APlayer from 'aplayer';
export default {
  name: 'myvueaplayer',
  props: {
    options: {
      type: Object
    }
  },
  data () {
    return {
      ap: null
    }
  },
  mounted () {
      this.options.container = this.$refs.aplayer
    this.ap = new APlayer(this.options)
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
