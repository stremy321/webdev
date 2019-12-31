import React from 'react';
import Vacation from './vacation';
import vacadata from "./vacadata";


function App() {
  const vacationComponents = vaca.map(vacation => <vaca key={vacation.id} place={vacation.place} price={vacation.price} time={vacation.timeToGo} />)
 const vacationprice = vaca.price

  return (
    <div>
        {vacationComponents}            
    </div>
)
}


 
    
export default App;
