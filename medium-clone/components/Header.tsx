import Image from 'next/image'
import Logo from '@/static/logo.png'

const styles = {
  wrapper: 'flex justify-center p-4 bg-[#FCC017]',
  content: 'max-w-7xl flex flex-1 justify-between',
  logoContainer: 'flex items-center flex-start',
  logo: 'cursor-pointer object-contain ml-5',
  bannerNav: 'flex cursor-pointer gap-6 items-center mr-20',
  accentedButton: 'bg-black text-white rounded-full py-2 px-4 text-md',
}

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Image
            className={styles.logo}
            src={Logo}
            height={40}
            width={200}
            alt="medium logo"
          />
        </div>

        <div className={styles.bannerNav}>
          <div>Our story</div>
          <div>Membership</div>
          <div>Sign in</div>
          <div className={styles.accentedButton}>Get started</div>
        </div>
      </div>
    </div>
  )
}

export default Header
