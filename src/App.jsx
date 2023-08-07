import { useState } from 'react';
import { nanoid } from 'nanoid';

import Form from './Form';

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (itemName) => {
    const newItem = { name: itemName, completed: false, id: nanoid() };
    setItems([...items, newItem]);
  };

  return (
    <section className="section-center">
      <Form addItem={addItem} />
    </section>
  );
};

export default App;
