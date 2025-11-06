import React, { useEffect } from 'react'
import { BiSolidMoon, BiSolidSun } from 'react-icons/bi';
import { FiMenu } from 'react-icons/fi'
import logo from './../../assets/portfolioLogo.png'

const navMenus = [
    {
        name:"Home",
        link:"/#home"
    },
    {
        name:"About",
        link:"/#about"
    },
    {
        name:"Services",
        link:"/#services"
    },
    {
        name:"Contact",
        link:"/#"
    }
]


const Navbar = () => {
    const [showMenu, setShowMenu] = React.useState(false);
    const [theme, setTheme] = React.useState(localStorage.getItem("theme")? localStorage.getItem("theme"):"light");
    const toggle = ()=>{setShowMenu(!showMenu)};

    useEffect(()=>{
        if(theme==="dark"){
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark");
        }else{
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme","light");
        }
    },[theme]);
  return (
    <>
     <nav className='bg-secondary dark:bg-gray-900 dark:text-white'>
        <div className='container flex justify-between items-center py-3 sm:py-0'>
            <a href="/#home" className="flex items-center">
            <img src={logo} alt="Logo" className="w-16 h-16 object-contain transition-all dark:brightness-150 dark:contrast-125" />
            </a>


            {/**Desktop Menu */}
            <div className='hidden sm:block'>
                <ul className='flex items-center gap-4 '>
                    {
                        navMenus.map((menu) =>(
                            <li>
                                <a href={menu.link}
                                className='text-xl font-semibold px-2 py-4 md:py-6 inline-block cursor-pointer'>{menu.name}</a>
                            </li>
                        ))
                    }
                    {/*theme toggle */}
                    {theme === "dark" ? (
                        <BiSolidSun className='text-2xl dark:text-white cursor-pointer' onClick={()=> setTheme("light")}/>
                    ):(
                        <BiSolidMoon className='text-2xl cursor-pointer dark:text-white' onClick={() => setTheme("dark")}/>
                    )
                    }
                </ul>
            </div>
            {/**Mobile Menu */}
            <div className='block sm:hidden'>
                <div className='flex items-center gap-4'>
                    {/*theme toggle */}
                    {theme === "dark" ? (
                        <BiSolidSun className='text-2xl dark:text-white cursor-pointer' onClick={()=> setTheme("light")}/>
                    ):(
                        <BiSolidMoon className='text-2xl cursor-pointer dark:text-white' onClick={() => setTheme("dark")}/>
                    )
                    }
                
                <FiMenu className='text-2xl cursor-pointer dark:text-white' 
                onClick={toggle}/>
                </div>

                {showMenu && (
                    <div className='fixed top-16 left-0 right-0 bg-white dark:bg-gray-900 dark:text-white shadow-md rounded-b-xl z-10 py-10'>
                        <ul className='flex flex-col items-center gap-4'>
                            {navMenus.map((menu)=>(
                                <li key={menu.name}>
                                    <a href={menu.link}
                                    className='text-xl font-semibold px-2 py-4 md:py-6 inline-block cursor-pointer'>{menu.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    </nav> 
    </>
  )
}

export default Navbar
