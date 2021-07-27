import React from 'react'
import { Route, Switch } from 'react-router-dom'
import BmiCalculator from './components/BmiCalculator'
import Footer from './components/Footer'
import Graph from './components/Graph'
import Header from './components/Header'
import Home from './components/Home'

const App = () => {
  return (
    <div className="grid-container" >
      <header>
        <Header/>
      </header>
      <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/bmi" component={BmiCalculator} />
        <Route exact path="/graph" component={Graph} />
      </Switch>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default App
