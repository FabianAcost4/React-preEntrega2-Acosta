import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './itemList.css';

const mockItems = [
    { id: 1, name: 'computador', category: 'electronics', image: '' },
    { id: 2, name: 'ropa', category: 'ropa', image: '' },
    { id: 3, name: 'celular', category: 'electronics', image: '' },
  ];

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const foundItem = mockItems.find(item => item.id === parseInt(itemId));
    setItem(foundItem);
  }, [itemId]);

  return (
    <div className="item-detail">
    {item && (
      <>
        <img src={item.image} alt={item.name} />
        <div className="item-detail-content">
          <h1>{item.name}</h1>
          <p>{item.description}</p>
        </div>
      </>
    )}
  </div>
  
  );
}

export default ItemDetailContainer;
