import { NavLink } from 'react-router-dom'
import { SearchForm } from '../searchForm'
import Heart from '../../icons/heart'
import Basket from '../../icons/basket'
import Circle from '../../icons/circle'
import './index.scss'

export const Header = () => {
  const navLinkClass = ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'

  return (
    <header className="nav">
      <div className="nav-container">
        <div className="container-logo">
          <span className="logo">BOOKSTORE</span>
        </div>
        <div className="container-search">
          <SearchForm />
        </div>
        <div className="nav-links">
          <NavLink className={navLinkClass} to="/favorite">
            <div className="wrapper-heart">
                <Heart />
                <div className="badge" id="badge">
                <Circle />
                </div>
            </div>
          </NavLink>
          <NavLink className={navLinkClass} to="/purchases">
            <div className="wrapper-basket">
                <Basket />
            </div>
          </NavLink>
        </div>
      </div>
    </header>
  )
}
