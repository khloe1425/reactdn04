import React, { Component } from 'react'

export default class KetQua extends Component {
  render() {
    return (
      <div className="result text-center py-5">
        <p>BẠN CHỌN: <span className='text-danger'>TÀI</span> </p>
        <p>Số bàn thắng: <span className='text-success'>0</span> </p>
        <p>Tổng số bàn chơi: <span className='text-info'>0</span> </p>
        <button className='btn btn-success'>PLAY</button>
      </div>
    )
  }
}
