import { useState } from 'react'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'

const initialProducts = [
  { id: 1, title: 'Laptop', price: 2000 },
  { id: 2, title: 'Mouse', price: 50 },
  { id: 3, title: 'Teclado', price: 100 },
  { id: 4, title: 'Monitor', price: 400 },
  { id: 5, title: 'Audífonos', price: 120 },
  { id: 6, title: 'Teclado mecánico', price: 150 },
  { id: 7, title: 'Webcam', price: 80 },
  { id: 8, title: 'Altavoces', price: 90 },
  { id: 9, title: 'Cargador USB-C', price: 35 }
]

function App() {
  const [products, setProducts] = useState(initialProducts)
  const [cart, setCart] = useState([])
  const [newTitle, setNewTitle] = useState('')
  const [newPrice, setNewPrice] = useState('')

  const addToCart = (product) => {
    const item = cart.find((cartItem) => cartItem.id === product.id)
    if (item) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      )
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const removeFromCart = (id) => {
    setCart(cart.filter((cartItem) => cartItem.id !== id))
  }

  const clearCart = () => {
    setCart([])
  }

  const addProduct = (event) => {
    event.preventDefault()
    const title = newTitle.trim()
    const price = Number(newPrice)
    if (!title || price <= 0) {
      return
    }
    const nextId = products.length + 1
    setProducts([...products, { id: nextId, title, price }])
    setNewTitle('')
    setNewPrice('')
  }

  const totalItems = cart.reduce((sum, cartItem) => sum + cartItem.quantity, 0)
  const totalPrice = cart.reduce(
    (sum, cartItem) => sum + cartItem.price * cartItem.quantity,
    0
  )

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <Navbar cartCount={totalItems} />

      <h1>Mi tienda</h1>
      <p>Inventario con 9 productos, carrito y formulario para agregar producto.</p>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 300px' }}>
          <h2>Inventario ({products.length})</h2>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>

        <div style={{ flex: '1 1 300px' }}>
          <h2>Carrito</h2>
          {cart.length === 0 ? (
            <p>El carrito está vacío.</p>
          ) : (
            <div>
              {cart.map((cartItem) => (
                <div
                  key={cartItem.id}
                  style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}
                >
                  <div>{cartItem.title}</div>
                  <div>Cantidad: {cartItem.quantity}</div>
                  <div>Precio: ${cartItem.price}</div>
                  <div>Subtotal: ${cartItem.price * cartItem.quantity}</div>
                  <button type="button" onClick={() => removeFromCart(cartItem.id)}>
                    Quitar
                  </button>
                </div>
              ))}
              <div>
                <strong>Total items:</strong> {totalItems}
              </div>
              <div>
                <strong>Total precio:</strong> ${totalPrice}
              </div>
              <button type="button" onClick={clearCart}>
                Vaciar carrito
              </button>
            </div>
          )}
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h2>Agregar producto</h2>
        <form onSubmit={addProduct}>
          <div>
            <label>
              Nombre:
              <input
                value={newTitle}
                onChange={(event) => setNewTitle(event.target.value)}
                placeholder="Nombre del producto"
              />
            </label>
          </div>
          <div>
            <label>
              Precio:
              <input
                type="number"
                value={newPrice}
                onChange={(event) => setNewPrice(event.target.value)}
                placeholder="Precio"
              />
            </label>
          </div>
          <button type="submit">Agregar</button>
        </form>
      </div>
    </div>
  )
}

export default App;

