import doc from './README.md'
import './style.css'

export default { 
  title: 'CSS/Demo/02 新闻列表',
  parameters: {
    componentSubtitle: '',
    notes: doc,
    previewTabs: {
      
    }
  }
}

export const Main = () => `
<div class="container">
  <!-- 类型导航 -->
  <ul class="navs">
    <li class="navs__item navs__item--current"><a href="javascript:void(0);">全部</a></li>
    <li class="navs__item"><a href="javascript:void(0);">互联网</a></li>
    <li class="navs__item"><a href="javascript:void(0);">软件</a></li>
    <li class="navs__item"><a href="javascript:void(0);">智能家居</a></li>
  </ul>
  <!-- 列表 -->
  <ul class="news-list">
    <li class="news-list__item">
      <a href="###">
        <!-- 图片 -->
        <img src="http://via.placeholder.com/196x124?text=News Pic" alt="新闻图片" class="news-list__img">
        <!-- 描述 -->
        <div class="news-list__summary">
          <h2 class="news-list__title">马云被问：你用微信发红包吗？他的回答让主持人哭笑不得！</h2>
          <div class="news-list__detail">
            <img src="http://via.placeholder.com/24/#ddd" class="news-list__detail-img" alt="作者图">
            <span class="news-list__detail-item">新媒体视野</span>
            <span class="news-list__detail-item">评论</span>
            <span class="news-list__detail-item">刚刚</span>
          </div>
        </div>
      </a>
    </li>
    <li class="news-list__item">
      <a href="###">
        <!-- 图片 -->
        <img src="http://via.placeholder.com/196x124?text=News Pic" alt="新闻图片" class="news-list__img">
        <!-- 描述 -->
        <div class="news-list__summary">
          <h2 class="news-list__title">博弈、抢夺、做市、闷声发财，黄金时代下 FA 的真实故事</h2>
          <div class="news-list__detail">
            <img src="http://via.placeholder.com/24/#ddd" class="news-list__detail-img" alt="作者图">
            <span class="news-list__detail-item">42章经</span>
            <span class="news-list__detail-item">1评论</span>
            <span class="news-list__detail-item">7分钟</span>
          </div>
        </div>
      </a>
    </li>
    <li class="news-list__item">
      <a href="###">
        <!-- 图片 -->
        <img src="http://via.placeholder.com/196x124?text=News Pic" alt="新闻图片" class="news-list__img">
        <!-- 描述 -->
        <div class="news-list__summary">
          <h2 class="news-list__title">百度AI大会全程无尿点干货：人工智能和阿波罗计划全公开</h2>
          <div class="news-list__detail">
            <img src="http://via.placeholder.com/24/#ddd" class="news-list__detail-img" alt="作者图">
            <span class="news-list__detail-item">智东西</span>
            <span class="news-list__detail-item">158评论</span>
            <span class="news-list__detail-item">17分钟</span>
          </div>
        </div>
      </a>
    </li>
  </ul>
</div>
`

Main.story = {
  name: 'Demo'
}
