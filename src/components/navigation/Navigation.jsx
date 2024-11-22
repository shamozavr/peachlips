import Logo from './Logo';
import Links from './Links'
import Socials from './Socials';
import Toggle from './Toggle';
const Navigation = () => {
  return (
  <nav className='navbar navbar-expand-xl'>
    <div className="container-fluid">
      <h1 className='collapse'>Peachlips</h1>
      <Logo />
      <Toggle />
      <Links />
      <Socials />
    </div>
  </nav>
  );
}

export default Navigation;