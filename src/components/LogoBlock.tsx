import { Link } from 'react-router-dom'
import hazeLogo from '../assets/haze-logo.webp'

type LogoBlockProps = {
  className?: string
  showMark?: boolean
}

export function LogoBlock({ className = '', showMark = true }: LogoBlockProps) {
  return (
    <Link aria-label="HazeLink início" className={`logo-block ${className}`.trim()} to="/">
      {showMark && (
        <span className="logo-mark">
          <img src={hazeLogo} alt="Símbolo HazeLink" />
        </span>
      )}
      <span className="logo-word">
        Haze<span>Link</span>
      </span>
    </Link>
  )
}
