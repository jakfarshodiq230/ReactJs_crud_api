import React, { Component } from 'react';
import Leftside from './Leftside';
import Header from './Header'
import Footer from './Footer'
import Home from '../Dasbort/home'
import Pemasukan from '../Pemasukan/DataPemasukan'
import tambah from '../Pemasukan/TambahData'
import edit from '../Pemasukan/EditData'

// utuk pengeluaran
import Pengeluaran from '../Pengeluaran/DataPengeluaran'
import Pengeluaran_tambah from '../Pengeluaran/TambahData'
import Pengeluaran_edit from '../Pengeluaran/EditData'
import Pengeluaran_show from '../Pengeluaran/LihatData'
import {
    BrowserRouter, Route
} from 'react-router-dom';
export class Layout extends Component {
    // loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>  
    render() {
        return (
            <BrowserRouter>
                <div>
                    <div id="wrapper">
                        <Leftside></Leftside>
                        <div id="content-wrapper" class="d-flex flex-column">
                            <div id="content">
                                <Header > </Header>
                                <Route exact path="/" component={Home} />
                                <Route path="/home" component={Home} />
                                {/* Pemasukan */}
                                <Route path="/Pemasukan" component={Pemasukan} />
                                <Route path="/tambah_data" component={tambah} />
                                <Route path="/edit_data/:id" component={edit} />
                                <Route path="/lihat_data/:id" component={edit} />
                                {/* Pengeluaran */}
                                <Route path="/Pengeluaran" component={Pengeluaran} />
                                <Route path="/Pengeluaran_tambah" component={Pengeluaran_tambah} />
                                <Route path="/Pengeluaran_edit/:id" component={Pengeluaran_edit} />
                                <Route path="/Pengeluaran_show/:id" component={Pengeluaran_show} />
                            </div>
                            <Footer />
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default Layout 