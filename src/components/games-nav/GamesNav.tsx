import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { IsActiveProps } from '../../@types/types';
import css from './GamesNav.module.scss'

const GamesNav = () => {
    const activeClass = (e: IsActiveProps, clz: string = "") =>
        e.isActive ? `${css.active} ${clz}` : clz;
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <nav className={css.navbar}>
                    <NavLink className={activeClass} to="all">
                        All
                    </NavLink>
                    <div className={css.spacer}></div>
                    <NavLink className={activeClass} to="nintendo">
                        Nintendo
                    </NavLink>
                    <div className={css.spacer}></div>
                    <NavLink className={activeClass} to="xbox">
                        Xbox
                    </NavLink>
                    <div className={css.spacer}></div>
                    <NavLink className={activeClass} to="ps">
                        PS4/PS5
                    </NavLink>
                </nav>
            </Container>
        </Navbar>
    )
}

export default GamesNav