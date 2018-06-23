import React from 'react'
import Link from 'gatsby-link'
import logo from '../assets/rick.svg'
import {Row, Col} from '../layout-components/grid'
import Divider from '../layout-components/divider'
import menuIcon from '../assets/menu.svg'
import x from '../assets/x.svg'

class Header extends React.Component{
  handleShowMenu = () => {
    document.getElementById('nav-container').style.height = '100%'
    document.getElementById('nav-container').style.display = 'block'
  }

  handleHideMenu = () => {
    document.getElementById('nav-container').style.height = '0%'
    document.getElementById('nav-container').style.display = 'none'
  }

  render(){
    const {siteTitle, location} = this.props
    const active = (h) => h === location.pathname ? {color: '#0069f2'} : {color: '#000000'}

    return(
      <div>
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
              <div className="hide-mobile">
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
              </div>
              <div className="mobile-nav__btn">
                <a>
                  <img src={menuIcon} alt="menu btn" role='button' onClick={this.handleShowMenu}/>
                </a>
              </div>
            </Col>
          </Row>
          <Divider style={{margin: 0}} />
        </header>
        <div className='nav-container hide-mobile' id='nav-container'>
            <a className='menu-icon-close'>
              <img src={x} alt="menu btn" role='button' onClick={this.handleHideMenu}/>
            </a>
          <nav className='header-nav'>
            <ul className='header-nav__container'>
              <li>
                <Link to='/' onClick={this.handleShowMenu}>Home</Link>
              </li>
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
        </div>
      </div>
    )
  }
}

export default Header
