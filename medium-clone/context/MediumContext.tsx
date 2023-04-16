import { createContext, useEffect, useState } from 'react'
import { getDocs, collection, setDoc, doc } from 'firebase/firestore'
import { db } from '../firebase'

interface User {
  id: string
  data: {
    [key: string]: any
  }
}

interface Post {
  id: string
  data: {
    [key: string | number]: any
  }
}

interface MediumContextType {
  users: User[]
  posts: Post[]
}

const MediumContext = createContext<MediumContextType>({ users: [], posts: [] })

const MediumProvider = ({ children }) => {
  const [users, setUsers] = useState<User[]>([])
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const getUsers = async () => {
      const querySnapshot = await getDocs(collection(db, 'articles'))

      setUsers(
        querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: { ...doc.data() },
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

  return (
    <MediumContext.Provider value={{ users, posts }}>
      {children}
    </MediumContext.Provider>
  )
}

export { MediumContext, MediumProvider }
