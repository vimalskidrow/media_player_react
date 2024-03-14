import React, { useState, useEffect } from 'react'
import VideoCards from './VideoCards'
import { getVideos } from '../services/allApis'

function Videos(addStatus) {


  const [allVideos, SetAllVideos] = useState([])
  const [delStatus, setDelStatus] = useState({})

  useEffect(() => {
    getData()
  }, [addStatus, delStatus])

  const getData = async () => {
    const res = await getVideos()
    // console.log(res.data);
    SetAllVideos(res.data)
    // console.log(allVideos);

  }


  return (
    <div className='row bg-light border border-3 border-dark p-5'>
      {
        allVideos ?
          allVideos.map(item => (
            <VideoCards video={item} setDelStatus={setDelStatus} />

          ))
          :
          <h1>no Videos</h1>

      }
    </div>
  )
}

export default Videos