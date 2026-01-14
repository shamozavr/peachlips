const AdvantageItem = ({item}) => {
  return (
    <li className="hero__advantages-item" key={item.id}>
      <h3 className="hero__advantages-title">{item.title}</h3>
      <p className="hero__advantages-description">{item.description}</p>
      <p className="hero__advantages-number">{`0${item.id}`}</p>
    </li>
  )
}

export default AdvantageItem