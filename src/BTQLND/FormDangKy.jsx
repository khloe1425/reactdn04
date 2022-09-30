import React, { Component } from 'react'
import { connect } from 'react-redux'

//C1: lưu giá trị từ form ở state của component 
//C2: lưu giá trị từ form ở redux

class FormDangKy extends Component {

  //chứa giá trị từ form, chứa nội dung error
  state = {
    values: {
      taiKhoan: "",
      hoTen: "",
      matKhau: "",
      sdt: "",
      email: "",
      maLoaiND: "khachHang"
    },
    errors: {
      taiKhoan: "",
      hoTen: "",
      matKhau: "",
      sdt: "",
      email: "",
      maLoaiND: ""
    }
  }

  //  valueForm = {};

  inputChange = (event) => {
    // console.log(event.target)
    // console.log(event.target.value,event.target.name);

    let { value, name } = event.target;
    //object literal
    //tổ chức lưu dữ liệu với state
    let newValues = { ...this.state.values, [name]: value }
    console.log(newValues);

    let newErrors = { ...this.state.errors }
    let errorMsg = "";
    if (value.trim() == "") {
      //lỗi
      errorMsg = name + " không để trống !";
    }
    //obj.tenthuoctinh, obj[tenthuoctinh]
    newErrors[name] = errorMsg

    this.setState({
      values: newValues,
      errors: newErrors
    })

  }


  render() {
    return (
      <div className='py-5'>
        <form>
          <div className="row">
            <div className="col-6 mb-5">
              <input onChange={(event) => {
                this.inputChange(event)

              }} type="text" name='taiKhoan' className="form-control" placeholder="Tài Khoản" />
              <p className='text-danger'>{this.state.errors.taiKhoan}</p>
            </div>
            <div className="col-6 mb-5">
              <input onChange={(event) => {
                this.inputChange(event)
              }} type="text" name='hoTen' className="form-control" placeholder="Họ Tên" />

<p className='text-danger'>{this.state.errors.hoTen}</p>
            </div>
            <div className="col-6 mb-5">
              <input onChange={(event) => {
                this.inputChange(event)
              }} type="password" name='matKhau' className="form-control" placeholder="Mật Khẩu" />
               <p className='text-danger'>{this.state.errors.matKhau}</p>
            </div>
            <div className="col-6 mb-5">
              <input onChange={(event) => {
                this.inputChange(event)
              }} type="text" name='sdt' className="form-control" placeholder="Số điện thoại" />
               <p className='text-danger'>{this.state.errors.sdt}</p>
            </div>
            <div className="col-6 mb-5">
              <input onChange={(event) => {
                this.inputChange(event)
              }} type="text" name='email' className="form-control" placeholder="Email" />
               <p className='text-danger'>{this.state.errors.email}</p>
            </div>
            <div className="col-6 mb-5">
              <select onChange={(event) => {
                this.inputChange(event)
              }} className="form-control" name="maLoaiND">
                <option value="khachHang">Khách hàng</option>
                <option value="quanTri">Quản trị</option>
              </select>
              <p className='text-danger'>{this.state.errors.maLoaiND}</p>
            </div>
            <div className="col-12 text-center">

              <button className='btn btn-success'>Đăng ký</button>
              <button className='btn btn-info'>Cập Nhật</button>

            </div>
          </div>
        </form>

      </div>
    )
  }
}

export default connect()(FormDangKy)
