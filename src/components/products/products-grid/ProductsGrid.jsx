
const ProductsGrid = ({ products }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
            {
                products.map(product => (
                    <span key={product.slug}>{product.title}</span>
                ))
            }
        </div>
    )
}

export default ProductsGrid