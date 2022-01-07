import './CartItem.scss'

import trashImage from '../../../assets/images/trash.png'
import { useRef } from 'react'

function CartItem({ item, minus, plus, remove }) {
    let { id, color, image, name, price, count } = item

    const itemRef = useRef()

    function handleRemove(id) {
        itemRef.current.style.animation = 'fadeOut 0.6s ease forwards'
        setTimeout(() => {
            remove(id)
        }, 600)
    }


    return (
        <div className='cart__item' ref={itemRef}>
            <div className='cart__item-left'>
                <div className='cart__item-left-img'
                    style={{
                        backgroundColor: color,
                    }}
                >
                    <img src={image} />
                </div>
            </div>
            <div className='cart__item-right'>
                <div className='cart__item-title'>{name}</div>
                <div className='cart__item-price'>${price.toFixed(2)}</div>
                <div className='cart__item-group'>
                    <div className='cart__item-group-left'>
                        <span className='cart__item-group-left-btn'
                            onClick={() => {
                                if (count > 1) minus(id)
                                else handleRemove(id)
                            }}
                        >-</span>
                        <span className='cart__item-group-left-number'>{count}</span>
                        <span className='cart__item-group-left-btn'
                            onClick={() => plus(id)}
                        >+</span>
                    </div>
                    <div className='cart__item-group-right'
                        onClick={() => handleRemove(id)}
                    >
                        <div className='btn cart__item-group-right-btn'

                        >
                            <img src={trashImage} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem