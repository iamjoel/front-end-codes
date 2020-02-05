import doc from './README.md'
import './style.css'

export default { 
  title: 'CSS/综合Demo/01 文章详情页',
  parameters: {
    componentSubtitle: '',
    notes: doc,
    previewTabs: {
      
    }
  }
}

export const Main = () => `
<div class="container">
  <div class="article">
    <div class="article__main">
      <h1 class="article__title">JavaScript机器学习之线性回归</h1>
      <p>译者按: AI时代，不会机器学习的JavaScript开发者不是好的前端工程师。</p>
      <p>
        原文: <a href="https://hackernoon.com/machine-learning-with-javascript-part-1-9b97f3ed4fe5">Machine Learning with JavaScript : Part 1</a>
      </p>
      <p>译者: Fundebug</p>
      <p><strong>为了保证可读性，本文采用意译而非直译。另外，本文版权归原作者所有，翻译仅用于学习。</strong></p>
      <p>使用JavaScript做机器学习？不是应该用Python吗？是不是我疯了才用JavaScript做如此繁重的计算？难道我不用Python和R是为了装逼？<a href="http://scikit-learn.org/stable/">scikit-learn</a>(Python机器学习库)不能使用Python吧？</p>
      <p>嗯，我并没有开玩笑…</p>
      <p>其实呢，类似于Python的scikit-learn，JavaScript开发者也开发了一些机器学习库，我打算用一下它们。</p>
      <h2>JavaScript不能用于机器学习？</h2>
      <ol>
        <li>太慢（幻觉？）</li>
        <li>矩阵操作太难（有函数库啊，比如math.js）</li>
        <li>JavaScript只能用于前端开发（Node.js开发者笑了）</li>
      </ol>
    </div>
  </div>
</div>
`

Main.story = {
  name: 'Demo'
}
