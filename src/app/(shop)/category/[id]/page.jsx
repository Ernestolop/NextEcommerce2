import { notFound } from 'next/navigation'

const CategoryPage = ({ params }) => {
  const id = params.id
  if (id === 'men') {
    notFound();
  }
  return (
    <div>CategoryPage {id}</div>
  )
}

export default CategoryPage