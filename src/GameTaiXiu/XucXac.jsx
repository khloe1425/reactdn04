import React, { Component } from 'react'

import { connect } from 'react-redux'


class XucXac extends Component {
  render() {
    console.log(this.props)
    let {mangXucXac} = this.props.game
    return (
      <div className="row w-50 mx-auto py-5">
        <div className="col-2">
          <button className='btn btn-danger'>TÀI</button>
        </div>
        <div className="col-8 text-center">
              <img style={{width:"50px"}} src={mangXucXac[0].hinh} alt="" />
              <img style={{width:"50px"}} src={mangXucXac[1].hinh} alt="" />
              <img style={{width:"50px"}} src={mangXucXac[2].hinh} alt="" />
        </div>
        <div className="col-2">
          <button className='btn btn-danger'>XỈU</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (rootReducer) => {
  return{
    game: rootReducer.gameReducer
  }
}

export default connect(mapStateToProps)(XucXac)