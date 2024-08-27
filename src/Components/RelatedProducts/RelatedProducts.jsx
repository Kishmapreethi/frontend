import React from 'react'
import { useContext } from 'react'
import { ShopContext} from  '../../Context/ShopContext';
import './RelatedProducts.css'
import Items from '../Items/Items';
// import data_product  from '../Assets/Assets/Frontend_Assets/data';

const RelatedProducts = (props) => {
    const {all_product} =  useContext(ShopContext);
    const related_products = all_product.filter((item)=>item.category === props.product.category)
  
    return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-items">
            {related_products.map((item,i)=>{
                return <Items key ={i} id={item.id} name= {item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
      
    </div>
  )
}

export default RelatedProducts
