import React, { Component } from 'react'  
import { Link } from 'react-router-dom' 
export class Header extends Component {  
    render() {  
        return (  
            <div>  
                <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">  
    
<ul className="navbar-nav ml-auto">  
  
  
  <li className="nav-item dropdown no-arrow d-sm-none">  
    <Link  className="nav-link dropdown-toggle" to="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">  
      <i className="fas fa-search fa-fw"></i>  
    </Link >  
   
    <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">  
      <form className="form-inline mr-auto w-100 navbar-search">  
        <div className="input-group">  
          <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>  
          <div className="input-group-append">  
            <button className="btn btn-primary" type="button">  
              <i className="fas fa-search fa-sm"></i>  
            </button>  
          </div>  
        </div>  
      </form>  
    </div>  
  </li>  
  <div className="topbar-divider d-none d-sm-block"></div>  
  
  
  <li className="nav-item dropdown no-arrow">  
    <Link  className="nav-link dropdown-toggle" to="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">  
      <span className="mr-2 d-none d-lg-inline text-gray-600 small">Admin</span>  
      <img className="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60"/>  
    </Link >  
  
    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">  
      <Link  className="dropdown-item" to="#">  
        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>  
        Profile  
      </Link >  
      <Link  className="dropdown-item" to="#">  
        <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>  
        Settings  
      </Link >  
      <Link  className="dropdown-item" to="#">  
        <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>  
        Activity Log  
      </Link >  
      <div className="dropdown-divider"></div>  
      <Link  className="dropdown-item" to="#" data-toggle="modal" data-target="#logoutModal">  
        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>  
        Logout  
      </Link >  
    </div>  
  </li>  
  
</ul>  
  
</nav>  
            </div>  
        )  
    }  
}  
  
export default Header  