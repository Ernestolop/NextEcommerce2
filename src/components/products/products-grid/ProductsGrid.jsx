import ProductGridItem from "./ProductGridItem"

const ProductsGrid = ({ products }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
            {
                products.map(product => (
                    <ProductGridItem product={product} key={product.slug} />
                ))
            }
        </div>
    )
}

export default ProductsGrid