import ToggleIcon from './icons/ToggleIcon.jsx'

const Toggle = () => {
  return (
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <ToggleIcon />
    </button>
    
  )
}

export default Toggle