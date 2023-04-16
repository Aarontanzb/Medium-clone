import Header from '@/components/Header'
import Banner from '@/components/Banner'
import PostCard from '@/components/PostCard'
import { useContext } from 'react'
import { MediumContext } from '@/context/MediumContext'
import { v4 as uuidv4 } from 'uuid'

const styles = {
  postsLists:
    'flex flex-col gap-3 p-2 sim:grid-cols-2 md:gap-6 md:p-10 lg:grid-cols-3',
  container: 'max-w-7xl flex-1',
  main: 'flex justify-center',
  wrapper: 'mx-auto',
}

export default function Home() {
  const { posts } = useContext(MediumContext)
  return (
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
  )
}
