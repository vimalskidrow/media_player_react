import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteVideo } from '../services/allApis';
import { toast } from 'react-toastify';
import { addHistory } from '../services/allApis';

function VideoCards({ video, setDelStatus,cat }) {

    const [show, setShow] = useState(false);

    const [history, setHistory] = useState({
        caption: video.caption, url: video.url, datetime: ''
    })


    const handleDelete = async (id) => {
        console.log(id);
        const res = await deleteVideo(id)
        console.log(res);
        if (res.status >= 200 && res.status < 300) {
            toast.success("Video Deleted Successfully")
            setDelStatus(res)
        }
        else {
            toast.error("Video Deletion Failed")
        }

    }

    const handleClose = () => {

        addHistory(history)
        setShow(false)
    };


    const handleShow = () => {

        // const dt = new Date()
        setHistory({ ...history, datetime: new Date() })

        setShow(true)
    };

    // 

    const handleOnDrag = (e, id) => {
        console.log("Video is dragging - ID : " + id);
        e.dataTransfer.setData("VideoID", id)
    }

    return (
        <>
            <Card style={cat?{ width: '10rem' }:{width:'18rem'}} draggable onDragStart={(e) => { handleOnDrag(e, video?.id) }} className='ms-3 mb-3'>
                <Card.Img variant="top" className='img-fluid' src={video.image} onClick={handleShow} />
                <Card.Body className='d-flex flex-row justify-content-between'>
                    <Card.Title>{video.caption}</Card.Title>
                  {
                    !cat &&
                    <i className="fa-solid fa-trash" onClick={() => { handleDelete(video.id) }} style={{ color: "#cb1d10" }}></i>
                  } 
                                      {/* <Button variant="primary">Go somewhere</Button> */}

                </Card.Body>
            </Card>


            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{video.caption}</Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    <iframe width="100%" height="315" src={video.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/yA6OKoW30Pk?si=Tb7KCGQdBJROaIb-&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                    {/* <iframe width="100%" height="345" src="http://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1" frameborder="0" allowfullscreen></iframe> */}

                </Modal.Body>

            </Modal>

        </>
    )
}

export default VideoCards