import { Choices } from './styles'

const SideBarChoice = ({title, Icon}) => {
  return (
    <Choices>
      {
        Icon && <Icon/>
      }
      {
        Icon ? <h4>{title}</h4> : <h5>{title}</h5>
      }
      
    </Choices>
  )
}

export default SideBarChoice