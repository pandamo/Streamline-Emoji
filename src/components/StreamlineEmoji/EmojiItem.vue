<template>
    <img v-lazy="svgSrc" :class='["emojiItem",{"small":size==="small"},{"big":size==="big"}]'  @click='inputEmoji(svgSrc)'/>
</template>
<script>
export default {
  name: 'EmojiItem',
  props: ['size','svgSrc'],
  data() {
    return {
    }
  },
  methods:{
    inputEmoji(svgSrc){
      this.$emit('getEmojiFromitem',svgSrc)
    }
  }
}

</script>
<style>
.emojiItem{width: 1.125rem;
  height: 1.1rem;
  will-change: transform;
  transition: transform .3s;
  cursor: pointer;
  transform: scale(.9)
  }
  .typeBimg .emojiItem{transform: scale(1)}
.emojiItem.small{width: .6rem;height: .6rem;}
.emojiItem.big{width: 1rem;height: 1rem;}
.emojiItem:active{transform: scale(1);transition:  transform .3s}
</style>
