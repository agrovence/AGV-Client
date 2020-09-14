import React from 'react'

// import api from '../../services/apiClient'

interface IProduct {
  id: string
  name: string
  avatar_url: string
}

interface IProps {
  product?: IProduct
}

const Product: React.FC<IProps> = ({ product }: IProps) => {
  // const [isAvailable, setIsAvailable] = useState(food.available)

  return (
    <div className="col-xl-3 col-lg-4 col-md-6 mb-5">
      <a className="card lift h-100" href="#!">
        <div className="card-flag card-flag-dark card-flag-top-right card-flag-lg">
          R$115
        </div>
        <img
          className="card-img-top"
          src="https://agriculture.trimble.com/wp-content/uploads/2019/01/ezsteer-trimble-ag-inset-1.png"
          alt="..."
        />
        <div className="card-body p-3">
          <div className="card-title small mb-0">GPS Ez Guide 250</div>
          <div className="text-xs text-gray-500">2 dias atrás</div>
        </div>
      </a>
    </div>
  )
}

export default Product
