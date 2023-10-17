import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'

import * as S from './styles'

type Props = {
  favoritos: ProdutoType[]
  estaNosFavoritos: ProdutoType[]
}

const ProdutosComponent = ({ favoritos }: Props) => {
  const { data: produtos, isLoading } = useGetProdutosQuery()
  if (isLoading) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
