import React, { useMemo, useState , useCallback } from 'react';
import { Item } from './components/item'

function App() {

  const [items, setItems] = useState<string[]>([])
  const [newItem, setNewItem] = useState('')
  const [ wishList, setWishList] = useState<string[]>([])

  function addItemToList() {

    setItems([ ...items,`Item ${items.length}`])
  }

  const addItemToWishList = useCallback((item : string) => {
    setWishList(state => [...state, item])
  }, [] ) // dependências

  const countItemsWithOne = useMemo(() => {
    
    return items.filter(item => item.includes('1')).length
    
  }, [items])


  return (
    <div>
      <input type='text' onChange={e => setNewItem(e.target.value) } value={newItem} />
      <button onClick={addItemToList}> add</button>
      <ul>
        {items.map( item=> {
          return <Item key={item} 
          onAddToWishList={addItemToWishList} title={item} />
        })}

      </ul>
      <div>Count {countItemsWithOne}</div>
    </div>
   

  );
}

export default App;
