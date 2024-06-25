import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { CardPurchases } from '../components/cardPurchases'
import { Title } from '../components/title'
import { usePurchases } from '../hooks/usePurchases'
import { BackButton } from '../components/backButton'

export const Purchases = () => {
  const { getPurchases } = usePurchases()
  const [state, setState] = useState(getPurchases())
  const error = useSelector((state: RootState) => state.books.error)
  const isLoading = useSelector((state: RootState) => state.books.isLoading)

  useEffect(() => {
    setState(getPurchases())
  }, [])

  // useEffect(() => {
  //   if (state) return
  //   console.log(state)
  //   dispatch(fetchBooks())
  // }, [dispatch])

  const renderBooks = () => {
    if (!Array.isArray(state)) return <div>Not Found</div>

    if (isLoading) return <div>Loading...</div>

    if (error) return <div className="alert alert-danger">{error}</div>

    return <>{state?.map((book) => <CardPurchases key={book.isbn13} isbn13={book.isbn13} image={book.image} title={book.title} subtitle={book.subtitle} price={book.price} url={book.url} name={book.name} message={book.message}/>)}</>
  }

  return (
    <>
      <div className="button-back">
        <BackButton />
      </div>
      <Title>Your cart</Title>
      <div className="wrapper-cards" style={{ padding: '10px' }}>
        {renderBooks()}
      </div>
    </>
  )
}
