import logo from './logo.svg';
import './App.css';
import CardRCC from './components/CardRCC/CardRCC';
import CardRFC from './components/CardRFC/CardRFC';
import HomeComponent from './components/BTComponent/HomeComponent/HomeComponent';

//App là component chính của ứng dụng
//chứa các thành phần component con
function App() {
  return (
    //chỉ được có 1 thẻ bao bên ngoài
    //thẻ jsx
    <div className="App">
        <HomeComponent/>
        




       {/* component */}
        {/* <CardRCC></CardRCC>
        <CardRCC/>
        <CardRFC/> */}
    </div>
  );
}

export default App;
