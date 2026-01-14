import AdvantageItem from "./AdvantageItem.jsx"

const AdvantageList = () => {
  const data = [
    { id:1, title: 'Естественный результат', description: 'Современные техники и высококачественные материалы обеспечивают естественный и привлекательный вид.' },
    { id:2, title: 'Экономия времени', description: `Утренние сборы становятся быстрее и проще, так как вам не нужно тратить время на макияж.` },
    { id:3, title: 'Долговечность', description: 'Перманентный макияж сохраняет идеальный вид на длительное время, избавляя от необходимости ежедневного макияжа.' }
  ]

  const list = data.map((item) => (
    <AdvantageItem item={item}/>
  ))

  return (
    <ul className="hero__advantages-list list-group d-flex">
      {list}
    </ul>
  )
}

export default AdvantageList