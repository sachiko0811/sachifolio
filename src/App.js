// import logo from './logo.svg';
// import './App.css';
// import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Works from './pages/Works'
import Contact from './pages/Contact'
// import Footer  from './components/Footer'

function App() {
  return (
<Router>
    <Header />
    {/* <main 
    className="py-3"
    > */}
      {/* <Container> */}
        <Route path='/' component={Home} exact/>
        <Route path='/about' component={About} />
        <Route path='/skills' component={Skills} />
        <Route path='/works' component={Works} />
        <Route path='/contact' component={Contact} />
        {/* <Route path='/product/:id' component={ProductScreen} /> */}
      {/* </Container> */}
    {/* </main> */}
    {/* <Footer /> */}
    </Router>  );
}

export default App;
