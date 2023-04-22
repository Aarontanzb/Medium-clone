import { useContext, useEffect, useState } from 'react'
import ReadersNav from '../../components/ReadersNav'
import Recommendations from '../../components/Recommendations'
import ArticleMain from '@/components/ArticleMain'
import { MediumContext } from '@/context/MediumContext'
import { useRouter } from 'next/router'
import { Article, User } from '@/types'

const styles = {
  wrapper: 'flex flex-col',
  content: 'flex ',
}

const Post = () => {
  const { posts, users } = useContext(MediumContext)
  const router = useRouter()
  const [post, setPost] = useState<Article>({} as Article)
  const [author, setAuthor] = useState<User>({} as User)

  useEffect(() => {
    if (posts.length === 0) {
      return
    }

    const singlePost = posts.find((post) => post.id === router?.query?.slug)
    if (singlePost) {
      setPost(singlePost)
    }

    const singleAuthor = users.find((user) => user.id === post?.data?.author)
    if (singleAuthor) {
      setAuthor(singleAuthor)
    }
  }, [post?.data?.author, posts, router?.query?.slug, users])
  return (
    <div className={styles.wrapper}>
      <ReadersNav />
      <div className={styles.content}>
        <ArticleMain post={post} author={author} />
        <Recommendations />
      </div>
    </div>
  )
}

export default Post
