import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useSelector , useDispatch} from "react-redux";

const Cart = () => {
    const { cartItems, subTotal, shipping, tax, total } = useSelector((state) => state.cart);
    console.log(subTotal, shipping, tax, total);
    const dispatch = useDispatch();

    const inc = (id) => {
        dispatch({
            type: "addToCart",
            payload: { id }
        });
        dispatch({type: "calculatePrice"});

    };
    const dec = (id) => {
        dispatch({
            type: "decrement",
            payload: id ,
        });
        dispatch({type: "calculatePrice"});
     };
    const del = (id) => {
        dispatch({
            type: "deleteFromCart",
            payload: id
        });
        dispatch({type: "calculatePrice"});

    };
    
  return (
    <div className="grid h-screen grid-cols-[1fr] md:grid-cols-[4fr_1fr] md:p-4 webkit">
      <main className="p-4 overflow-y-auto">
        {cartItems.length > 0 ? (
          cartItems.map((i) => (
            <CartItemComp
                key= {i.id} 
                name = {i.name}
                imgSrc={i.imgSrc}
                price={i.price}
                quantity={i.quantity}
                id={i.id}
                dec={dec}
                inc={inc}
                del={del}
            />
          ))
        ) : (
          <h1>No Items Yet !</h1>
        )}
      </main>
      <aside className="rounded-s-sm h-full w-full  flex flex-col justify-center">
        <h2 className="m-2 tracking-normal text-2xl">Subtotal : {subTotal}</h2>
        <h2 className="m-2 tracking-normal text-2xl">Shipping : {shipping}</h2>
        <h2 className="m-2 tracking-normal text-2xl">Tax : {tax}</h2>
        <h2 className="m-2 tracking-normal text-2xl font-extrabold">
          Total : {total}
        </h2>
      </aside>
    </div>
  );
};

const CartItemComp    = ({ imgSrc, name, price, quantity, dec, inc, del, id }) => (
  <div className="carditem rounded-md p-2 mx-4 grid grid-cols-[1fr_3fr_1fr_1fr] items-center bg-white  text-black my-2">
    <img className="w-full h-52 object-contain" src={imgSrc} alt="Item" />
    <article>
      <h3 className='test-base'>{name}</h3>
      <p> ₹ {price}</p>
    </article>
    <div className="flex items-center h-full justify-center ">
      <button
        className="w-8 h-8 border-none bg-slate-400 rounded-md hover:bg-slate-500"
        onClick={() => dec(id)}
      >
        -
      </button>
      <p className="px-4">{quantity}</p>
      <button
        className="w-8 h-8 border-none bg-slate-400 rounded-md hover:bg-slate-500"
        onClick={() => inc(id)}
      >
        +
      </button>
    </div>

    <AiFillDelete
      className="cursor-pointer text-xl inline-block m-auto text-red-700 hover:text-slate-600"
      onClick={() => del(id)}
    />
  </div>
);
export default Cart;
