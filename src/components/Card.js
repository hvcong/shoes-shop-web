import './Card.scss'
import nike from '../assets/images/nike.png'

function Card({ heading, total, children }) {

    return (
        <div className='card'>
            <div className="card__logo">
                <img className="card__logo-img" src={nike} />
            </div>
            <div className="card__heading">
                {heading}
                {total !== undefined && total === 0 && <span className="card__heading-total">$0.00</span>}
                {total > 0 && <span className="card__heading-total">${total.toFixed(2)}</span>}

            </div>
            <div className="card__body">
                {children}
            </div>
        </div>
    )
}

export default Card