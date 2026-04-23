function ProductCard({ title, price }) {
  return (
    <section>
      <h3>{title}</h3>
      <p>${price}</p>
    </section>
  )
}

export default ProductCard