<template>
  <div class='emojiListBox'>
    <div class="emojiList" v-if='type=="svg"'>
      <EmojiItem :svgSrc='svg' v-for='(svg,index) in svgNames' :key='index' @getEmojiFromitem="getEmoji" />
    </div>
    <div class="emojiList typeBimg" v-else>
      <div class="emojiItem" v-for='(svg,index) in svgNames' :key='index' @click='getEmoji(svg)'></div>
    </div>
  </div>
</template>
<script>
const svgNames = require('./svgName').svgNames
import EmojiItem from './EmojiItem'
export default {
  name: 'EmojiList',
  props: ['type'],
  data() {
    return {
      svgNames: svgNames.map(v => './static/SVG.min/' + v),
    }
  },
  components: { EmojiItem },
  methods: {
    getEmoji(src) {
      this.$emit('showEmoji', src)
    }
  },
  created() {

  }
}

</script>
<style>
.emojiListBox {
  height: 160px;
  overflow-y: auto;
  width: 9rem;
  background-color: #fff;
  border-radius: 5px;
  -webkit-overflow-scrolling: touch;

  /*  display: flex;flex-wrap: wrap; */
  flex: 0 0 160px;
}



.emojiItem {
  width: 1.125rem;
  height: 1.1rem;
  will-change: transform;
  transition: transform .3s;
  cursor: pointer;
  border-radius: 3px
}

.emojiItem:active {
  background-color: rgba(0, 0, 0, .2)
}

.emojiList {

  display: flex;
  flex-wrap: wrap;
}

.typeBimg {
  background: url('../../../static/SVG.min/preview.png') top center no-repeat;
  background-size: 100% auto;
}

</style>
