import React, { Component } from 'react';


class PassReset extends Component {
  render() {
    return (
      <div className="bg-auth">
        <div className="container bg-auth">
          <div className="row">
            <div className="col-md-10 col-md-offset-2">
              <div className="col-md-6 left-side">
                <div className="slider_img">
                  <div className="this_list">
                    <li><img src="/images/sliders/aafd8c6b005d.jpg" alt="" /></li>
                    <li><img src="/images/sliders/2d9d7248af43.jpg" alt="" /></li>
                    <li><img src="/images/sliders/629d23a3c7b2.jpg" alt="" /></li>
                    <li><img src="/images/sliders/001bc33056c1.jpg" alt="" /></li>
                    <li><img src="/images/sliders/f5ae123ab1e2.jpg" alt="" /></li>
                  </div>
                </div>
              </div>
              <div className="col-md-5 right-side">
                <div id="form-login">
                  <div className="login-frm">
                    {/* <div className="title-inst"></div> */}
                    <div className="title-inst2"><span className="nj">_Khilogram.</span></div>
                    { this.props.children }
                  </div>
                  <div className="sign_up_switch">
                    <p className="donthave">Don't have an account? <span><a>Sign up</a></span></p>
                  </div>
                </div>
              </div>
              <div className="clear"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PassReset;
