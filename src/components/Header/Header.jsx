import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <NavLink to='/tokenomics'>Տոկենոմիկան</NavLink>
        <NavLink to='/terminalogia'>Տերմինալոգիա</NavLink>
        <NavLink to='/web3'>Web3</NavLink>
    </header>
  )
}

export default Header