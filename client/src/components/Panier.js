import React from 'react'
import "./panier.css"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deletecommande } from '../JS/commandeSlice'
function Panier({ping, setping}) {
    const commandes=useSelector((state)=>state.commande.commandelist)
    const dispatch=useDispatch()
    const user = useSelector((state) => state.user.user);
  return (
    <div className='panier'>
    <div className="card">
    <div className="row">
      <div className="col-md-12 cart">
        <div className="title">
          <div className="row">
            <div className="col"><h4><b>Shopping Cart</b></h4></div>
            {/* <div className="col align-self-center text-right text-muted">3 items</div> */}
          </div>
        </div>    
        <div className="row border-top border-bottom">
        <div className="row main align-items-center">
            <div className="col-2 " style={{width:"155px"}}><h5>Image</h5></div>
            <div className="col-2" style={{width:"155px"}}>
             <h5>Name</h5>
            </div>
            <div className="col-2" style={{width:"155px"}}><h5>Color</h5> </div>
            <div className="col-2"  style={{width:"155px"}}><h5>Size</h5></div>
         
            <div className="col-2"  style={{width:"155px"}}><h5>Price</h5></div>
          </div>
          {commandes?.filter((el)=>el.id_user===user?._id).map((el)=> <div className="row main align-items-center">
            <div className="col-2"  style={{width:"155px"}}><img className="img-fluid" src={el?.img_product} /></div>
            <div className="col-2"  style={{width:"155px"}}>
              <div className="row text-muted">{el?.name_product}</div>
              <div className="row">Cotton T-shirt</div>
            </div>
            <div className="col-2"  style={{width:"155px"}}>{el?.color} </div>
            <div className="col-2"  style={{width:"155px"}}>{el?.size} </div>
         
            <div className="col-2"  style={{width:"155px"}}>{el?.price_product}</div>
            <div className="col-2"  style={{width:"155px"}}><button onClick={()=>{dispatch(deletecommande(el?._id)); setping(!ping)}}>x</button></div>
          </div>
          
          )
         }
        </div>
  
     
        <div className="back-to-shop"><Link to="/shop">←<span className="text-muted">Back to shop</span></Link></div>
      </div>
  
    </div>
  </div>
  </div>
  )
}

export default Panier