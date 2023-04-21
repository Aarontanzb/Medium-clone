import Image from 'next/image'
import { MdMarkEmailUnread } from 'react-icons/md'
import ReplitLogo from '../static/replit.png'
import TutorialImg from '../static/tutorial.jpg'
import CPLogo from '../static/cp.png'
import Qazi from '../static/qazi.jpg'
import JSLogo from '../static/jsLogo.png'
import { v4 as uuidv4 } from 'uuid'

const styles = {
  wrapper:
    'h-screen min-w-[10rem] flex-[1.2] p-[2rem] pr-[14.3rem] sticky top-0 border-l',
  accentedButton:
    'flex items-center justify-center text-sm bg-black text-white my-[.5rem] py-[.6rem] rounded-full w-[19rem]',
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
  recommendationThumbnail: 'object-cover h-[4rem] w-[4rem]',
  articleContentWrapper: 'flex items-center cursor-pointer my-[1rem]',
  articleContent: 'flex-[2]',
}

const Recommendations = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.accentedButton}>Get unlimited Access</div>
      <div className={styles.authorContainer}>
        <div className={styles.authorProfileImageContainer}>
          <Image src={Qazi} alt="Qazi" width={100} height={100} />
        </div>
        <div className={styles.authorName}>Aaron Tan</div>
        <div className={styles.authorFollowing}>
          1M Followers
          <h4>
            8M+ Views on Medium || Early Bird Discount: Make money by writing
            about AI, programming,
          </h4>
        </div>
        <div className={styles.authorActions}>
          <button className={styles.actionButton}>Follow</button>
          <button className={styles.actionButton}>
            <MdMarkEmailUnread></MdMarkEmailUnread>
          </button>
        </div>
      </div>
      <div>
        <div className={styles.title}>More from Medium</div>
        <div>
          {recommendedPosts.map((post) => (
            <div className={styles.articleContentWrapper} key={uuidv4()}>
              <div className={styles.articleContent}>
                <div className={styles.recommendationAuthorContainer}>
                  <div
                    className={styles.recommendationAuthorProfileImageContainer}
                  >
                    <Image
                      src={post.author.image}
                      height={100}
                      width={100}
                      alt="img"
                    />
                  </div>
                  <div className={styles.recommendationAuthorName}>
                    {post.author.name}
                  </div>
                </div>
                <div className={styles.recommendationTitle}>{post.title}</div>
              </div>
              <div className={styles.recommendationThumbnailContainer}>
                <Image
                  className={styles.recommendationThumbnail}
                  src={post.image}
                  height={50}
                  width={50}
                  alt="img"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Recommendations

const recommendedPosts = [
  {
    title: 'What can you do with Hypotenuse Ai?',
    image: ReplitLogo,
    author: {
      name: 'Aaron Tan',
      image: CPLogo,
    },
  },
  {
    title: 'The Ultimate guide to Hypotenuse AI',
    image: TutorialImg,
    author: {
      name: 'Aaron Tan',
      image: Qazi,
    },
  },
  {
    title: 'How to get started with Hypotenuse Ai?',
    image: JSLogo,
    author: {
      name: 'Aaron Tan',
      image: CPLogo,
    },
  },
]
