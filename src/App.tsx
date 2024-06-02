import { useEffect, useState } from 'react';
import ArmorTable from './components/armorTable'
import data from "./data/armor.json";
import { Armor } from './types/armor';
import { Typography } from '@mui/material';

function App() {
  const [items, setItems] = useState<Armor[]>([]);

  useEffect(() => {
    setItems(data as Armor[]);
  }, []);


  return (
    <>
      <Typography variant="h2" gutterBottom>
        Armor Equipment
      </Typography>
      <ArmorTable tableData={items} />
    </>
  )
}

export default App
