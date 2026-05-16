import { useEffect } from 'react'
import Typed from 'typed.js'

export const useTyped = (elementRef, options = {}) => {
  useEffect(() => {
    const defaultOptions = {
      loop: true,
      typeSpeed: 100,
      backSpeed: 70,
      backDelay: 1000,
    }

    const typed = new Typed(elementRef.current, {
      ...defaultOptions,
      ...options,
    })

    return () => {
      typed.destroy()
    }
  }, [elementRef, options])
}
