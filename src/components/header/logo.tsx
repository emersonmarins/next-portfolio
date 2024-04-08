import Image from 'next/image'
import logoWhite from '/public/assets/logo-white.png'
import "./styles.css"

export const Logo = () => (
  <div className="flex w-auto h-auto items-center logo">
    <Image
      src={logoWhite}
      alt='logo emerson marins'
      height={70}
      width={200}
      className='w-40 h-auto'
      priority
    />
  </div>
)