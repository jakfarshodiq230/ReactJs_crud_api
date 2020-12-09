import axios from 'axios';
import React, { Component } from 'react'
import { Link } from "react-router-dom";

const api = 'http://localhost:8080';
export class EditData extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id_transaksi: '',
            jumlah: '',
            rincian_transaksi: '',
            struk: ' ',
        }
        this.changeRincianTransaksi = this.changeRincianTransaksi.bind(this);
        this.changeJumlahMasuk = this.changeJumlahMasuk.bind(this);
    }
    componentDidMount() {
        axios.get(api + '/c_resetapi_pemasukan/'+this.props.match.params.id).then(res => {
            this.setState({
                id_transaksi: res.data.id_transaksi,
                jumlah: res.data.jumlah,
                rincian_transaksi: res.data.rincian_transaksi,
                struk: res.data.struk
            });
        });
    }

    changeRincianTransaksi= (event) => {
        this.setState({rincian_transaksi: event.target.value});
    }
    changeJumlahMasuk= (event) => {
        this.setState({jumlah: event.target.value});
    }


    updateDataAPI(e) {
        const qs = require('querystring')
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        e.preventDefault()
        const api = 'http://localhost:8080/c_resetapi_pemasukan/'+this.state.id_transaksi
        const dataPemasukan = {
            rincian_transaksi: this.state.rincian_transaksi,
            jumlah_transaksi: this.state.jumlah,
            struk_transaksi: this.state.struk,
        }
        // console.log(dataPemasukan)
        axios.put(api, qs.stringify(dataPemasukan), config)
            .then(res => console.log(res.data));
            window.location.pathname = '/Pemasukan'
            //this.props.history.push('/user');
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
                                <form method="post" onSubmit={(e) => this.updateDataAPI(e)}>
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label mr-1">ID Pemasukan</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="id_transaksi" name="id_transaksi" value={this.state.id_transaksi}></input>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label mr-1">Rincian Pemasukan</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="rincian_pemasukan" nama="rincian_pemasukan" 
                                            value={this.state.rincian_transaksi}  onChange={this.changeRincianTransaksi}></input>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label mr-1">Jumlah Pemasukan</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="jumlah_pemasukan" name="jumlah_pemasukan"
                                            value={this.state.jumlah}  onChange={this.changeJumlahMasuk} ></input>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label mr-1">Struk</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="struk" name="struk" value={this.state.struk}
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
export default EditData 