import { X } from '@phosphor-icons/react'
import modalImg from '../../assets/offerings/WarehousesAndIndustrialZones.png'
import { useModalStore } from '../../globalStore/modalStore'



const WarehousesAndIndustrialZones = ({ onClose }: { onClose: () => void }) => {
  const { openModal } = useModalStore();
  return (
    <div className='p-5 flex items-stretch '>
      <img src={modalImg} alt="Sidekick for Cities and Campuses" />
      <div className='grow flex flex-col'>

        {/* close button */}
        <button
          onClick={onClose}
          className="block mb-2 ml-auto text-zinc-700 hover:text-zinc-900 z-10 mt-1"
        >
          <X size={24} weight="bold" />
        </button>

        <div className='px-6 grow'>
          <h2 className="text-4xl font-bold text-center text-zinc-800 mb-2">Cities & Campuses</h2>
          <p className='text-sidekick-blue text-2xl rounded-lg px-7 font-semibold my-6 py-4 bg-[#F5F9FF]'>Your Last Mile, Our First Priority</p>

          <div className='space-y-4'>
            <div className='flex items-start gap-2'>
              <div className='aria-hidden'>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className=''>
                  <path d="M6 11.5C5.44772 11.5 5 11.9477 5 12.5C5 13.0523 5.44772 13.5 6 13.5V11.5ZM19.7071 13.2071C20.0976 12.8166 20.0976 12.1834 19.7071 11.7929L13.3431 5.42893C12.9526 5.03841 12.3195 5.03841 11.9289 5.42893C11.5384 5.81946 11.5384 6.45262 11.9289 6.84315L17.5858 12.5L11.9289 18.1569C11.5384 18.5474 11.5384 19.1805 11.9289 19.5711C12.3195 19.9616 12.9526 19.9616 13.3431 19.5711L19.7071 13.2071ZM6 13.5H19V11.5H6V13.5Z" fill="#18F27A" />
                </svg>
              </div>
              <p className='text-zinc-700 leading-snug text-lg'>Where you are and where you need to be. Whether you’re rushing to work, exploring a new city, or moving between classes.</p>
            </div>

            <div className='flex items-start gap-2'>
              <div className='aria-hidden'>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className=''>
                  <path d="M6 11.5C5.44772 11.5 5 11.9477 5 12.5C5 13.0523 5.44772 13.5 6 13.5V11.5ZM19.7071 13.2071C20.0976 12.8166 20.0976 12.1834 19.7071 11.7929L13.3431 5.42893C12.9526 5.03841 12.3195 5.03841 11.9289 5.42893C11.5384 5.81946 11.5384 6.45262 11.9289 6.84315L17.5858 12.5L11.9289 18.1569C11.5384 18.5474 11.5384 19.1805 11.9289 19.5711C12.3195 19.9616 12.9526 19.9616 13.3431 19.5711L19.7071 13.2071ZM6 13.5H19V11.5H6V13.5Z" fill="#18F27A" />
                </svg>
              </div>
              <p className='text-zinc-700 leading-snug text-lg'>
                Just pause, scan, and take off.
              </p>
            </div>

            <div className='flex items-start gap-2'>
              <div className='aria-hidden'>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className=''>
                  <path d="M6 11.5C5.44772 11.5 5 11.9477 5 12.5C5 13.0523 5.44772 13.5 6 13.5V11.5ZM19.7071 13.2071C20.0976 12.8166 20.0976 12.1834 19.7071 11.7929L13.3431 5.42893C12.9526 5.03841 12.3195 5.03841 11.9289 5.42893C11.5384 5.81946 11.5384 6.45262 11.9289 6.84315L17.5858 12.5L11.9289 18.1569C11.5384 18.5474 11.5384 19.1805 11.9289 19.5711C12.3195 19.9616 12.9526 19.9616 13.3431 19.5711L19.7071 13.2071ZM6 13.5H19V11.5H6V13.5Z" fill="#18F27A" />
                </svg>
              </div>
              <p className='text-zinc-700 leading-snug text-lg'>Speeds up your intra-campus mobility.
              </p>
            </div>
          </div>

        </div>

        {/* CTA button */}
        <button
          className="font-medium text-lg bg-sidekick-green ml-auto block px-7 py-3 rounded-full"
          onClick={() => openModal("partnerForm")}
        >
          Partner With Us
        </button>
      </div>
    </div>
  )
}

export default WarehousesAndIndustrialZones