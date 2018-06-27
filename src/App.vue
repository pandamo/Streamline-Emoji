<template>
  <div id="app">    
    <EmojiDemo/>
  </div>
</template>

<script>
import EmojiDemo from './components/StreamlineEmoji/EmojiDemo'

export default {
  name: 'App',
  components: {
    EmojiDemo
  },
  mounted(){    
  }
}
</script>
<style>
*{ -webkit-tap-highlight-color: rgba(0, 0, 0, 0); -webkit-box-sizing: border-box; box-sizing: border-box; }
:focus {outline: 0;}
  html,body{padding: 0;margin: 0; height: 100%; overflow: hidden; }
   body{background-image: linear-gradient(180deg, #FFF6B7 0%, #F6416C 100%)} 
</style>

