import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import { uploadVideos } from '../services/allApis';
import { toast } from 'react-toastify';



function Addvideos({setAddStatus}) {

    const [show, setShow] = useState(false);


    const [video,setVideo]=useState({
        caption:"", url:"", image:""
    })

    const getdata=(e)=>{
        // const {sname,age}={sname:"arun",age:29}

        const {name,value}=e.target
        console.log(name,value);

        if(name==='caption'){
            setVideo({...video,caption:value})
        }
        
        if(name==='url'){

            let furl=value
            // console.log(furl);

            furl=furl.split("v=")
            console.log(furl);

            let vrul=`https://www.youtube.com/embed/${furl[1]}??si=Tb7KCGQdBJROaIb-&autoplay=1`
            console.log(vrul);

            setVideo({...video,url:vrul})
        }
        if(name==='image'){
            setVideo({...video,image:value})
        }

    }


    const handleUploadVideo=async()=>{
        const {caption,url,image}=video

        if(!caption || !url || !image){
            // alert("All fields are mandatory....")
            toast.warning("All fields are mandatory....")
        }
        else{
            // console.log(video);

            const res= await uploadVideos(video)
            console.log(res);

            if(res.status>=200 && res.status<300){
                // alert("Video Uploaded Successfully")
                setAddStatus(res.data)
                toast.success("Video Uploaded Successfully")
                handleClose()
            }
            else{
                // alert("Video Uploading Failed")
                toast.error("Video Uploading Failed")
            }
        }
    }


    // console.log(video);



    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <>
            <span className='btn' onClick={handleShow} >
                <i className="fa-solid fa-plus"></i> 
            </span>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Video Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Caption</Form.Label>
                            <Form.Control name='caption' type="text" placeholder="Enter Video Caption" onChange={(e)=>{getdata(e)}}/>
                        </Form.Group>

                       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Video URL</Form.Label>
                            <Form.Control name='url' type="text" placeholder="Enter Youtube Video URL" onChange={(e)=>{getdata(e)}}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control name='image' type="text" placeholder="Ennter Thumbnail Image URL" onChange={(e)=>{getdata(e)}}/>
                        </Form.Group>
                       
                       
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUploadVideo}>Upload</Button>
                </Modal.Footer>
            </Modal>



        </>
    )
}

export default Addvideos