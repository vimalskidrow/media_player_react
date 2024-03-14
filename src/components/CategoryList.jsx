import React, { useEffect, useState } from 'react'
import { getCategories } from '../services/allApis'
import { deleteCategory } from '../services/allApis'
import { toast } from 'react-toastify'
import { getSpecificVideos } from '../services/allApis'
import { updateCategory } from '../services/allApis'

import VideoCards from './VideoCards'

function CategoryList({ status }) {

    const [cat, setCat] = useState([])

    const [deleteUseStatus, setDeleteUseStatus] = useState({})

    useEffect(() => {
        getCat()
    }, [status, deleteUseStatus])

    const getCat = async () => {
        const res = await getCategories()
        console.log(res.data);
        setCat(res.data)
    }

    // 

    const handleDelteCate = async (id) => {
        console.log(id);
        const resu = await deleteCategory(id)
        console.log((resu));

        if (resu.status >= 200 && resu.status < 300) {
            // setDelCatStatus(resu)
            setDeleteUseStatus(resu)
            toast.success("Category Deleted Successfully")
        }
        else {
            toast.error("Category Deletion Failed")
        }

    }

    // 

    const handleDrop = async (e, id) => {
        console.log("Category ID : " + id);
        const vid = e.dataTransfer.getData("videoID")
        console.log("Dropped Video ID : " + vid);

        let category = cat.find(item => item.id == id)
        console.log(category);

        const res = await getSpecificVideos(vid)
        // console.log(res.data);
        category.videos.push(res.data)
        console.log(category);

        const rescat = await updateCategory(category, id)
        if (rescat.status >= 200 && rescat.status < 300) {
            toast.success(`${res.data.caption} is added to ${category.name}`)
            getCat()
        }
        else {
            toast.error("Video Is Not Added To Category")
        }

    }


    const handleDragOver = (e) => {
        e.preventDefault()
        console.log("Dragging Over Category");
    }

    return (
        <>
            <div className='border border-light p-3 mt-3' >
                {
                    cat ?
                        cat.map(item => (
                            <div className='bg-primary mb-3 p-3 rounded shadow' onDragOver={e => { handleDragOver(e) }} droppable onDrop={e => { handleDrop(e, item?.id) }}>

                                <div>
                                    <span>{item.name}</span>
                                    <i className='fa-solid fa-trash float-end' onClick={() => { handleDelteCate(item.id) }} style={{ color: '#ff0000' }}></i>

                                </div>
                                <div className='mt-3 p-2'>
                                    {
                                        item?.videos.map(v=>(
                                            <VideoCards video={v} cat={true}/>
                                        ))
                                    }
                                </div>

                            </div>
                        ))

                        :

                        <h1>No Categories</h1>

                }
            </div>



        </>

    )
}

export default CategoryList