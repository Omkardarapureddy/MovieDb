// components/Navbar.js

import {Link} from 'react-router-dom'

const Navbar = () => (
  <nav>
    <h1>movieDB</h1>
    <Link to="/">Popular</Link>
    <Link to="/top-rated">Top Rated</Link>
    <Link to="/upcoming">Upcoming</Link>
    <input type="text" placeholder="Search..." />
    <button type="button">Search</button>
  </nav>
)

export default Navbar
