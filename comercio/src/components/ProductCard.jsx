function ProductCard({ product, onAddToCart }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <h3 style={{ margin: '0 0 5px 0' }}>{product.title}</h3>
      <p style={{ margin: '0 0 8px 0' }}>Precio: ${product.price}</p>
      <button type="button" onClick={() => onAddToCart(product)}>
        Agregar al carrito
      </button>
    </div>
  )
}

export default ProductCard;