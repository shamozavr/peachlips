import VkIcon from "./icons/social-icons/Vk"
import InstIcon from "./icons/social-icons/Instagran"
import WhatsappIcon from "./icons/social-icons/WhatsApp"
import PhoneIcon from "./icons/social-icons/Phone"

const Socials = () => {
  return (
    <div className='socials collapse navbar-collapse' id='navbarNav'>
      <ul className='socials__list navbar-nav me-auto d-flex p-0 m-0 gap-0 column-gap-3'>
        <li className='socials__item nav-item'>
          <a className='socials__link nav-link p-0 m-0' href='#'>
            <VkIcon />
          </a>
        </li>
        <li className='socials__item nav-item'>
          <a className='socials__link nav-link p-0 m-0' href='#'>
            <InstIcon />
          </a>
        </li>
        <li className='socials__item nav-item'>
          <a className='socials__link nav-link p-0 m-0' href='#'>
            <WhatsappIcon />
          </a>
        </li>
        <li className='socials__item nav-item'>
          <a className='socials__link nav-link p-0 m-0' href='#'>
            <PhoneIcon />
          </a>
        </li>
      </ul>
    </div>    
  )
}

export default Socials