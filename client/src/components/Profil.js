import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, updateuser } from "../JS/userSlice/userSlice";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Profil.css"; 
function Profile({ping, setping}) {
  const user = useSelector((state) => state.user.user);
  const [recentProducts, setRecentProducts] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [edited, setedited] = useState({
    name:user?.name,
      lastname:user?.lastname,
       email:user?.email, 
       password:user?.password 
  })

 
  const fetchRecentProducts = useCallback(() => {
    setRecentProducts([
      { id: 1, name: "Classic Black T-Shirt", price: "65 DT", image: "https://img.ltwebstatic.com/images3_pi/2024/06/28/84/1719556032910ac4aac7e3dfe54e4f81661c36c4e8.webp" },
      { id: 2, name: "Denim Jacket", price: "130 DT", image: "https://img.ltwebstatic.com/images3_pi/2023/09/26/d2/16957264182937f2e00ef27a583497ed290cc82457.webp" },
      { id: 3, name: "Leather Boots", price: "120 DT", image: "https://img.ltwebstatic.com/images3_spmp/2024/09/05/28/1725525809aac0b9cfe30c26d8a66b2c81988cd99c.webp" },
    ]);
  }, []);

  useEffect(() => {
    fetchRecentProducts();
  }, [fetchRecentProducts]);


  const handleLogout = useCallback(() => {
    dispatch(logout());
    navigate("/login");
  }, [dispatch, navigate]);

  return (
    <div className="profile-page">
      <div className="profile-header">
        <img src={user?.profilePicture || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb_PCg9WhM1liJeKsNK7NwMd99kioHwS_G5A&s"} alt="Profile" className="profile-avatar" />
        <h1>{user ? `Hello, ${user.name}` : "Hello, Guest"}</h1>
        {user && <p>{user.email}</p>}
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder={user?.name} onChange={(e)=>setedited({...user,name:e.target.value})}/>
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder={user?.lastname}  onChange={(e)=>setedited({...user,lastname:e.target.value})} />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder={user?.email}  onChange={(e)=>setedited({...user,email:e.target.value})} />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder={user?.password}  onChange={(e)=>setedited({...user,password:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={()=>{dispatch(updateuser({id:user?._id, edited}));setping(!ping)}}>
        edit
      </Button>
    </Form>

      {user ? (
        <div className="recent-products">
          <h2>Recently Viewed Products</h2>
          <div className="products-grid">
            {recentProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Please log in to view your profile and recent activity.</p>
      )}
    </div>
  );
}

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    profilePicture: PropTypes.string,
  }),
};

export default Profile;
