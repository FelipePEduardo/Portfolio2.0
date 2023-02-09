import { createContext, ReactNode, useEffect, useState } from 'react'

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
      const response = await fetch(
        'https://api.github.com/users/FelipePEduardo',
      )
      const data = await response.json()
      setUser(data)
    }

    fetchApi()
  }, [])

  return (
    <ProfileContext.Provider value={{ user }}>
      {children}
    </ProfileContext.Provider>
  )
}
