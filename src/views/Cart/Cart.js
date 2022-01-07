import './Cart.scss'
import Card from '../../components/Card'
import CartItem from './CartItem/CartItem'

function Cart({ cart, minus, plus, remove }) {

    function total(cart) {
        let totalPrice = cart.reduce((sum, item) => {

            return sum + item.price * item.count
        }, 0)


        return totalPrice
    }

    return (
        <Card heading="Your cart" total={total(cart)}>
            <div className='cart-list'>
                {
                    cart && cart.length > 0 && cart.map(item => {
                        return <CartItem
                            key={item.id}
                            item={item}
                            minus={minus}
                            plus={plus}
                            remove={remove}
                        />
                    }) || <span className='cart-list-empty'>Your cart is empty.</span>
                }

            </div>
        </Card>
    )
}

export default Cart