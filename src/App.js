import './App.css';
import React from 'react';
import RealTimeBarChart from './RealTimeBarChart';
import zerocarbendioxide from './images/zerocarbendioxide.jpg';
import zero from './images/zero.png'; 
function App() {
  return (
    
   
    
        
       
     

      
     <div className="App">
    <header className="App-header">
      <h1 className="pro">零碳工厂实时数据监控</h1>
      <p>通过本平台，您可以实时监控工厂的各个能耗数据</p>
      <button>开始监控</button>
     
    </header>
    <img src={zero} alt="First" style={{ width: '300px', height: 'auto' }} />
     {/* 在合适的位置插入实时柱状图 */}
     <div>
      <h2>实时能耗柱状图</h2>
      <h2 className="hj">放假啊高房价客户尽快发</h2>
      <RealTimeBarChart />
     

    
      <img src={zerocarbendioxide} alt="Second" style={{ width: '300px', height: 'auto' }} />
    </div>

    

  </div>
   
  );
}

export default App;

