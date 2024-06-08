import React from 'react'
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import { useSelector } from 'react-redux';



const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <nav className='bg-green-700 flex justify-between p-2'>
      <h2 className='text-amber-500 pt-2 font-extrabold tracking-widest'>LOGO.</h2>

      <div className='flex items-center text-2xl'>
        <Link className='px-4' to={'/'}>Home</Link>
        <p className='px-2 pt-1'>{cartItems.length}</p>
        <Link className='' to={'/cart'}>
          <FiShoppingBag />
        </Link>
      </div>
    </nav>
  )
}

export default Header;