import Image from 'next/image'
import Qazi from '../static/qazi.jpg'
import { AiFillPlayCircle } from 'react-icons/ai'
import { IoLogoTwitter } from 'react-icons/io'
import { FaFacebook } from 'react-icons/fa'
import { GrLinkedin } from 'react-icons/gr'
import { HiOutlineLink } from 'react-icons/hi'
import { BiBookmarks } from 'react-icons/bi'
import { FiMoreHorizontal } from 'react-icons/fi'
import Banner from './../static/banner.png'
import { Article, User } from '@/types'

const styles = {
  wrapper: 'flex items-center justify-center flex-[3] border-r h-full',
  content: 'h-screen p-[2rem] pl-[24rem] pr-[6.5rem]',
  postHeaderContainer:
    'flex justify-between items-center mt-[2.2rem] mb-[1.2rem]',
  authorContainer: 'flex gap-[1rem]',
  authorProfileImageContainer:
    'h-[3rem] w-[3rem] grid center rounded-full overflow-hidden',
  column: 'flex-1 flex flex-col justify-center',
  postDetails: 'flex gap-[.2rem] text-[#787878]',
  listenButton: 'flex items-center gap-[.2rem] text-[#1A8917]',
  socials: 'flex gap-[1rem] text-[#787878] cursor-pointer',
  space: 'w-[.5rem]',
  bannerContainer: 'h-[18rem] w-full grid center overflow-hidden mb-[2rem]',
  articleMainContainer: 'flex flex-col gap-[1rem]',
  image: 'w-full h-full object-cover',
  title: 'font-bold text-3xl',
  subtitle: 'font-mediumSerifItalic text-[1.4rem] text-[#787878]',
  articleText: 'font-mediumSerif text-[1.3rem] text-[#292929]',
}

const ArticleMain = ({ post, author }: { post: Article; author: User }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.postHeaderContainer}>
          <div className={styles.authorContainer}>
            <div className={styles.authorProfileImageContainer}>
              <Image
                className={'object-cover'}
                src={Qazi}
                width={100}
                height={100}
                alt="articleImage"
              />
            </div>
            <div className={styles.column}>
              <div>{author?.data?.name}</div>
              <div className={styles.postDetails}>
                <span>
                  {new Date(post?.data?.postedOn).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'short',
                  })}{' '}
                  · {post?.data?.postLength} min read ·{' '}
                </span>
                <span className={styles.listenButton}>
                  <AiFillPlayCircle /> Listen
                </span>
              </div>
            </div>
          </div>
          <div className={styles.socials}>
            <IoLogoTwitter />
            <FaFacebook />
            <GrLinkedin />
            <HiOutlineLink />
            <div className={styles.space} />
            <BiBookmarks />
            <FiMoreHorizontal />
          </div>
        </div>
        <div className={styles.articleMainContainer}>
          <h1 className={styles.title}>{post?.data?.title}</h1>
          <h4 className={styles.subtitle}>{post?.data?.brief}</h4>
          <div className={styles.bannerContainer}>
            <Image
              className={styles.image}
              src={Banner}
              height={100}
              width={100}
              alt="banner"
            />
          </div>
          <div className={styles.articleText}>{post?.data?.body}</div>
        </div>
      </div>
    </div>
  )
}

export default ArticleMain
