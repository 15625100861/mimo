<template>
  <div class="Message">
    <div class="top">
      <div class="title">消息</div>
      <img src="http://127.0.0.1:5050/images/message/jingzi.png" class="jingzi" />
    </div>
    <div class="MessageList">
      <img src="http://127.0.0.1:5050/images/message/ic_zus.png" class="image" />
      <div class="MessageRight">
        <div>系统消息</div>
        <div class="mg-t">暂无系统消息</div>
      </div>
    </div>
    <div class="MessageList">
      <img src="http://127.0.0.1:5050/images/message/ic_huodong.png" class="image" />
      <div class="MessageRight">
        <div class="active">
          优惠活动
          <span>2019-8-31</span>
        </div>
        <div class="mg-t">新店开业 .0元免费试睡,房券4折/晚</div>
      </div>
    </div>
    <div class="MessageList">
      <img src="http://127.0.0.1:5050/images/message/ic_youhui.png" class="image" />
      <div class="MessageRight">
        <div class="active">
          mimo订房助手
          <span>2019-8-30</span>
        </div>
        <div class="mg-t">为您推荐位于广州的优秀房源,下单即可...</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.Message div.top {
  height: 1.3rem;
  display: flex;
  border-bottom: 0.01rem solid rgba(158, 154, 154, 0.8);
  line-height: 1.8rem;
  font-size: 0.4rem;
}
.Message div.title {
  line-height: 1.3rem;
  margin: auto;
  margin-left: 4.5rem;
}
.jingzi {
  width: .8rem;
  height: .8rem;
  position: relative;
  top: 0.18rem;
  right: 0.1rem;
}
.MessageList {
  display: flex;
  border-bottom: 0.01rem solid rgba(158, 154, 154, 0.8);
  padding: 0.4rem;
}
.MessageList .image {
  margin-right: 0.5rem;
  width: 1.3rem;
  height: 1.3rem;
}
.active span {
  position: absolute;
  right: 0.2rem;
  color: #999;
}
.mg-t {
  margin-top: 0.2rem;
}
</style>