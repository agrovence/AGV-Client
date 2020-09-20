import React, { InputHTMLAttributes } from 'react'

// import api from '../../services/apiClient'

import {
  agvLogo,
  headsightLogo,
  precisionLogo,
  shredLogo,
  trimbleLogo,
} from '../../assets/representantes'

interface RepresentantesProps extends InputHTMLAttributes<HTMLInputElement> {
  containerStyle?: object
}

const Representantes: React.FC<RepresentantesProps> = ({
  containerStyle = {},
}: RepresentantesProps) => {
  // const [isAvailable, setIsAvailable] = useState(food.available)

  return (
    <div style={containerStyle}>
      <img src={agvLogo} style={{ width: '20%' }} />
      <img src={headsightLogo} style={{ width: '20%' }} />
      <img src={precisionLogo} style={{ width: '20%' }} />
      <img src={shredLogo} style={{ width: '20%' }} />
      <img src={trimbleLogo} style={{ width: '20%' }} />
    </div>
  )
}

export default Representantes
