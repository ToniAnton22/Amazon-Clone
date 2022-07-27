import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className = "header">
      {/* Logo */ }
      <img className= "header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
      {/* Search Bar */ }
      <div className="header__search">
        <input className="header__searchInput" type = "text"/>
      </div>
      <div className="header__nav">
          <div className="header__selection">
            <span className = 'header__selectionLineOne'>Hello Guest</span>
            <span className = 'header__selectionLineTwo'>Sign In</span>
          </div>
          <div className="header__selection">
            <span className = 'header__selectionLineOne'>Returns</span>
            <span className = 'header__selectionLineTwo'>& Orders</span>

          </div>
          <div className="header__selection">
            <span className = 'header__selectionLineOne'>Your</span>
            <span className = 'header__selectionLineTwo'>Prime</span>
          </div> 

      </div>
    </div>
  )
}

export default Header