import axios from 'axios';
import React, { Component } from 'react'
import { Link } from "react-router-dom";

const api = 'http://localhost:8080';
export class LihatData extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id_transaksi: '',
            jumlah: '',
            rincian_transaksi: '',
            harga:'',
            total:'',
            struk: ' ',
        }
    }
    componentDidMount() {
        axios.get(api + '/c_resetapi_pengeluaran/'+this.props.match.params.id).then(res => {
            this.setState({
                id_transaksi: res.data.id_transaksi,
                jumlah: res.data.jumlah,
                rincian_transaksi: res.data.rincian_transaksi,
                harga: res.data.harga,
                total: res.data.total,
                struk: res.data.struk
            });
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-6 col-md-2 mb-2">
                        <div className="card shadow mb-2">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary text-left" >Lihat Data Pengeluaran</h6>
                            </div>
                            <div className="card-body">
                                {/* <pre>{JSON.stringify(this.state)}</pre> */}
                                <form method="post" onSubmit={(e) => this.updateDataAPI(e)}>
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label mr-1">ID Pengeluaran</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="id_transaksi" name="id_transaksi" value={this.state.id_transaksi} readOnly = {true} ></input>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label mr-1">Rincian Pengeluaran</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="rincian_pemasukan" nama="rincian_pemasukan" 
                                            value={this.state.rincian_transaksi} readOnly = {true} ></input>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label mr-1">Jumlah Pengeluaran</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="jumlah_pemasukan" name="jumlah_pemasukan"
                                            value={this.state.jumlah} readOnly = {true} ></input>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label mr-1">Harga</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="harga" name="harga"
                                            value={this.state.harga} readOnly = {true} ></input>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label mr-1">Total</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="total" name="total"
                                            value={this.state.total} readOnly = {true} ></input>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label mr-1">Struk</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="struk" name="struk" value={this.state.struk} readOnly = {true}
                                            ></input>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary float-right ml-2">Simpan</button>
                                </form>
                                <Link to="/Pengeluaran" className="btn btn-warning float-right ml-2">Kembali</Link>
                            </div>
                        </div>
                    </div>
                    {/* list akhir */}
                </div>
            </div>

        )

    }
}
export default LihatData 