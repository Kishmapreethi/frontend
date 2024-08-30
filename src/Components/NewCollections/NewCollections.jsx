import React, { useEffect, useState } from 'react';
import './NewCollections.css';
// import new_collection from '../Assets/Assets/Frontend_Assets/new_collections'
import Items from '../Items/Items';

const NewCollections = () => {
  const [newCollection, setNewCollection] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/newcollections')
      .then((resp) => resp.json())
      .then((data) => setNewCollection(data))
  }, [])
  
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {newCollection.map((item, i) => {
          return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default NewCollections
