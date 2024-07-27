import React, { useContext } from 'react'
import Feeds from './Feeds'
import DataContext from './context/DataContext'


const Home = () => {
  const {searchResults} = useContext(DataContext);
  return (
    <main className='Home'>
      <Feeds posts={searchResults}/>
    </main>
  )
}

export default Home