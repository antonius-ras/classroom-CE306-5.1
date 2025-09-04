import React from 'react';
import Greeting from './componants/Greeting';
import WelcomeBanner from './componants/WelcomeBanner';

function App(){
  return(
    <div>
      <Greeting name="ผู้ใช้งาน typeScript" messageCount={5} />
      <Greeting name="นักพัฒนา Vite" />

      <WelcomeBanner title="ยินดีต้อนรับสู่โลกของ typeScript!">
        <p>เนื้อหานี้ส่งผ่าน children props</p>
      </WelcomeBanner>
    </div>
  );
}

export default App;

