import sidekickLogo from '../assets/sidekicklogo.svg';
import sidekickLogoBlack from '../assets/sidekickLogoBlack.svg'

import { Link, useLocation } from 'react-router';

const Navbar = () => {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  return (
    <nav
      className={`${isContactPage ? 'bg-sidekick-green text-black' : 'bg-sidekick-black text-[#f5f5f5]'
        } py-7 absolute top-0 left-0 w-full h-fit z-20`}
    >
      <div className='flex items-center justify-between w-[80%] max-w-7xl mx-auto'>
        <Link to="/">
          {isContactPage ? <img src={sidekickLogoBlack} alt="Sidekick Logo" /> : <img src={sidekickLogo} alt="Sidekick Logo" />}
        </Link>
        <div className='space-x-8'>
          <Link to='/product' className='font-semibold hover:underline'>Product</Link>
          <Link to='/offerings' className='font-semibold hover:underline'>Offerings</Link>
          <Link to='/contact' className='font-semibold hover:underline'>Contact Us</Link>
          <Link to='/login' className='font-semibold hover:underline'>Institution Login</Link>
          <a
            href="#"
            className={`py-3 px-4 rounded-full font-semibold ${isContactPage
              ? 'bg-white text-black'
              : 'bg-sidekick-green text-[#2C2E49]'
              }`}
          >
            Get the App
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;