import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../redux/store'
import { IBookPreview } from '../../types/ICardPreview'
import { toggleFavoriteById } from '../../redux/book-slice'
import Back from '../../icons/back'
import Heart from '../../icons/heart'
import './index.scss'

export function CardPreview (props: IBookPreview) {
  const dispatch = useDispatch<AppDispatch>()

  const handleClickHeart = (props): void => {
    console.log('Click')
    dispatch(toggleFavoriteById(props.isbn13))
  }
  return (
    <>
        <div className="wrapper-card-preview" id={props.isbn13}>
            <div className="title-and-button">
                <div className="button-back"><Back /></div>
                <div className="title-card-preview">{props.title}</div>
            </div>
            <div className="information-card-preview">
                <div className="wrap-img-card-preview">
                    <button className="wrap-heart" onClick={handleClickHeart}>
                        <Heart />
                    </button>
                    <img className="img-card-preview" src={props.image} />
                </div>
                <div className="description-card-preview">
                    <div className="wrap-price-card-preview">
                        <p className="price-card-preview">{props.price}</p>
                    </div>
                    <div className="wrap-additional-information-card-preview">
                        <div className="wrap-info">
                            <p className="name authors">Authors</p>
                            <p className="description name-authors">{props.authors}</p>
                        </div>
                        <div className="wrap-info">
                            <p className="name publisher">Publisher</p>
                            <p className="description name-publisher">{props.publisher}</p>
                        </div>
                        <div className="wrap-info">
                            <p className="name language">Language</p>
                            <p className="description name-language">English</p>
                        </div>
                        <div className="wrap-info">
                            <p className="name format">Format</p>
                            <p className="description name-format">Paper book / book (PDF)</p>
                        </div>
                        <div className="wrap-button">
                            <button className="button-add-cart">ADD TO CARD</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="description-book">
                <p className="text-book">{props.desc}</p>
            </div>
        </div>
    </>
  )
}
