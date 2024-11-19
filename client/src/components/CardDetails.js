import { Button } from 'react-bootstrap'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { addcommande } from '../JS/commandeSlice';
import Booknow from './Booknow';
function CardDetails({ping, setping}) {
    const params=useParams();
    const products=useSelector((state)=>state.product?.productlist);
    const product=products.filter((el)=>el._id===params.id)[0];
    const [color, setcolor] = useState("Black");
    const [size, setsize] = useState("M");
    const [qte, setqte] = useState(1);
    const [price, setprice] = useState(product?.price);
    const user = useSelector((state) => state.user.user);

  return (
    <div className='details'>
        <img src={product?.img} />
        <div className='description'>
            <h1>{product?.name}</h1>
            <p>{product?.description}</p>
            <h3 >Price: {product?.price} DT</h3>
            <h3 >Color: </h3>
            <div className='colors'>
             <button onClick={()=>setcolor("Grey")}> <img src="https://img.ltwebstatic.com/images3_pi/2023/06/19/1687175057a0a25bc2404e5e9cc0badf5646d0cf33.jpg"/></button>
            <button onClick={()=>setcolor("Brown")}>  <img src="//img.ltwebstatic.com/images3_pi/2023/08/08/17/16914995397bf2770f2f0ab079ebc21a2ab58371e9.jpg" /></button>
            <button onClick={()=>setcolor("Blue Sky")}> <img src="//img.ltwebstatic.com/images3_pi/2024/01/04/37/1704349661f6c8038a99f7c88253fd8420d8c33216.jpg"/></button> 
            </div>
            <h3>Size: </h3>
            <div className='taille'>
              <button onClick={()=>setsize("S")}>S</button>
              <button onClick={()=>setsize("M")}>M</button>
              <button onClick={()=>setsize("L")}>L</button>
              <button onClick={()=>setsize("XL")}>XL</button>
              <button onClick={()=>setsize("XXL")}> XXL</button>
            </div>
            <h3>Quantity</h3>
            <div className='qte'>
            <button onClick={()=>setqte(qte>1?qte-1:qte)}>-</button><input type="text" value={qte}/><button onClick={()=>setqte(qte+1)}>+</button></div>
            <h3>Total price:</h3> 
            <h3>{product?.price*qte} DT</h3>
          
            <div className='achat'>
              <h4 >Summary</h4>
            <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>User name:</th>
            <th>Product:</th>
            <th>Size:</th>
            <th>Color:</th>
            <th>Quantity:</th>
            <th>Total Price:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>{user?.name} {user?.lastname}</td>
            <td>{product?.name}</td>
            <td>{size}</td>
            <td>{color}</td>
            <td>{qte}</td>
            <td>{product?.price*qte}</td>
          </tr>

        </tbody>
      </Table>
    <Booknow ping={ping} setping={setping} color={color} qte={qte} size={size} total={product?.price*qte} product={product}/>

            </div>

        </div>
    </div>
  )
}

export default CardDetails