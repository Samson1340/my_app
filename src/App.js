import logo from './logo.svg';
import './App.css';
import { Nav }  from './component/Header/Header';
import { Body } from './component/Body/Body';
import { Footer } from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav name='Samson'/>
      <Body />
      <Footer />
    </div>
  );
}

export default App;
