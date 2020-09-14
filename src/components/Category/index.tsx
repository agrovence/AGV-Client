import React from 'react'

// import api from '../../services/apiClient'
import { trimbleLogo } from '../../assets/representantes'

interface ICategory {
  id: string
  name: string
  border_color: string
  category_logo_url: string
}

interface IProps {
  category?: ICategory
}

const Category: React.FC<IProps> = ({ category }: IProps) => {
  // const [isAvailable, setIsAvailable] = useState(food.available)

  return (
    <div className="col-lg-3 col-md-6 mb-5">
      <a className="card lift border-bottom-lg border-light" href="#!">
        <div className="card-body text-center">
          <div className="icon-stack icon-stack-xl bg-light text-white mb-2">
            {/* <i className="fas fa-home"></i> */}
            <img src={trimbleLogo} style={{ width: '80%' }} />
          </div>
          <div className="small text-gray-600">Trimble</div>
        </div>
      </a>
    </div>
  )
}

export default Category
