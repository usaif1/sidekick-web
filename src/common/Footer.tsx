import { Link } from 'react-router'
import SidekickLogo from '../assets/sidekicklogo.svg'

const Footer = () => {
  return (
    <footer className='bg-[#25252E] py-16'>
      <div className="flex items-center justify-between w-[80%] max-w-7xl mx-auto text-[#f5f5f5]">
        <div className='space-y-8'>
          <img src={SidekickLogo} alt="Sidekick Logo" className='max-w-52' />
          <p className='font-semibold text-lg tracking-wide text-[#18F27A] leading-tight'>
            From A to B, we’ve got the in<br />-between.
          </p>
        </div>

        <div className='flex gap-6 py-4'>
          <div className='flex flex-col gap-3'>
            <Link to='/offerings' className='font-normal hover:underline'>Offerings</Link>
            <Link to='/product' className='font-normal hover:underline'>Our Product</Link>
            <Link to='/contact' className='font-normal hover:underline'>Contact Us</Link>
            <Link to='/login' className='font-normal hover:underline'>Institution Login</Link>
          </div>
          <div className='flex flex-col gap-3'>
            <Link to='/contact' className='font-normal hover:underline'>Privacy Policy</Link>
            <Link to='/login' className='font-normal hover:underline'>Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </footer >
  )
}

export default Footer