import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Recommendations from '@/components/Recommendations'
import PostCard from '@/components/PostCard'
import { useContext } from 'react'
import { MediumContext } from '@/context/MediumContext'

const styles = {
  postsLists:
    'flex flex-col gap-3 p-2 sim:grid-cols-2 md:gap-6 md:p-10 lg:grid-cols-3',
  container: 'max-w-7xl flex',
  main: 'flex justify-center',
  wrapper: 'mx-auto',
}

export default function Home() {
  const { posts, currentUser } = useContext(MediumContext)
  return (
    <div>
      {currentUser ? (
        <div className={styles.wrapper}>
          <Header />
          <div className={styles.main}>
            <div className={styles.container}>
              <div className={styles.postsLists}>
                {posts.map((post) => (
                  <PostCard post={post} key={post.id} />
                ))}
              </div>
              <Recommendations />
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.wrapper}>
          <Header />
          <Banner />
          <div className={styles.main}>
            <div className={styles.container}>
              <div className={styles.postsLists}>
                {posts.map((post) => (
                  <PostCard post={post} key={post.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
