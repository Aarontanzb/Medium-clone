import { createContext, useEffect, useState } from 'react'
import { getDocs, collection, setDoc, doc } from 'firebase/firestore'
import { db, auth, provider } from '../firebase'
import { User, Article, MediumContextType, Props, LoggedUser } from '@/types'
import { signInWithPopup } from 'firebase/auth'

const MediumContext = createContext<MediumContextType>({
  users: [],
  posts: [],
  handleUserAuth: () => Promise.resolve(),
  currentUser: {},
})

const MediumProvider = ({ children }: Props) => {
  const [users, setUsers] = useState<User[]>([])
  const [posts, setPosts] = useState<Article[]>([])
  const [currentUser, setCurrentUser] = useState<LoggedUser>()

  useEffect(() => {
    const getUsers = async () => {
      const querySnapshot = await getDocs(collection(db, 'users'))

      setUsers(
        querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: {
              email: doc.data().email,
              followerCount: doc.data().followerCount,
              imageUrl: doc.data().imageUrl,
              name: doc.data().name,
            },
          }
        })
      )
    }
    getUsers()
  }, [])

  useEffect(() => {
    const getPosts = async () => {
      const querySnapshot = await getDocs(collection(db, 'articles'))

      setPosts(
        querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: {
              body: doc.data().body,
              brief: doc.data().brief,
              category: doc.data().category,
              postLength: doc.data().postLength,
              bannerImage: doc.data().bannerImage,
              title: doc.data().title,
              postedOn: doc.data().postedOn.toDate(),
              author: doc.data().author,
            },
          }
        })
      )
    }
    getPosts()
  }, [])

  const addUserToFirebase = async (user: LoggedUser) => {
    await setDoc(doc(db, 'users', user.email), {
      email: user.email,
      name: user.displayName,
      imageUrl: user.photoURL,
      followerCount: 1,
    })
  }

  const handleUserAuth = async () => {
    const userData = await signInWithPopup(auth, provider)
    const user = userData.user
    setCurrentUser(user)
    addUserToFirebase(user)
  }

  return (
    <MediumContext.Provider
      value={{ users, posts, handleUserAuth, currentUser }}
    >
      {children}
    </MediumContext.Provider>
  )
}

export { MediumContext, MediumProvider }
