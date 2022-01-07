import './ProductItem.scss'

import checkIcon from '../../../assets/images/check.png'

function ProductItem({ product, addCart, isInCart }) {
    let { color, description, image, name, price } = product

    return (
        <div className='product'>
            <div className='product__img'
                style={{
                    backgroundColor: color,
                }}
            >
                <img src={image} />
            </div>
            <div className='product__title'>{name}</div>
            <div className='product__des'>{description}</div>
            <div className='product__footer'>
                <span className='product__price'>${price.toFixed(2)}</span>
                {
                    isInCart ?
                        (
                            <div className='btn product__btn-check'>
                                <img src={checkIcon} />
                            </div>
                        )
                        :
                        (
                            <div className='btn product__btn-add'
                                onClick={() => addCart(product)}
                            >ADD TO CART</div>
                        )
                }


            </div>
        </div>
    )
}

export default ProductItem