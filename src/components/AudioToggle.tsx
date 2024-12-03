import { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Volume2, VolumeX } from 'lucide-react'

export default function AudioToggle() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  // const toggleMute = () => {
  //   if (audioRef.current) {
  //     audioRef.current.muted = !isMuted
  //     setIsMuted(!isMuted)
  //   }
  // }

  // Add useEffect to play audio on component mount
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play()
      setIsPlaying(true)
    }
  }, [])

  return (
    <div className="flex flex-col items-center ">
      <audio ref={audioRef} src="/Hooponopono.mp3" loop />
      {/* <Button onClick={togglePlayPause} variant="outline">
        {isPlaying ? 'Pause' : 'Play'}
      </Button> */}
      <Button onClick={togglePlayPause} variant="outline" className="w-12 h-12 rounded-full p-0">
        {!isPlaying ? (
          <VolumeX className="h-6 w-6" />
        ) : (
          <Volume2 className="h-6 w-6" />
        )}
      </Button>
    </div>
  )
}