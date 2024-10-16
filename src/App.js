import './App.css';
import React from 'react';
import RealTimeBarChart from './RealTimeBarChart';
import zerocarbendioxide from './images/zerocarbendioxide.jpg';
import zero from './images/zero.png'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        {/* 可以在此处添加 logo 或导航栏 */}
        <header class="header-container">
  <div class="left-section">
    <h2 >团队简介</h2>
    <p style={{ color: 'blue', fontSize: '18px' }}>
      这里是团队的详细介绍...</p>
  </div>
  <div class="center-logo">
  <img src={zero} alt="First" style={{ width: '300px', height: 'auto' }} />
  </div>
  <div class="right-section">
    <h2>我们的愿景</h2>
    <p style={{ color: 'blue', fontSize: '18px' }}>这里是公司愿景的详细介绍...</p>
  </div>
  <div class="bottom-section">
    <h2>项目介绍</h2>
    <p style={{ color: 'blue', fontSize: '18px' }}>这里是项目介绍的详细内容...</p>
  </div>
</header>

      </header>

      <div className="content">
        <h1 className="pro">零碳工厂实时数据监控</h1>
        <p>通过本平台，您可以实时监控工厂的各个能耗数据</p>
        <button>开始监控</button>
        

        {/* 实时能耗柱状图 */}
        <div>
          <h2>实时能耗柱状图</h2>
          <RealTimeBarChart />
        </div>

        <img src={zerocarbendioxide} alt="Second" style={{ width: '300px', height: 'auto' }} />
      </div>
    </div>
  );
}

export default App;
