import React from 'react'
import AddTodo from './AddTodo'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar bg-body-tertiary mb-5">
  <div className="container-fluid">
    <a className="navbar-brand" href='#'>Todo App</a>
    <div className="d-flex" role="search">

      <AddTodo />
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar