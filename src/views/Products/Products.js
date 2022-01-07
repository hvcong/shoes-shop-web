import './Products.scss'
import Card from '../../components/Card'
import ProductItem from './ProductItem/ProductItem'

function Products({ products, addCart, cart }) {

    return (
        <Card
            heading="Our Products"

        >
            <div className='products'>
                {
                    products && products.length > 0 && products.map(product => {
                        let index = -1

                        if (cart && cart.length > 0) {
                            index = cart.findIndex(item => item.id === product.id)
                        }

                        return <ProductItem
                            key={product.id}
                            product={product}
                            addCart={addCart}
                            isInCart={index !== -1}
                        />

                    })
                }

            </div>
        </Card>
    )
}

export default Products