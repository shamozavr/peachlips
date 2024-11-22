import logo from '../../assets/logo.png'

const Logo = () => {
  return (
    <a className="logo navbar-brand" href="#">
      <img src={logo} width="128" height="74" alt="логотип" />
    </a>
  )
}

export default Logo