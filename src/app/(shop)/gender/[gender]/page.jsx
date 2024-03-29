export const revalidate = 60; // Se revalida cada 60 segundos

import { notFound, redirect } from "next/navigation";
import { ProductsGrid, Pagination, Title } from "@/components";
import { getPaginatedProductsWithImages } from '@/actions';

const labels = {
  men: "Hombres",
  women: "Mujeres",
  kid: "Niños",
  unisex: "Unisex"
}

const CategoryPage = async ({ params, searchParams }) => {
  const gender = params.gender;
  const { page, take } = searchParams;

  if (!labels[gender]) return notFound();

  const { products, totalPages } = await getPaginatedProductsWithImages({ page, take, gender });

  if (products.length === 0) {
    redirect(`/gender/${gender}`);
  }

  return (
    <div>
      <Title
        title={`Todos los productos de ${labels[gender]}`}
        subtitle="Todos los productos de Tesla"
      />
      <ProductsGrid products={products} />
      <Pagination totalPages={totalPages} />
    </div>
  )
}

export default CategoryPage;