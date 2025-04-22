import { Link } from 'react-router'
import SidekickLogo from '../assets/sidekicklogo.svg'

const Footer = () => {
  return (
    <footer className='bg-sidekick-black pt-12 py-10'>
      <div className="flex md:flex-row flex-col md:items-center md:justify-between md:w-[80%] px-5 max-w-7xl mx-auto text-[#f5f5f5]">
        <div className='space-y-8'>
          <img src={SidekickLogo} alt="Sidekick Logo" className='max-w-52 hidden md:block' />
          <p className='font-semibold text-2xl mb-8 md:mb-0 md:text-lg tracking-wide text-sidekick-green leading-tight'>
            From A to B, we’ve got the<br className='inline md:hidden' /> in<br className='hidden md:inline' />-between.
          </p>
        </div>

        <div className='flex gap-6 justify-between'>
          <div className='flex flex-col gap-3'>
            <Link to='/offerings' className='font-normal hover:underline'>Offerings</Link>
            <Link to='/product' className='font-normal hover:underline'>Our Product</Link>
            <Link to='/contact' className='font-normal hover:underline'>Contact Us</Link>
            <Link to='/login' className='font-normal hover:underline'>Institution Login</Link>
          </div>
          <div className='flex flex-col gap-3'>
            <Link to='/privacy-policy' className='font-normal hover:underline'>Privacy Policy</Link>
            <Link to='/terms' className='font-normal hover:underline'>Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </footer >
  )
}

export default Footer