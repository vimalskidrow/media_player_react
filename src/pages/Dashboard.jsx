import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Catergories from '../components/Catergories'
import Addvideos from '../components/Addvideos'
import Videos from '../components/Videos'

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function Dashboard() {

const [addStatus,setAddStatus]=useState({})

  return (
    <>
      <div>
        <h1 className='text-center'>Dashboard</h1>

        <Row className='p-5'>
          <Col sm='1' md='2'>
            <Addvideos  setAddStatus={setAddStatus}/>
          </Col>

          <Col sm='4' md='7'>
            <Videos addStatus={addStatus}/>
          </Col>

          <Col sm='2' md='3'>
            <Catergories />
          </Col>
        </Row>


      </div>
      <ToastContainer />
    </>

  )
}

export default Dashboard