import Image from 'next/image'
import Logo from '../static/logo.png'
import { FiBookmark } from 'react-icons/fi'
import Link from 'next/link'

const styles = {
  authorContainer: 'flex gap-[0.5rem]',
  authorImageContainer:
    'grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]',
  authorImage: 'object-cover border-white',
  postDetails: 'flex-[2.5] flex flex-col',
  title: 'font-bold text-2xl',
  authorName: 'font-semibold',
  briefing: 'text-gray-500',
  detailsContainer: 'flex items-center justify-between text-[#787878 ]',
  articleDetails: 'text-[.8rem]',
  category: 'bg-[#F2F3F2] p-1 rounded-full',
  bookmarkContainer: 'cursor-pointer',
  thumbnailContainer: '',
  wrapper:
    'flex max-w-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer',
}

const PostCard = () => {
  return (
    <Link href={`/post/123`}>
      <div className={styles.wrapper}>
        <div className={styles.postDetails}>
          <div className={styles.authorContainer}>
            <div className={styles.authorImageContainer}>
              <Image
                className={styles.authorImage}
                src={Logo}
                height={40}
                width={40}
                alt="PostCard img"
              />
            </div>
            <div className={styles.authorName}>Aaron Tan</div>
          </div>
          <h1 className={styles.title}>
            7 Hypotenuse.AI uses for your everyday writer 2023
          </h1>
          <div className={styles.briefing}>
            Using the app is as simple as 123
          </div>
          <div className={styles.detailsContainer}>
            <span className={styles.articleDetails}>
              April 6 · 5 min read ·{' '}
              <span className={styles.category}>tools</span>
            </span>
            <span className={styles.bookmarkContainer}>
              <FiBookmark className="h-5 w-5" />
            </span>
          </div>
        </div>
        <div className={styles.thumbnailContainer}>
          <Image src={Logo} height={100} width={200} alt="PostCard img" />
        </div>
      </div>
    </Link>
  )
}

export default PostCard
