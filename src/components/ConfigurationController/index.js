// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContext = () => {
        onToggleShowContent(!showContent)
      }

      const onChangeLeftNav = () => {
        onToggleShowLeftNavbar(!showLeftNavbar)
      }

      const onChangeRightNav = () => {
        onToggleShowRightNavbar(!showRightNavbar)
      }

      return (
        <div className="main-configuration-controller">
          <div className="heading">
            <h1 className="mb">Layout</h1>
          </div>
          <ul className="ul-ele">
            <li className="mb">
              <input
                type="checkbox"
                id="content"
                checked={showContent}
                onChange={onChangeContext}
              />
              <label htmlFor="content">Content</label>
            </li>
            <li className="mb">
              <input
                type="checkbox"
                id="left-navbar"
                checked={showLeftNavbar}
                onChange={onChangeLeftNav}
              />
              <label htmlFor="left-navbar">Left Navbar</label>
            </li>
            <li className="mb">
              <input
                type="checkbox"
                id="right-navbar"
                checked={showRightNavbar}
                onChange={onChangeRightNav}
              />
              <label htmlFor="right-navbar">Right Navbar</label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
