import React, { useEffect, useState } from 'react'
import ytLogo from './images/yt-logo.png'
import searchIcon from './images/search.png'
import avtar from './images/avtar.png'
import {GiHamburgerMenu} from 'react-icons/gi'
import { Link } from 'react-router-dom'
import {BiSolidMicrophone, BiLogOut} from 'react-icons/bi'


function Header() {
        const [isUserLoggedIn, setIsLoggedIn] = useState(false);
    
        useEffect(() => {
            if(localStorage.getItem('isUserLoggedIn') == 'true'){
                setIsLoggedIn(true);
            }
        }, [])
    
        const handleLogout = () => {
            localStorage.setItem('isUserLoggedIn', false);
            setIsLoggedIn(false);
        }
  return (
    <div>
      <div class="header">
                <div class="header-items header-logo">
                    <button class="header-first">
                        <GiHamburgerMenu />
                    </button>
                    <div class="header-second">
                        <Link to='/'>
                        <img id='yt-logo' src={ytLogo}/>
                        </Link>
                    </div>
                </div>
                <div class="header-items header-center">
                    <input class="header-search" placeholder='Search..'/>
                    <button class="search-button">
                        <img class="small-image" src={searchIcon}></img>
                    </button>
                    <button class="header-mic">
                        <BiSolidMicrophone class="microphone" />
                    </button>
                </div>
                <div class="header-items header-profile">
                    {
                        isUserLoggedIn ? (
                            <>
                                <BiLogOut class="logout" title='Logout' onClick={() => handleLogout()}/>
                                <img src={avtar} height={'40px'} width={'40px'}
                                ></img>
                            </>
                        ) : (
                            <>
                                <Link to={'signin'}>
                                <button class="header-tools">Sign In</button>
                                </Link>
                            </>
                        )
                    }
                </div>    
            </div>
    </div>
  )
}

export default Header
