import Image from 'next/image'
import Logo from '../static/logo.png'
import { FiBookmark } from 'react-icons/fi'
import Link from 'next/link'
import { db } from '../firebase'
import { getDoc, doc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Article, UserData } from '@/types'

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
  thumbnailContainer: 'flex-1',
  wrapper:
    'flex max-w-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer',
}

const PostCard = ({ post }: { post: Article }) => {
  const [authorData, setAuthorData] = useState<UserData>({} as UserData)

  useEffect(() => {
    const getAuthorData = async () => {
      const authorDoc = await getDoc(doc(db, 'users', post.data.author))
      const authorDocData = authorDoc?.data()
      if (authorDocData) {
        setAuthorData(authorDocData as UserData)
      }
    }
    getAuthorData()
  }, [post])
  return (
    <Link href={`/post/${post.id}`}>
      <div className={styles.wrapper}>
        <div className={styles.postDetails}>
          <div className={styles.authorContainer}>
            <div className={styles.authorImageContainer}>
              {authorData.imageUrl && (
                <Image
                  className={styles.authorImage}
                  src={authorData.imageUrl}
                  height={40}
                  width={40}
                  alt="Author img"
                />
              )}
            </div>
            <div className={styles.authorName}>{authorData?.name}</div>
          </div>
          <h1 className={styles.title}>{post.data.title}</h1>
          <div className={styles.briefing}>{post.data.brief}</div>
          <div className={styles.detailsContainer}>
            <span className={styles.articleDetails}>
              {new Date(post.data.postedOn).toLocaleString('en-US', {
                day: 'numeric',
                month: 'short',
              })}{' '}
              · {post.data.postLength} min read ·{' '}
              <span className={styles.category}>{post.data.category}</span>
            </span>
            <span className={styles.bookmarkContainer}>
              <FiBookmark className="h-5 w-5" />
            </span>
          </div>
        </div>
        <div className={styles.thumbnailContainer}>
          <Image
            src={post.data.bannerImage}
            height={100}
            width={200}
            alt="PostCard img"
          />
        </div>
      </div>
    </Link>
  )
}

export default PostCard
