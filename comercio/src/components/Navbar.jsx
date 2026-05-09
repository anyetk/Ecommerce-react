function Navbar({ cartCount }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>Comercio</h2>
      <div>Productos en carrito: {cartCount}</div>
    </div>
  )
}

export default Navbar