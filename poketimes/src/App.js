import React from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'


class App extends Component {
  render () {
    return (
      <BrowserRouter>
    <div className="App">
      <Navbar />
      <Rout exact path='/' component={Home} />
      <Rout path='/about' component={About} />
      <Rout path='/contact' component={Contact} />
    </div>
    </BrowserRouter>
  );
}
}
export default App;
