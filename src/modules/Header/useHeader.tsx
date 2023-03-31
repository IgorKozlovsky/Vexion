import { useState } from 'react'

const useHeader = () => {
  const [openNavigation, setNavigationOpen] = useState<boolean>(false)

  const handleMenu = (isBurger: boolean): void => {
    const body = document.querySelector('body') as HTMLBodyElement
    body.style.overflow = isBurger && !openNavigation ? 'hidden' : ''

    setNavigationOpen(isBurger && !openNavigation)
  }

  return { openNavigation, handleMenu }
}

export default useHeader
