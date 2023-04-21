import Image from 'next/image'
import Link from 'next/link'
import SmallLogo from '../static/smallLogo.png'
import { FiBell } from 'react-icons/fi'
import { BsPencilSquare } from 'react-icons/bs'
import Qazi from '../static/qazi.jpg'
import Blank from '../static/blank.jpg'
import { AiOutlineSearch } from 'react-icons/ai'
import { MediumContext } from '@/context/MediumContext'
import { useContext } from 'react'
import Modal from 'react-modal'
import { useRouter } from 'next/router'
import PostModal from './PostModal'

Modal.setAppElement('#__next')

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    background: '#fff',
    padding: 0,
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(10,11,13,0.75)',
  },
}

const styles = {
  logoContainer: 'cursor-pointer w-[2.7rem] mb-[1rem]',
  wrapper:
    'w-screen h-[3.5rem] flex justify-between items-top pt-[.5rem] px-[1.5rem]',
  iconsContainer:
    'flex-1 flex justify-center gap-[1rem] text-2xl text-[#787878]',
  divider: 'border-b border-[#E5E5E5] w-screen',
  profileImage:
    'object-cover w-[2.2rem] h-[2.2rem] rounded-full overflow-hidden mr-[2rem] cursor-pointer',
  profileImageContainer:
    'flex items-center justify-between gap-[2rem] mb-[.5rem]',
  write: 'flex items-center gap-[.5rem] ml-[1rem] cursor-pointer',
  search: 'flex gap-[1rem]',
  searchBar:
    'flex items-center gap-[.6rem] h-[2.6rem] border px-[1rem] rounded-full bg-white',
  searchInput: 'border-none outline-none bg-none w-full',
  accentedButton:
    'bg-[#1A8917] text-white rounded-full px-[1rem] py-[.6rem] text-sm cursor-pointer',
  signIn: 'text-[#1A8917] text-sm mr-[1rem] cursor-pointer',
}

const ReadersNav = () => {
  const router = useRouter()
  const { currentUser, handleUserAuth } = useContext(MediumContext)
  return (
    <div>
      {currentUser ? (
        <>
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
                <Link href={'/?addNew=1'}>
                  <div className={styles.write}>
                    <BsPencilSquare />
                    <span className="text-sm mr-[1rem]">Write</span>
                  </div>
                </Link>
                <FiBell />
              </div>
              <Image
                className={styles.profileImage}
                src={Qazi}
                alt="Profile img"
              />
            </div>
          </div>
          <div className={styles.divider} />
        </>
      ) : (
        <>
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
            <div
              onClick={handleUserAuth}
              className={styles.profileImageContainer}
            >
              <div className={styles.iconsContainer}>
                <div className={styles.write}>
                  <BsPencilSquare />
                  <span className="text-sm mr-[1rem]">Write</span>
                </div>
              </div>
              <div className={styles.accentedButton}>Sign up</div>
              <div className={styles.signIn}>Sign in</div>
              <Image
                className={styles.profileImage}
                src={Blank}
                alt="Profile img"
              />
            </div>
          </div>
          <div className={styles.divider} />
        </>
      )}
      <Modal
        isOpen={Boolean(router.query.addNew)}
        onRequestClose={() => router.push('/')}
        style={customStyles}
      >
        <PostModal />
      </Modal>
    </div>
  )
}

export default ReadersNav
