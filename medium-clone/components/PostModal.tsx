import { MediumContext } from '../context/MediumContext'
import { useState, useContext } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'

const styles = {
  wrapper:
    'w-[70rem] h-[50rem] flex flex-col justify-start items-center gap-[1rem] p-[1rem] font-mediumSerif overflow-scroll',
  title: 'my-[2rem] font-bold text-3xl',
  smallField: 'w-full flex justify-betweem gap-[1rem]',
  fieldTitle: 'flex-1 text-end',
  inputContainer: 'flex-[5] h-min border-2 border-[#787878]',
  inputField: 'w-full border-0 outline-none bg-transparent',
  accentedButton: 'bg-black text-white py-2 px-4 rounded-full',
}

const PostModal = () => {
  const { currentUser } = useContext(MediumContext)

  const [title, setTitle] = useState('')
  const [brief, setBrief] = useState('')
  const [bannerImage, setBannerImage] = useState('')
  const [category, setCategory] = useState('')
  const [readTime, setReadTime] = useState('')
  const [articleText, setArticleText] = useState('')

  const addPostToFirebase = async (event) => {
    event.preventDefault()

    await addDoc(collection(db, 'articles'), {
      bannerImage: bannerImage,
      body: articleText,
      brief: brief,
      category: category,
      postedOn: serverTimestamp(),
      postLength: Number(readTime),
      title: title,
      author: currentUser?.email,
    })
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Create a new post</div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Title</span>
        <span className={styles.inputContainer}>
          <input
            className={styles.inputField}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </span>
      </div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Brief</span>
        <span className={styles.inputContainer}>
          <input
            className={styles.inputField}
            type="text"
            value={brief}
            onChange={(e) => setBrief(e.target.value)}
          />
        </span>
      </div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Banner Image URL</span>
        <span className={styles.inputContainer}>
          <input
            className={styles.inputField}
            type="text"
            value={bannerImage}
            onChange={(e) => setBannerImage(e.target.value)}
          />
        </span>
      </div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Category</span>
        <span className={styles.inputContainer}>
          <input
            className={styles.inputField}
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </span>
      </div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Estimated Read Time(minutes)</span>
        <span className={styles.inputContainer}>
          <input
            className={styles.inputField}
            type="text"
            value={readTime}
            onChange={(e) => setReadTime(e.target.value)}
          />
        </span>
      </div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Article Text</span>
        <span className={styles.inputContainer}>
          <textarea
            className={styles.inputField}
            rows={12}
            value={articleText}
            onChange={(e) => setArticleText(e.target.value)}
          />
        </span>
      </div>
      <button onClick={addPostToFirebase} className={styles.accentedButton}>
        Submit
      </button>
    </div>
  )
}

export default PostModal
