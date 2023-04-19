import { createContext, useEffect, useState, ReactNode } from 'react'
import { getDocs, collection, setDoc, doc } from 'firebase/firestore'
import { db } from '../firebase'
import { User, Article } from '@/types'

interface MediumContextType {
  users: User[]
  posts: Article[]
}

interface Props {
  children: ReactNode
}

const MediumContext = createContext<MediumContextType>({ users: [], posts: [] })

const MediumProvider = ({ children }: Props) => {
  const [users, setUsers] = useState<User[]>([])
  const [posts, setPosts] = useState<Article[]>([])

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

  return (
    <MediumContext.Provider value={{ users, posts }}>
      {children}
    </MediumContext.Provider>
  )
}

export { MediumContext, MediumProvider }
