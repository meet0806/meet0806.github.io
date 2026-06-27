import { useEffect, useRef } from 'react'

const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260530_042513_df96a13b-6155-4f6e-8b93-c9dee66fba08.mp4'

const SENSITIVITY = 0.8

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const prevX = useRef<number | null>(null)
  const targetTime = useRef(0)
  const isSeeking = useRef(false)

  // Run the next seek only if the target has moved since the last one.
  // Driven by the `onSeeked` callback below to avoid flooding the element
  // with currentTime writes faster than it can decode.
  const seekNext = () => {
    const video = videoRef.current
    if (!video || isSeeking.current) return
    if (Math.abs(video.currentTime - targetTime.current) < 0.001) return

    isSeeking.current = true
    video.currentTime = targetTime.current
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const video = videoRef.current
      if (!video || !video.duration || Number.isNaN(video.duration)) {
        prevX.current = e.clientX
        return
      }

      if (prevX.current === null) {
        prevX.current = e.clientX
        return
      }

      const delta = e.clientX - prevX.current
      prevX.current = e.clientX

      const offset = (delta / window.innerWidth) * SENSITIVITY * video.duration
      let next = targetTime.current + offset
      next = Math.max(0, Math.min(video.duration, next))
      targetTime.current = next

      seekNext()
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleSeeked = () => {
    isSeeking.current = false
    seekNext()
  }

  return (
    <video
      ref={videoRef}
      className="fixed inset-0 z-0 h-full w-full object-cover"
      style={{ objectPosition: '70% center' }}
      src={VIDEO_SRC}
      muted
      playsInline
      preload="auto"
      onSeeked={handleSeeked}
    />
  )
}
