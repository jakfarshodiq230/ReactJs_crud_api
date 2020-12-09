import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
//import logo from '../images/7.jpeg';
const api = 'http://localhost:8080';

export class DataPemasukan extends Component {

    //mengeset paramater show
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            response: '',
            display: 'none'
        };
    }
    //membuat show data
    componentDidMount() {
        axios.get(api + '/c_resetapi_pemasukan').then(res => {
            this.setState({
                items: res.data.person
            })
        })
    }
    //hapus data
    deleteDep(depid) {
        if (window.confirm('Apakah Anda Yakin Hapus Data ' + depid)) {
            axios.delete(api + '/c_resetapi_pemasukan/' + depid)
            window.location.pathname = '/Pemasukan'
        }
    }

    //edit data
    EditDep(id) {
        if (window.confirm('Apakah Anda Ingin Mengedit Data ' + id)) {
            this.props.history.push('/edit_data/'+id);
        }
    }

    //edit data
    LihatDep(id) {
            this.props.history.push('/lihat_data/'+id);
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Data Pemasukan</h1>
                    <Link to="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50"></i> Generate Report</Link>
                </div>
                <div className="row">
                    <div className="col-xl-12 col-md-2 mb-2">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary text-left" >List Data Pemasukan</h6>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                        <Link to="/tambah_data" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-pencil fa-sm text-white-50"></i>Tambah Data</Link>
                                    </div>
                                    <table className="table table-bordered" width="100%" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Rincian Transaksi</th>
                                                <th>Jumlah</th>
                                                <th>Aksi</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>No</th>
                                                <th>Rincian Transaksi</th>
                                                <th>Jumlah</th>
                                                <th>Aksi</th>
                                            </tr>
                                        </tfoot>
                                        <tbody>
                                            {
                                                this.state.items.map(pemasukan =>
                                                    <tr >
                                                        <td>{pemasukan.id_transaksi}</td>
                                                        <td>{pemasukan.rincian_transaksi}</td>
                                                        <td>{pemasukan.jumlah}</td>
                                                        {/* <td><img src={logo} width={30} /></td> */}
                                                        <td>
                                                        <button onClick={() => this.LihatDep(pemasukan.id_transaksi)} className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm mr-2">Lihat</button>
                                                            <button onClick={() => this.EditDep(pemasukan.id_transaksi)} className="d-none d-sm-inline-block btn btn-sm btn-warning shadow-sm mr-2">Edit</button>
                                                            <button onClick={() => this.deleteDep(pemasukan.id_transaksi)} className="d-none d-sm-inline-block btn btn-sm btn-danger shadow-sm">HAPUS</button>
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* list akhir */}
                </div>
            </div >

        )

    }
}
export default DataPemasukan 