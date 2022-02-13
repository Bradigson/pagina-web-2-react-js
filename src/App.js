import './App.css';
import Header from './web2/Header.js';
import Banner1 from './web2/Baner1.js';
import Banner2 from './web2/Banner2.js';
import Banner3 from './web2/Banner3.js';
import Banner4 from './web2/Banner4.js';
import Footer from './web2/Footer.js';
import Clock from './web2/Clock';

function App() {
  return (
    <div className="App">
      <Clock/>
      <Header/>
      <Banner1/>
      <Banner2/>
      <Banner3/>
      <Banner4/>
      <Footer/>
    </div>
  );
}

export default App;
