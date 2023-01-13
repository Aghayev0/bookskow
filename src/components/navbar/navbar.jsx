import React from 'react'
import { MyNavbar, MyTitle } from '../../styled'
import style from '../../assets/main.module.css'
const Navbar = () => {
    return (
        <React.Fragment>
            <MyNavbar>
                    <MyTitle>Agha Book Searching App</MyTitle>
                    <input className={`${style.search}`}/>
                    <i className="fa-solid fa-magnifying-glass"/>
            </MyNavbar>
        </React.Fragment>


    )
}

export default Navbar