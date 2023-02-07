import React, { createContext, useReducer } from 'react';
import { IProduct } from '../utils/data';
import Cookies from 'js-cookie';

export interface IShippingAddress {
  fullName: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}
interface ICart {
  shippingAddress: IShippingAddress;
  cartItems: IProduct[];
  paymentMethod: string;
}

interface IState {
  cart: ICart;
}

interface IAction {
  type:
    | 'CART_ADD_ITEM'
    | 'CART_REMOVE_ITEM'
    | 'CART_RESET'
    | 'SAVE_SHIPPING_ADDRESS'
    | 'SAVE_PAYMENT_METHOD';
  payload?: IProduct | IShippingAddress | string;
}

const initialState: IState = {
  cart: Cookies.get('cart')
    ? JSON.parse(Cookies.get('cart') as string)
    : {
        cartItems: [],
        shippingAddress: {
          fullName: '',
          address: '',
          city: '',
          postalCode: '',
          country: '',
        },
        paymentMethod: '',
      },
};

export const Store = createContext<{
  state: IState;
  dispatch: React.Dispatch<IAction>;
}>({
  state: initialState,
  dispatch: () => {},
});

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case 'CART_ADD_ITEM': {
      const newItem = action.payload as IProduct;
      const existItem = state.cart.cartItems.find(
        (item: IProduct) => item.slug === newItem.slug
      );
      const cartItems = existItem
        ? state.cart.cartItems.map(
            (item: IProduct): IProduct =>
              item.name === existItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      Cookies.set('cart', JSON.stringify({ ...state.cart, cartItems }));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case 'CART_REMOVE_ITEM': {
      const removedItem = action.payload as IProduct;
      const cartItems = state.cart.cartItems.filter(
        (item) => item.slug !== removedItem.slug
      );
      Cookies.set('cart', JSON.stringify({ ...state.cart, cartItems }));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case 'CART_RESET':
      return {
        ...state,
        cart: {
          cartItems: [],
          shippingAddress: {
            fullName: '',
            address: '',
            city: '',
            postalCode: '',
            country: '',
          },
          paymentMethod: '',
        },
      };
    case 'SAVE_SHIPPING_ADDRESS':
      return {
        ...state,
        cart: {
          ...state.cart,
          shippingAddress: {
            ...state.cart.shippingAddress,
            ...(action.payload as IShippingAddress),
          },
        },
      };
    case 'SAVE_PAYMENT_METHOD':
      return {
        ...state,
        cart: {
          ...state.cart,
          paymentMethod: action.payload as string,
        },
      };
    default:
      return state;
  }
}

interface IProps {
  children: React.ReactNode;
}

const StoreProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
};

export default StoreProvider;
