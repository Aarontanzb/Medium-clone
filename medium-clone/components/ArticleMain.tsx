import Image from 'next/image'
import Qazi from '../static/qazi.jpg'
import { AiFillPlayCircle } from 'react-icons/ai'

const styles = {
  wrapper: 'flex items-center justify-center flex-[3] border-l border-r',
  content: 'h-screen p-[2rem]',
}

const ArticleMain = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.postHeaderContainer}>
          <div className={styles.authorContainer}></div>
          <div className={styles.authorProfileImageContainer}>
            <Image
              className={styles.image}
              src={Qazi}
              width={100}
              height={100}
              alt="articleImage"
            />
          </div>
          <div className={styles.column}>
            <div>Aaron Tan</div>
            <div className={styles.postDetails}>
              <span>
                April 6 · 5 min read ·{' '}
                <span className={styles.listenButton}>
                  <AiFillPlayCircle /> Listen
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleMain
