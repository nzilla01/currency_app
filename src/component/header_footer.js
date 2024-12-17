import React, {useState, useEffect} from 'react'
import './my_app.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser} from "@fortawesome/free-solid-svg-icons";
import {faBars} from "@fortawesome/free-solid-svg-icons"

const Loading = ()=>{
    const [isVisible, setVisible] = useState(true);

    useEffect(() =>{
        const timer = setTimeout(() =>{
            setVisible(false);
        }, 5000);
        return()  => clearTimeout(timer);
    }, []);
    
    return(
        isVisible &&(
        <div className='loading'>
            <div id='c'> </div>
            <p id='logo' >NzillaEdge</p>
   
        </div>
        )
    )
}
const Header = () => {
    const [isShowNav, setShowNav] = useState(false);

    const showNav = ()=> {
        setShowNav((prev) => !prev);
    }

    return (
        <>
            <div className='header'>

                <div className="navBar">
                <FontAwesomeIcon icon={faCircleUser} size='3x' />
                </div>
                <div id='bars'>
                    <FontAwesomeIcon icon={faBars} onClick={showNav} id='bars' size='3x' />
                </div>

                <div className={`nav ${isShowNav ? 'show' : ''}`} >
                    <ul className='list'>
                        <li><a href='home'>Home</a> </li>
                        <li><a href='news'>News</a> </li>
                        <li><a href='setting'>Settings</a> </li>
                        <li><a href='about'>About</a> </li>
                        <li><a href='sign_in'>Sign in</a> </li>
                        <li><a href="sign_up">Sign up</a> </li>
                    </ul>
                </div>
               
            </div>
        </>
    );
};

//export default Header;

const Footer = () => {
    return (
        <>
            <div className='foot'> play booy</div>
        </>
    )
}

export {
   Loading, Header, Footer
};