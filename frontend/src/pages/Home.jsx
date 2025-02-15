import React, { useState } from 'react'
import Header from '../components/Header'
import ExploreMenu from '../components/ExploreMenu'
import FoodDisplay from '../components/FoodDisplay';

export const Home = () => {
  const [catagory, setCatagory] = useState("All");
  return (
    <div>
        <Header />
        <ExploreMenu catagory={catagory} setCatagory = {setCatagory} />
        <FoodDisplay/>
    </div>
  )
}
