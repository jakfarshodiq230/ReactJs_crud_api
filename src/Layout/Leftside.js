import React, { Component } from 'react'  
import { Link } from 'react-router-dom';  
export class Leftside extends Component {  
    render() {  
        return (    
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">  
                    <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">  
                        <div className="sidebar-brand-text mx-3">CRUD API </div>  
                    </Link>  
  
                    <hr className="sidebar-divider my-0" />  
  
                    <li className="nav-item active">  
                        <Link className="nav-link" to="/home">  
                            <i className="fas fa-fw fa-tachometer-alt"></i>  
                            <span>Dashboard</span></Link>  
                    </li>  
                    <hr className="sidebar-divider" />  
                    <div className="sidebar-heading">  
                        Interface  
                    </div>  
                    <li className="nav-item">  
                        <Link className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">  
                            <i className="fas fa-fw fa-cog"></i>  
                            <span>Transaksi</span>  
                        </Link>  
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">  
                            <div className="bg-white py-2 collapse-inner rounded">   
                                <Link className="collapse-item" to="/Pemasukan">Pemasukan</Link>  
                                <Link className="collapse-item" to="/Pengeluaran">Pengeluaran</Link>  
                            </div>  
                        </div>  
                    </li>  
                    <hr className="sidebar-divider" />  
                </ul>  
        )  
    }  
}  
  
export default Leftside  