import Image from 'next/image'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdMarkEmailUnread } from 'react-icons/md'
import ReplitLogo from '../static/replit.png'
import TutorialImg from '../static/tutorial.jpg'
import CPLogo from '../static/cp.png'
import Qazi from '../static/qazi.jpg'
import JSLogo from '../static/jsLogo.png'

const styles = {
  wrapper: 'h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem]',
  accentedButton:
    'flex items-center justify-center text-sm bg-black text-white my-[2rem] py-[.6rem] rounded-full',
  searchBar:
    'flex items-center gap-[.6rem] h-[2.6rem] border px-[1rem] rounded-full bg-white',
  searchInput: 'border-none outline-none bg-none w-full',
  authorContainer: 'my-[2rem]',
  authorProfileImageContainer: 'w-[5rem] h-[5rem] rounded-full overflow-hidden',
  authorName: 'font-semibold mb-[.2rem] mt-[1rem]',
  authorFollowing: 'text-[#787878]',
  authorActions: 'flex gap-[.6rem] my-[1rem]',
  actionButton:
    'bg-[#1A8917] text-white rounded-full px-[1rem] py-[.6rem] text-sm',
  title: 'font-semibold',
  recommendationAuthorProfileImageContainer:
    'rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]',
  recommendationAuthorName: 'text-sm',
  recommendationAuthorContainer: 'flex items-center gap-[.6rem]',
  recommendationTitle: 'font-bold',
  recommendationThumbnailContainer:
    'flex flex-1 items-center justify-center h-[4rem] w-[4rem]',
  recommendationThumbnail: 'object-cover',
  articleContentWrapper:
    'flex items-center justify-between cursor-pointer my-[1rem]',
  articleContent: 'flex-[4]',
}

type AuthorProp = {
  name: string
}

const Recommendations = ({ author }: { author: string }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.accentedButton}>Get unlimited Access</div>
      <div className={styles.searchBar}>
        <AiOutlineSearch />
        <input
          className={styles.searchInput}
          placeholder="Search"
          type="text"
        />
      </div>
      <div className={styles.authorContainer}>
        <div className={styles.authorProfileImageContainer}>
          <Image src={Qazi} alt="Qazi" width={100} height={100} />
        </div>
        <div className={styles.authorName}>Aaron Tan</div>
        <div className={styles.authorFollowing}>1M Followers</div>
        <div className={styles.authorActions}>
          <button className={styles.actionButton}>Follow</button>
          <button className={styles.actionButton}>
            <MdMarkEmailUnread></MdMarkEmailUnread>
          </button>
        </div>
      </div>
      <div className={styles.recommendationContainer}>
        <div className={styles.title}>More from Medium</div>
        <div className={styles.articlesContainer}>
          <div className={styles.articleContentWrapper}>
            <div className={styles.articleContent}>
              <div className={styles.recommendationAuthorContainer}>
                <div
                  className={styles.recommendationAuthorProfileImageContainer}
                >
                  <Image src={Qazi} height={100} width={100} alt="img" />
                </div>
                <div className={styles.recommendationAuthorName}>Aaron Tan</div>
              </div>
              <div className={styles.recommendationTitle}>
                The Ultimate guide to Hypotenuse AI
              </div>
            </div>
            <div className={styles.recommendationThumbnailContainer}>
              <Image
                className={styles.recommendationThumbnail}
                src={JSLogo}
                height={100}
                width={100}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recommendations
