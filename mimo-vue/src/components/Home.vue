<template>
  <div class="main_body">
    <mt-tab-container v-model="active">
      <mt-tab-container-item id="Find">
        <headerse></headerse>
        <slides></slides>
      </mt-tab-container-item>
      <mt-tab-container-item id="Collection">
        <!-- 收藏 -->
        <collection></collection>
      </mt-tab-container-item>
      <mt-tab-container-item id="Message">
        <!-- 消息 -->
        <message></message>
      </mt-tab-container-item>
      <mt-tab-container-item id="Mine">
        <me></me>
      </mt-tab-container-item>
    </mt-tab-container>
    <!-- 底部导航条 -->
    <mt-tabbar v-model="active" fixed>
      <mt-tab-item id="Find" @click.native="change(0)">
        <tabbaricon
          :selected="require('../assets/ic_balloon_selected.png')"
          :normal="require('../assets/ic_balloon_normal.png')"
          :focused="currentIndex[0].isSelect"
        ></tabbaricon>发现内容
      </mt-tab-item>
      <mt-tab-item id="Collection" @click.native="change(1)">
        <tabbaricon
          :selected="require('../assets/ic_heart_selected.png')"
          :normal="require('../assets/ic_heart_normal.png')"
          :focused="currentIndex[1].isSelect"
        ></tabbaricon>收藏
      </mt-tab-item>
      <mt-tab-item id="Message" @click.native="change(2)">
        <tabbaricon
          :selected="require('../assets/ic_message_selected.png')"
          :normal="require('../assets/ic_message_normal.png')"
          :focused="currentIndex[2].isSelect"
        ></tabbaricon>消息
      </mt-tab-item>
      <mt-tab-item id="Mine" @click.native="change(3)">
        <tabbaricon
          :selected="require('../assets/ic_smile_selected.png')"
          :normal="require('../assets/ic_smile_normal.png')"
          :focused="currentIndex[3].isSelect"
        ></tabbaricon>我
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
import Tabbaricon from "./Tabbaricon.vue";
import Me from "./Me/Me";
import HeaderSe from "./Index/HeaderSe";
import Slides from "./Index/Slides";
import Collection from "./Collection/Collection";
import Message from "./Message/Message";
export default {
  components: {
    tabbaricon: Tabbaricon,
    me: Me,
    headerse: HeaderSe,
    slides: Slides,
    collection:Collection ,
    message:Message,
  },
  data() {
    return {
      active: this.$store.getters.getCollection ||this.$store.getters.getBack ||"Find",
      currentIndex: [
        { isSelect: true },
        { isSelect: false },
        { isSelect: false },
        { isSelect: false }
      ]
    };
  },
  methods: {
    change(idx) {
      for (var i = 0; i < this.currentIndex.length; i++) {
        var ui = idx;
        if (ui == i) {
          this.currentIndex[i].isSelect = true;
        } else {
          this.currentIndex[i].isSelect = false;
        }
      }
    },
    load(){
      this.$store.commit("recoverBack")
    }
  },
  created() {
    if(this.$store.getters.getBack){
      this.change(3);
    }
    if(this.$store.getters.getCollection){
      this.change(1);
    }
    this.load();
  }
};
</script>
<style scoped>
.mint-tabbar{
  max-width: 14rem;
  margin:0 auto;
}
/* 底部导航条组件默认样式  */
.main_body .mint-tabbar > .mint-tab-item {
  color: #999;
}
/* 修改组件选择的样式 */
.main_body .mint-tabbar > .mint-tab-item.is-selected {
  background-color: transparent;
  color: #e64966;
}
.main_body .mint-tab-container {
  overflow: visible !important;
}
</style>