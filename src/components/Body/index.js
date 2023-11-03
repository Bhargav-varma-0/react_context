// Write your code her
import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

class Body extends Component {
  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {showContent, showLeftNavbar, showRightNavbar} = value
          return (
            <div className="body-m row">
              {showLeftNavbar && (
                <div className="left-navbar mt mb pd">
                  <h1 className="mt mb nav-hd">Left NavBar Menu</h1>
                  <ul className="ul-ele pd-0">
                    <li className="mb">
                      <p>Item 1</p>
                    </li>
                    <li className="mb">
                      <p>Item 2</p>
                    </li>
                    <li className="mb">
                      <p>Item 3</p>
                    </li>
                    <li className="mb">
                      <p>Item 4</p>
                    </li>
                  </ul>
                </div>
              )}
              {showContent && (
                <div className="body-content">
                  <h1 className="mt mb nav-hd">Content</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
              )}
              {showRightNavbar && (
                <div className="right-navbar mt mb pd">
                  <h1 className="mt mb nav-hd">Right NavBar</h1>
                  <div className="box">
                    <p>Ad 1</p>
                  </div>
                  <div className="box">
                    <p>Ad 2</p>
                  </div>
                </div>
              )}
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}
export default Body
