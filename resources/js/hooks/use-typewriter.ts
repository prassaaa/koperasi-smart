import { useState, useEffect } from 'react'

interface UseTypewriterOptions {
  text: string
  speed?: number
  delay?: number
  loop?: boolean
  deleteSpeed?: number
  deleteDelay?: number
}

export function useTypewriter({
  text,
  speed = 100,
  delay = 0,
  loop = false,
  deleteSpeed = 50,
  deleteDelay = 1000,
}: UseTypewriterOptions) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!text) return

    // Handle initial delay
    if (!hasStarted) {
      const initialTimeout = setTimeout(() => {
        setHasStarted(true)
      }, delay)
      return () => clearTimeout(initialTimeout)
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing phase
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1))
          setCurrentIndex(currentIndex + 1)
        } else {
          setIsComplete(true)
          if (loop) {
            setTimeout(() => {
              setIsDeleting(true)
              setIsComplete(false)
            }, deleteDelay)
          }
        }
      } else {
        // Deleting phase
        if (currentIndex > 0) {
          setDisplayText(text.slice(0, currentIndex - 1))
          setCurrentIndex(currentIndex - 1)
        } else {
          setIsDeleting(false)
          setIsComplete(false)
        }
      }
    }, isDeleting ? deleteSpeed : speed)

    return () => clearTimeout(timeout)
  }, [currentIndex, isDeleting, text, speed, delay, loop, deleteSpeed, deleteDelay, hasStarted])

  return {
    displayText,
    isComplete,
    isDeleting,
  }
}
