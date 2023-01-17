// import React from 'react'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreetingsData } from '../Redux/greeting';
const Greetings = () => {

 const  greeting  = useSelector((state) => state.greetings);
 console.log(greeting)
 const dispatch = useDispatch();

 useEffect(() => {
     dispatch(getGreetingsData());
 }, [dispatch]);

//  if (Loading) {
//   return (
//     <div className="loading d-flex">
//       loading
//     </div>
//   );
// }

 return (
  <>
   <h1>hi </h1>
   {}
   <p>{greeting.greet.data}</p>
  </>
 )
}

export default Greetings