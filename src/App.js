import logo from './logo.svg';
import './App.css';
import CardRCC from './components/CardRCC/CardRCC';
import CardRFC from './components/CardRFC/CardRFC';
import HomeComponent from './components/BTComponent/HomeComponent/HomeComponent';
import DataBinding from './components/DataBinding/DataBinding';
import HandleEvent from './components/HandleEvent/HandleEvent';
import DemoState from './DemoState/DemoState';
import TangGiamFont from './DemoState/TangGiamFont';
import DemoStyling from './DemoState/DemoStyling';
import DoiMauXe from './DemoState/DoiMauXe/DoiMauXe';
import DemoArray from './DemoArray/DemoArray';
import DemoProps from './DemoProps/DemoProps';
import ShoesShop from './DemoProps/ShoesShop/ShoesShop';
import BTXemChiTiet from './BTXemChiTiet/BTXemChiTiet';

//App là component chính của ứng dụng
//chứa các thành phần component con
function App() {
  return (
    //chỉ được có 1 thẻ bao bên ngoài
    //thẻ jsx
    <div className="App">

    <BTXemChiTiet/>

      {/* <ShoesShop/> */}

      {/* <DemoProps/> */}

      {/* <DemoArray/> */}
      {/* <DoiMauXe/> */}
      
      {/* <p className='demoCSS'>demoCSS ở App</p> */}
      {/* <DemoStyling /> */}
      {/* <TangGiamFont/> */}

      {/* <DemoState/> */}
      {/* <HandleEvent/> */}

      {/* <DataBinding/> */}

      {/* <HomeComponent/> */}
      {/* component */}
      {/* <CardRCC></CardRCC>
        <CardRCC/>
        <CardRFC/> */}
    </div>
  );
}

export default App;
