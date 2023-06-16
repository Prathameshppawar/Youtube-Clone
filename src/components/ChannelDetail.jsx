import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import {Videos, ChannelCard} from './';
import React from 'react'
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
    const [channelDetail, setchannelDetail] = useState(null)
    const [videos, setvideos] = useState([])
    const {id}=useParams();

    useEffect(()=>{
        fetchFromAPI(`channels?part=snippet&id=${id}`)
        .then((data)=> setchannelDetail(data?.items[0]));

        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
        .then((data)=> setvideos(data?.items[0]));
    })

    console.log(channelDetail, videos)
  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(125,36,135,1) 0%, rgba(39,65,135,1) 49%, rgba(104,208,69,1) 100%)',
          zIndex:10,
          height:'300px'
        }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      
      <Box display='flex' p='2'>
        <Box sx={{ mr: {sm:'100px'}}} />
          <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail