import axios from 'axios'
import React, { Component } from 'react'
import { Link } from "react-router-dom";
const api = 'http://localhost:8080';
export class TamabahData extends Component {
    constructor() {
        super();
        this.state = {
            id_transaksi: null,
            jumlah_pemasukan: '',
            rincian_pemasukan: '',
            struk: '',
        }
    }

    componentDidMount() {
        axios.get(api + '/c_resetapi_pemasukan').then(res => {
            this.setState({
                id_transaksi: res.data.nomor,
            });
            console.log(res)
        });
    }

    saveDataAPI(e) {
        const qs = require('querystring')
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        e.preventDefault()
        const api = 'http://localhost:8080/c_resetapi_pemasukan/create'
        const dataPemasukan = {
            //variabel api = variabel state
            //id_transaksi: this.state.id_transaksi,
            rincian_transaksi: this.state.rincian_pemasukan,
            jumlah_transaksi: this.state.jumlah_pemasukan,
            jenis_transaksi: "pemasukan",
            struk_transaksi: this.state.struk,
        }
        console.log(dataPemasukan)
        axios.post(api, qs.stringify(dataPemasukan), config)
            .then(res => console.log(res.data));
        window.location.pathname = '/Pemasukan'
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-6 col-md-2 mb-2">
                        <div className="card shadow mb-2">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary text-left" >Input Data Pemasukan</h6>
                            </div>
                            <div className="card-body">
                                {/* <pre>{JSON.stringify(this.state)}</pre> */}
                                <form method="post" onSubmit={(e) => this.saveDataAPI(e)}>
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label mr-1">ID Pemasukan</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="id_transaksi" name="id_transaksi" value={this.state.id_transaksi}
                                                onChange={(e) => { this.setState({ id_transaksi: e.target.value }) }} ></input>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label mr-1">Rincian Pemasukan</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="rincian_pemasukan" nama="rincian_pemasukan" placeholder="Rincian Pemasukan"
                                                onChange={(e) => { this.setState({ rincian_pemasukan: e.target.value }) }}></input>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label mr-1">Jumlah Pemasukan</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="jumlah_pemasukan" name="jumlah_pemasukan" placeholder="Jumlah Pemasukan"
                                                onChange={(e) => { this.setState({ jumlah_pemasukan: e.target.value }) }} ></input>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label mr-1">Struk</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="struk" name="struk" placeholder="Struk"
                                                onChange={(e) => { this.setState({ struk: e.target.value }) }} ></input>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary float-right ml-2">Simpan</button>
                                </form>
                                <Link to="/Pemasukan" className="btn btn-warning float-right ml-2">Kembali</Link>
                            </div>
                        </div>
                    </div>
                    {/* list akhir */}
                </div>
            </div>

        )

    }
}
export default TamabahData 