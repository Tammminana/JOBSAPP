import Wrapper from '../assets/wrappers/SmallSidebar'
import { FaTimes } from 'react-icons/fa'
import { useAppContext } from '../context/appContext'
// import links from '../utils/links'
// import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import Navlinks from './Navlinks';

const SmallSidebar = () => {
    const { showSidebar, toggleSidebar } = useAppContext();
    return (
        <Wrapper>
            <div className={showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'}>
                <div className='content'>
                    <button
                        type="button"
                        onClick={toggleSidebar}
                        className="close-btn">
                        <FaTimes />
                    </button>
                    <header>
                        <Logo />
                    </header>
                    <Navlinks toggleSidebar={toggleSidebar}/>
                </div>
            </div>
        </Wrapper>
    )
}

export default SmallSidebar