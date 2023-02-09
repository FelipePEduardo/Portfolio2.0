import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface userProps {
  html_url: string
  bio: string
}

interface ProfileContextType {
  user: userProps
}

export const ProfileContext = createContext({} as ProfileContextType)

interface ProfileContextProviderProps {
  children: ReactNode
}

export function ProfileContextProvider({
  children,
}: ProfileContextProviderProps) {
  const [user, setUser] = useState({} as userProps)

  useEffect(() => {
    const fetchApi = async () => {
      const response = await api.get('')

      setUser(response.data)
    }

    fetchApi()
  }, [])

  return (
    <ProfileContext.Provider value={{ user }}>
      {children}
    </ProfileContext.Provider>
  )
}
