import { create } from "zustand"

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
}

interface CartState {
  cart: CartItem[]
  totalItems: number
  totalPrice: number
  addToCart: (item: CartItem) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
}

export const useCart = create<CartState>((set, get) => ({
  cart: [],
  totalItems: 0,
  totalPrice: 0,

  addToCart: (item) => {
    const existingCart = get().cart
    const existingItem = existingCart.find((cartItem) => cartItem.id === item.id)

    if (existingItem) {
      set((state) => ({
        cart: state.cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        ),
        totalItems: state.totalItems + item.quantity,
        totalPrice: state.totalPrice + item.price * item.quantity,
      }))
    } else {
      set((state) => ({
        cart: [...state.cart, item],
        totalItems: state.totalItems + item.quantity,
        totalPrice: state.totalPrice + item.price * item.quantity,
      }))
    }
  },

  removeFromCart: (id) => {
    const existingCart = get().cart
    const itemToRemove = existingCart.find((cartItem) => cartItem.id === id)

    if (itemToRemove) {
      set((state) => ({
        cart: state.cart.filter((cartItem) => cartItem.id !== id),
        totalItems: state.totalItems - itemToRemove.quantity,
        totalPrice: state.totalPrice - itemToRemove.price * itemToRemove.quantity,
      }))
    }
  },

  updateQuantity: (id, quantity) => {
    const existingCart = get().cart
    const itemToUpdate = existingCart.find((cartItem) => cartItem.id === id)

    if (itemToUpdate) {
      const quantityDifference = quantity - itemToUpdate.quantity

      set((state) => ({
        cart: state.cart.map((cartItem) =>
          cartItem.id === id ? { ...cartItem, quantity } : cartItem
        ),
        totalItems: state.totalItems + quantityDifference,
        totalPrice: state.totalPrice + itemToUpdate.price * quantityDifference,
      }))
    }
  },

  clearCart: () => set(() => ({ cart: [], totalItems: 0, totalPrice: 0 })),
}))
