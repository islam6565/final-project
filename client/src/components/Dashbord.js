import React, { useState } from 'react';
import "./dashbord.css";
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import Edituserdash from './Edituserdash';


function Dashbord({ping, setping}) {
  const [category, setcategory] = useState("users");
  const users = useSelector((state) => state.user.userlist);
  const products = useSelector((state) => state.product.productlist); 
  const commandes = useSelector((state) => state.commande.commandelist);
  const [text, settext] = useState("")

  return (
    <div className='dash'>
      <div className='divleft'>
        <img src="https://static.vecteezy.com/system/resources/previews/027/951/137/non_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png" alt="Admin Avatar" />
        <h1>Admin</h1>
        <div className='btndash'>
          <button onClick={() => setcategory("users")}>Users</button>
          <button onClick={() => setcategory("products")}>Products</button>
          <button onClick={() => setcategory("commandes")}>Commandes</button>
        </div>
      </div>
      <div className='divright'>
      <div className='search3'>
        <input type='text' placeholder='search ...' onChange={(e)=>settext(e.target.value)}/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
    </div>
        {category === "users" ? (
          <div className='users'>
            <h3>User List</h3>
            <Table responsive="lg">
              <thead>
                <tr>
                  <th>User name</th>
                  <th>User lastname</th>
                  <th>Email</th>
                  <th>Category</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {users?.filter((el)=>el?.name.toLowerCase().includes(text.toLowerCase())).map((el) => (
                  <tr key={el.id}>
                    <td>{el?.name}</td>
                    <td>{el?.lastname}</td>
                    <td>{el?.email}</td>
                    <td>{el?.category}</td>
                    <td>
                    <Edituserdash ping={ping} setping={setping}/>
                    </td>
                    <td>
                      <button>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : category === "products" ? (
          <div className='products'>
            <h3>Products List</h3>
            <button>Add product</button>
            <Table responsive="lg">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {products?.filter((el)=>el?.name.toLowerCase().includes(text.toLowerCase())).map((el) => (
                  <tr key={el?.id}> 
                  <td><img src={el?.img} style={{width:"50px"}}/></td>
                    <td>{el?.name}</td>
                    <td>{el?.price}</td>
                    <td>{el?.category}</td>
                    <td>
                      <button>Edit</button>
                    </td>
                    <td>
                      <button>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <div className='commandes'>
            <h3>Commandes List</h3>
            <Table responsive="lg">
              <thead>
                <tr>
                  
                  <th>User Name</th>
                  <th>Product name</th>
                  <th>Total Price</th>
                  <th>QTE</th>
                  <th>Color</th>
                  <th>Size</th>
                  <th>Date commande</th>

                  <th>Status</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {commandes?.filter((el)=>el?.name_user.toLowerCase().includes(text.toLowerCase())).map((el) => (
                  <tr key={el?.id}> 
                  
                    <td>{el?.name_user}</td>
                    <td>{el?.name_product}</td>
                    <td>{el?.price_product}</td>
                    <td>{el?.qte}</td>
                    <td>{el?.color}</td>
                    <td>{el?.size}</td>
                    <td>{el?.date}</td>
                    <td>{el?.status}</td>
                    <td>
                      <button>Edit</button>
                    </td>
                    <td>
                      <button>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashbord;