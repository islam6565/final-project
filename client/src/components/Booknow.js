import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

import { useDispatch, useSelector } from 'react-redux';
import { addcommande } from '../JS/commandeSlice';
function Booknow({ping, setping, color, qte, size, total, product}) {
    console.log("color"+color+"qte"+qte+"size"+size+"total"+total)
    const [show, setShow] = useState(false);
    const user = useSelector((state) => state.user.user);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(!show);
    const [newcommande, setnewcommande] = useState(
        { id_user: user?._id,
          name_user:user?.name+" "+user?.lastname,
          phone_user:"",
          name_product:product?.name,
          img_product:product?.img,
          price_product:product?.price*qte,
          description:product?.description,
          qte:qte,
          color:color,
          size:size, 
          date:new Date(),
          status:"non confirmé"
        }
      )
      const dispatch=useDispatch();
  return (
    <>
    <div> 
        <button onClick={handleShow}>show</button>
       { show?<div className='modall'>
<h1>hello</h1>
<Button variant="primary"  onClick={()=>{dispatch(addcommande(newcommande));setping(!ping)}}>
          Save Changes
        </Button>
        <Button variant="primary"  onClick={handleClose}>
         close
        </Button>
        </div>:null}
        </div>


  </>
  )
}

export default Booknow