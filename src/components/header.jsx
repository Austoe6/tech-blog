import React from 'react'
import Link from 'gatsby-link'
import logo from '../assets/rick.svg'
import {Row, Col} from '../layout-components/grid'
import Divider from '../layout-components/divider'
import menuIcon from '../assets/menu.svg'
import x from '../assets/x.svg'
//import classNames from 'classnames';

class Header extends React.Component{
  state = {
    showNav: false
  }

  //operamini fix
  //handleShowMenu = () => this.setState({showNav: !this.state.showNav})
  handleShowMenu = () => {
    document.getElementById('mobile-nav').classList.add('mobile-nav--show')
    document.getElementById('nav-container').classList.add('mobile-nav--active')
  }

  //operamini fix: use js to change display option instead of state
  //handleHideMenu = () => this.setState({showNav: false})
  handleHideMenu = () => {
    document.getElementById('mobile-nav').classList.remove('mobile-nav--show')
    document.getElementById('mobile-nav').classList.add('mobile-nav--hiden')
    document.getElementById('nav-container').classList.remove('mobile-nav--active')
  }

  render(){
    const {siteTitle, location} = this.props
    const active = (h) => h === location.pathname ? {color: '#0069f2'} : {color: '#000000'}
    const menuBtnSrc = this.state.showNav ? x : menuIcon
    //const navContainerStyles = classNames('nav-container', {'mobile-nav--active': this.state.showNav})
    //const mobileNavStyles = classNames({'mobile-nav--show': this.state.showNav, 'mobile-nav--hidden': !this.state.showNav})

    const Nav = () =>(
      <nav className='header-nav'>
        <ul className='header-nav__container'>
          <li>
            <Link to='/categories' onClick={this.handleShowMenu} style={active('/categories')}>Categories</Link>
          </li>
          <li>
            <Link to='/media' onClick={this.handleShowMenu} style={active('/media')}>Media</Link>
          </li>
          <li>
            <Link to='/about' onClick={this.handleShowMenu} style={active('/about')}>About</Link>
          </li>
          <li>
            <Link to='/contact' onClick={this.handleShowMenu} style={active('/contact')}>Contact</Link>
          </li>
        </ul>
      </nav>
    )
    
    return(
      <div className={navContainerStyles} id='nav-container'>
        <header className='header'>
          <Row className='container' type='flex' justify='space-between' style={{alignItems: 'center'}}>
            <Col onClick={this.handleHideMenu}>
              <Link to='/'>
                <div className='header-logo'>
                  <img className='header-logo__img' src={logo} alt='logo'/>
                  <span>{siteTitle}</span>
                </div>
              </Link>
            </Col>
            <Col>
              <div className="hide-mobile"><Nav/></div>
              <div className="mobile-nav__btn">
              <a>
                <img src={menuBtnSrc} alt="menu btn" role='button' onClick={this.handleShowMenu}/>
              </a>
              </div>
            </Col>
          </Row>
          <Divider style={{margin: 0}} />
        </header>
        <div id='mobile-nav' className={mobileNavStyles}>
          <Nav />
        </div>
      </div>
    )
  }
}

export default Header
