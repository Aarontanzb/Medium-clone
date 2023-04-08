import Image from 'next/image'
import Link from 'next/link'
import SmallLogo from '../static/smallLogo.png'
import { HiOutlineHome } from 'react-icons/hi'
import { FiBell } from 'react-icons/fi'
import { BiBookmarks } from 'react-icons/bi'
import { RiArticleLine } from 'react-icons/ri'
import { BsPencilSquare } from 'react-icons/bs'
import Qazi from '../static/qazi.jpg'

const styles = {
  logoContainer: 'cursor-pointer',
  wrapper:
    'w-[5rem] h-screen flex flex-col justify-between items-center p-[1rem]',
}

const ReadersNav = () => {
  return (
    <div className={styles.wrapper}>
      <Link href="/">
        <div className={styles.logoContainer}>
          <Image src={SmallLogo} alt="Logo img" />
        </div>
      </Link>
    </div>
  )
}

export default ReadersNav