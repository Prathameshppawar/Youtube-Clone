import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import {Box, Typography } from '@mui/material';
// import Sidebar from './Sidebar';
import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';
const SearchFeed = () => {
  
  const [videos, setvideos] = useState([])
  const {searchTerm} = useParams();
  console.log(searchTerm)
  useEffect(()=>{
      fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data)=>setvideos(data.items))
  }, []);
  return (
    
      <Box p={2} sx={{
        msOverflowY:'auto', 
        height:'90vh', 
        flex:'2'
      }}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color:'white '}}>
          Search results for 
          <span style={{ color:'#F31503'}}> {searchTerm}</span> videos 
         </Typography>

        <Videos videos={videos} />
      </Box>
  )
}

export default SearchFeed