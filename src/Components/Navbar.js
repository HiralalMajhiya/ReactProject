import { Link } from 'react-router-dom';
import '../Navbar.css';
function Navbar() {
  return (
    <>
      <div className='navbar'>
        <i className='logoname'>
          <img
            id='logo'
            src='https://5.imimg.com/data5/SELLER/Default/2021/1/MB/EZ/LT/112040471/easywebes-png-500x500.png'
            alt='logo'
          />
          TRVL
        </i>

        {/* <i class='fa-solid fa-bars fa-3x' onClick={clickHandler}></i> */}
        <ul className='List'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Service</a>
          </li>
          <li>
            <a href='#'>Product</a>
          </li>
          <li id='sign-up'>
            <a href='#'>SIGN UP</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
