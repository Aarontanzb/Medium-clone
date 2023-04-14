import Image from 'next/image'
import Link from 'next/link'
import SmallLogo from '../static/smallLogo.png'
import { HiOutlineHome } from 'react-icons/hi'
import { FiBell } from 'react-icons/fi'
import { BiBookmarks } from 'react-icons/bi'
import { RiArticleLine } from 'react-icons/ri'
import { BsPencilSquare } from 'react-icons/bs'
import Qazi from '../static/qazi.jpg'
import { AiOutlineSearch } from 'react-icons/ai'

const styles = {
  logoContainer: 'cursor-pointer w-[2.7rem] mb-[1rem]',
  wrapper:
    'w-screen h-[3.5rem] flex justify-between items-top pt-[.5rem] px-[1.5rem]',
  iconsContainer:
    'flex-1 flex justify-center gap-[1rem] text-2xl text-[#787878]',
  divider: 'border-b border-[#E5E5E5] w-screen',
  profileImage:
    'object-cover w-[2.2rem] h-[2.2rem] rounded-full overflow-hidden mr-[2rem]',
  profileImageContainer:
    'flex items-center justify-between gap-[2rem] mb-[.5rem]',
  write: 'flex items-center gap-[.5rem] ml-[1rem]',
  search: 'flex gap-[1rem]',
  searchBar:
    'flex items-center gap-[.6rem] h-[2.6rem] border px-[1rem] rounded-full bg-white',
  searchInput: 'border-none outline-none bg-none w-full',
}

const ReadersNav = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.search}>
          <div className={styles.logoContainer}>
            <Link href="/">
              <Image src={SmallLogo} alt="Logo img" />
            </Link>
          </div>
          <div className={styles.searchBar}>
            <AiOutlineSearch />
            <input
              className={styles.searchInput}
              placeholder="Search Medium"
              type="text"
            />
          </div>
        </div>
        <div className={styles.profileImageContainer}>
          <div className={styles.iconsContainer}>
            <div className={styles.write}>
              <BsPencilSquare />
              <span className="text-sm mr-[1rem]">Write</span>
            </div>
            <FiBell />
          </div>
          <Image className={styles.profileImage} src={Qazi} alt="Profile img" />
        </div>
      </div>
      <div className={styles.divider} />
    </div>
  )
}

export default ReadersNav
