import { useEffect, useState } from 'react';
import sidekickLogo from '../assets/sidekicklogo.svg';
import sidekickLogoBlack from '../assets/sidekickLogoBlack.svg';
import { List, X } from '@phosphor-icons/react';
import { Link, useLocation } from 'react-router';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  })

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <nav
      className={`${isContactPage ? 'bg-sidekick-green text-black' : 'bg-sidekick-black text-[#f5f5f5]'
        } py-5 md:absolute fixed top-0 left-0 w-full h-fit z-20`}
    >
      <div className='flex items-center justify-between md:w-[80%] px-5 md:px-0 max-w-7xl mx-auto'>
        <Link to="/">
          {isContactPage ? <img src={sidekickLogoBlack} alt="Sidekick Logo" /> : <img src={sidekickLogo} alt="Sidekick Logo" />}
        </Link>

        {/* Desktop Menu */}
        <div className='space-x-8 hidden md:block'>
          <Link to='/product' className='font-semibold hover:underline'>Product</Link>
          <Link to='/offerings' className='font-semibold hover:underline'>Offerings</Link>
          <Link to='/contact' className='font-semibold hover:underline'>Contact Us</Link>
          <Link to='/login' className='font-semibold hover:underline'>Institution Login</Link>
          <a
            href="#"
            className={`py-4 px-5 rounded-full font-semibold ${isContactPage
              ? 'bg-white text-black'
              : 'bg-sidekick-green text-[#2C2E49]'
              }`}
          >
            Get the App
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className='md:hidden' onClick={toggleMenu}>
          <List size={28} weight='bold' color={isContactPage ? '#2C2E49' : '#f5f5f5'} />
        </button>
      </div>

      {/* Mobile Full-Screen Menu */}
      {menuOpen && (
        <menu className={`fixed top-0 left-0 w-full h-screen z-20 flex flex-col items-center justify-start gap-8 transition bg-sidekick-green text-black `}>
          <div className=' py-5 bg-sidekick-black w-full'>
            <div className='flex items-center justify-between md:w-[80%] px-5 md:px-0 max-w-7xl mx-auto'>
              <Link onClick={toggleMenu} to="/">
                <img src={sidekickLogo} alt="Sidekick Logo" />
              </Link>
              <button onClick={toggleMenu} className="text-white ">
                <X size={28} />
              </button>
            </div>
          </div>
          <div className='grow w-full px-6  flex flex-col items-start justify-center'>
            <p className='select-none text-sidekick-blue font-bold pb-4'>Menu</p>
            <Link to='/product' className='text-4xl text-sidekick-black py-4 border-t-2 border-b-2 border-sidekick-black  w-full font-bold' onClick={toggleMenu}>Product</Link>
            <Link to='/offerings' className='text-4xl text-sidekick-black py-4 border-b-2 border-sidekick-black  w-full font-bold' onClick={toggleMenu}>Offerings</Link>
            <Link to='/contact' className='text-4xl text-sidekick-black py-4 border-b-2 border-sidekick-black  w-full font-bold' onClick={toggleMenu}>Contact Us</Link>
            <Link to='/login' className='text-4xl text-sidekick-black py-4 border-b-2 border-sidekick-black  w-full font-bold' onClick={toggleMenu}>Institution Login</Link>
            <a
              href="#"
              className="py-4 rounded-full bg-white px-6 mt-10 block  text-[#2C2E49] font-bold"
              onClick={toggleMenu}
            >
              Get the App
            </a>
          </div>
        </menu>
      )}
    </nav>
  );
};

export default Navbar;
