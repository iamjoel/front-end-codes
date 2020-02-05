import doc from './README.md'
import './style.css'

export default { 
  title: 'CSS/规则/背景(Backgound)',
  parameters: {
    componentSubtitle: '',
    notes: doc,
    previewTabs: {
      
    }
  }
}

export const Main = () => `
<div class="bg-page">
  <div class="container">
    <div class="demo">
      <h2>背景是否侵入边框所在的范围</h2>
      <div class="block bg-under-border">默认侵入</div>
      <div class="block bg-not-under-border">不侵入</div>
    </div>
    <div class="demo">
      <h2>条纹背景</h2>
      <div class="hor-stripe-bg stripe-block"></div>
      <div class="hor-multi-stripe-bg stripe-block"></div>
      <div class="ver-stripe-bg stripe-block"></div>
      <div class="slash-stripe-bg stripe-block"></div>
      <div class="slash60-stripe-bg stripe-block"></div>
      <!-- 伪随机背景条纹 -->
      <div class="fake-random-bg"></div>
    </div>

    <div class="demo">
      <h2></h2>
      <div class="bg-origin bg-origin--normal"></div>
    </div>
  </div>
</div>
`

Main.story = {
  name: '基础用法'
}