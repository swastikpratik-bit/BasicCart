import React from 'react'
import {toast} from 'react-hot-toast';
import { useDispatch } from 'react-redux';
const img2 =
  "https://m.media-amazon.com/images/I/31K0TGXVovL._SX300_SY300_QL70_FMwebp_.jpg";
const img1 =
  "https://m.media-amazon.com/images/I/41Wu-NcTzjL._SX300_SY300_QL70_FMwebp_.jpg";

const Home = () => {

  const productList = [
    {
      name: "MSI Pro MP223 21.45 Inch Full HD Monitor ",
      price: 5699,
      imgSrc: img1,
      id: "024238",
    },
    {
      name: "JBL Tune 760NC, Wireless Over Ear",
      price: 5039,
      imgSrc: img2,
      id: "9459408",
    }
  ];

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    toast.success("Added To Cart");
    dispatch({ type: "addToCart", payload: options });
    dispatch({type: "calculatePrice"});
  };

  return (
    <div className='flex justify-center flex-wrap p-4'>
       {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  )
}

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className='flex m-8 p-8 w-[300px] rounded-md flex-col text-center border border-amber-500 '>
    <img className='w-full h-full object-contain mb-4' src={imgSrc} alt={name} />
    <p >{name }</p>
    <h4 className='m-2'> ₹ {price}</h4>
    <button className='cursor-pointer bg-amber-500 rounded-md p-2 hover:bg-amber-400' onClick={()=>handler({id, name, price , quantity: 1, imgSrc})}> Add to Cart</button>
  </div>
)

export default Home;