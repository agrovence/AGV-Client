import React, { useState } from 'react'

import { FiEdit3, FiTrash } from 'react-icons/fi'

import { Container, ProductSection } from './styles'
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
    <Container>
      <ProductSection>
        <div>
          <img
            src="https://agriculture.trimble.com/wp-content/uploads/2019/01/ezsteer-trimble-ag-inset-1.png"
            alt="EZ Guide 250"
          />
        </div>

        <section>
          <h2>EZ Guide 250</h2>

          <a>
            <b>Ver mais detalhes</b>
          </a>
        </section>
      </ProductSection>
    </Container>
  )
}

export default Product
