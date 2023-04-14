import ReadersNav from '../../components/ReadersNav'
import Recommendations from '../../components/Recommendations'
import ArticleMain from '@/components/ArticleMain'

const styles = {
  wrapper: 'flex-col',
  content: 'flex',
}

const Post = () => {
  return (
    <div className={styles.wrapper}>
      <ReadersNav />
      <div className={styles.content}>
        <ArticleMain />
        <Recommendations author="test" />
      </div>
    </div>
  )
}

export default Post
