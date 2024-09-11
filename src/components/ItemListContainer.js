import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './itemList.css';

const mockItems = [
  { id: 1, name: 'commputador', category: 'electronics' },
  { id: 2, name: 'ropa', category: 'ropa' },
  { id: 3, name: 'celular', category: 'electronics' },
];
function ItemListContainer() {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      const filteredItems = categoryId
        ? mockItems.filter(item => item.category === categoryId)
        : mockItems;
      setItems(filteredItems);
    }, [categoryId]);
  
    return (
        <div className="item-list">
        {items.map(item => (
          <div key={item.id} className="item">
            <Link to={`/item/${item.id}`}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </Link>
          </div>
        ))}
      </div>
      
    );
  }
  
export default ItemListContainer;
