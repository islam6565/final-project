import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import "./Shop.css"

function Shop() {
    const products=useSelector((state)=>state.product.productlist);
    console.log(products)
    const [category, setcategory] = useState("all");
    const [text, settext] = useState("")
  return (
    <div style={{backgroundColor:"white", marginTop:"-21px"}}>
            <div className='search2'>
        <input type='text' placeholder='search a product' onChange={(e)=>settext(e.target.value)}/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
    </div>
       <div className='category'>
       <button><img src="https://img.ltwebstatic.com/images3_pi/2024/04/08/41/17125669565da41ba691e62eb480d3a6374a3e3be4.webp"  onClick={()=>setcategory("tshirt")}/><h3>T-shirt</h3></button> 
       <button><img src="https://img.ltwebstatic.com/images3_pi/2024/02/29/a2/1709183421fdcca3a8f33d5addc871ab09c8159230_thumbnail_900x.webp"  onClick={()=>setcategory("shirts")} /><h3>Shirts</h3></button>
       <button><img src="https://img.ltwebstatic.com/images3_pi/2024/03/19/f4/17108442917dac212029fa5cfa5c7d6a08f7960da2.webp"  onClick={()=>setcategory("hoddies")}/><h3>Hoddies</h3></button>  
      <button><img src="https://img.ltwebstatic.com/images3_pi/2024/11/08/05/1731035997503d7c04a16e6ccfec2e561ccb87ea0d_thumbnail_336x.webp"  onClick={()=>setcategory("jacket")}/><h3>Jacket</h3></button> 
      <button><img src="https://img.ltwebstatic.com/images3_spmp/2024/09/14/4e/17262881967f1f4209b5067617ae96153e2e63e2e9_thumbnail_336x.webp"  onClick={()=>setcategory("Pantalon")}/><h3>Trousers</h3></button> 
      <button><img src='https://img.ltwebstatic.com/images3_pi/2023/09/28/e6/16958943242f3ac5427ceedb661feab001d13849c2_thumbnail_336x.webp'  onClick={()=>setcategory("shorts")} /><h3>Shorts</h3></button>
      <button><img src='https://catfootwear.co.uk/cdn/shop/files/CATM-PWC44100-940-010620-F11-000_1066x.webp?v=1718555830'  onClick={()=>setcategory("boots")}/><h3>Boots</h3></button>
      <button><img src='https://img.ltwebstatic.com/images3_spmp/2024/10/16/e3/1729081990404ed90be7a4e45096a87d165105e0f7_thumbnail_900x.webp'  onClick={()=>setcategory("chaussures")}/><h3>Sneakers</h3></button>

       </div>
    <div className='shop'>

    <div style={{display:"flex",
        flexWrap:"wrap",
        justifyContent:"space-around",
        padding:"0px 300px",
        marginTop:"-88px"



    }}>
        {category=="all"?products?.filter((el)=>el.name.toLowerCase().includes(text.toLowerCase())).map((el)=><ProductCard product={el}/>):products?.filter((el)=>el.category==category).map((el)=><ProductCard product={el}/>)}
    </div>
    </div>
    </div>
  )
}

export default Shop