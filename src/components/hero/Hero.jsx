import Header from "./Header"
import Moto from "./Moto"
import Button from "./Button"
import MasterSticker from "./MasterSticker"
import AdvantageList from "./AdvantageList"

const Hero = () => {
  return (
    <div className="hero container d-flex flex-column align-items-center">
      <div className="hero__wrapper d-flex flex-column">
        <div className="hero__column d-flex flex-column">
          <Header />
          <Moto />
          <Button />
          <MasterSticker />
        </div>
        <AdvantageList />
      </div>
    </div>
  )
}

export default Hero