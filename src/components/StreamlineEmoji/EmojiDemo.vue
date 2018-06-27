<template>
  <div class='warpBox'>
    <div id="showEmoji">
      <EmojiItem :svgSrc='em' size="big" v-for='(em,index) in showEmojiSrc' :key='index'/>
      <em id="last"></em>
    </div>
    <small>single background image</small>
    <EmojiList @showEmoji="sEmoji" style='margin-bottom:.5rem' />
    <small>multi svgs</small>
    <EmojiList type='svg' @showEmoji="sEmoji" />
  </div>
</template>
<script>
import EmojiItem from './EmojiItem'
import EmojiList from './EmojiList'
export default {
  name: 'EmojiDemo',
  data() {
    return {
      showEmojiSrc: []
    }
  },
  methods: {
    sEmoji(src) {
      this.showEmojiSrc.push(src)
    }
  },
  components: { EmojiItem, EmojiList },
  watch: {
    showEmojiSrc(newVal, oldVal) {
      setTimeout(() => {
        document.getElementById("last").scrollIntoView()
      }, 200)

    }
  }
}

</script>
<style>
small {
  font-size: .3rem
}

.warpBox {
  width: 9rem;
  margin: 5vh auto;
  display: flex;
  flex-direction: column;
  height: 90vh;
}

#showEmoji {
  border-radius: 5px;
  background-color: #fff;
  width: 100%;
  overflow-y: auto;
  margin-bottom: 20px;
  padding: 20px;
  -webkit-overflow-scrolling: touch;
  flex: 1;
  -webkit-overflow-scrolling: touch;
}

#showEmoji .emojiItem {
  transform: scale(1);
  width: 1.5rem;
  height: 1.5rem;
}

</style>
