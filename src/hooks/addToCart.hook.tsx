import { BaseState } from '../types/state.types';
import { useState } from 'react';
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { setNewlyAdded } from '../store/slices/cart.slice';


export function useAddToCartToast() {
  const dispatch = useDispatch()
  const cart = useSelector((state: BaseState) => state.cart)
  const [prevCart, setPrevCart] = useState(cart)
  const [prevToast, setPrevToast] = useState('')

  useEffect(() => {
    if (cart.newlyAdded) {
      toast.remove(prevToast)
      toast.custom((t) => {
        setPrevToast(t.id);

        return (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                {cart.lastAddedItem?.book.cover && (
                <Image
                  src={cart.lastAddedItem.book.cover}
                  alt={cart.lastAddedItem.book.title}
                  width={40}
                  height={40}
                  />)}
              </div>
              <div className="ml-3 flex-1">
                <h1 className='font-bold'>
                  Added to cart 
                {cart.lastAddedItem && cart.lastAddedItem.quantity > 1 && <>
                  <span className='text-gray-500'> x{cart.lastAddedItem.quantity}</span>
                </>} </h1>
                <p className="text-sm font-medium text-gray-900">
                  {cart.lastAddedItem?.book.title}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  {cart.lastAddedItem?.book.authors.map((a) => a.name).join(', ')}
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.remove(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Close
            </button>
          </div>
        </div>
      )}, {
        position: 'bottom-right',
        duration: 3000,
      })
      dispatch(setNewlyAdded(false))
    }
    setPrevCart(cart)
  }, [cart, prevCart, dispatch, prevToast])
}
