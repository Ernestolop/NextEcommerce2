import { ProductsGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";

const products = initialData.products;

const labels = {
  men: "Hombres",
  women: "Mujeres",
  kid: "Niños"
}

const CategoryPage = ({ params }) => {
  const id = params.id
  return (
    <div>
      <Title
        title={`Todos los productos de ${labels[id]}`}
        subtitle="Todos los productos de Tesla"
      />
      <ProductsGrid products={products.filter(product => product.gender === id)} />
    </div>
  )
}

export default CategoryPage;

//backticks: ``