import sidekickLogo from '../assets/sidekicklogo.svg';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <nav className='bg-[#25252E] py-10'>
      <div className='flex items-center justify-between w-[80%] max-w-7xl mx-auto text-[#f5f5f5]'>
        <img src={sidekickLogo} alt="Sidekick Logo" />
        <div className='space-x-8'>
          <Link to='/product' className='font-semibold hover:underline'>Product</Link>
          <Link to='/offerings' className='font-semibold hover:underline'>Offerings</Link>
          <Link to='/contact' className='font-semibold hover:underline'>Contact Us</Link>
          <Link to='/login' className='font-semibold hover:underline'>Institution Login</Link>
          <a href="#" className='bg-[#18F27A] py-3 px-4 rounded-full text-[#2C2E49] font-semibold'>Get the App</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar