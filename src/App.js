// App.js

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import UpcomingMovies from './Components/UpcomingMovies'
import TopRated from './Components/TopRated'

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/top-rated" component={TopRated} />
      <Route path="/upcoming" component={UpcomingMovies} />
    </Switch>
  </Router>
)

export default App
