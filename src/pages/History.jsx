import React, { useEffect, useState } from 'react'
import { getHistory } from '../services/allApis'
import Table from 'react-bootstrap/Table';
import { deleteHistory } from '../services/allApis';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function History() {
  const [hist, setHist] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const res = await getHistory()
    // console.log(res.data);

    setHist(res.data)


  }

  const handleDeleteHistory = async (id) => {
    // console.log(id);
    const resu = await deleteHistory(id)
    console.log(resu.status);

    if (resu.status >= 200 && resu.status < 300) {
      toast.success("Category Deleted Successfully")
    }
    else {
      toast.error("Category Deletion Failed")
    }

  }


  return (
    <>
      <Table striped bordered hover className='table table-dark table-hover' >
        <thead>
          <tr>
            <th>Caption</th>
            <th>URL</th>
            <th>Time</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            hist ?
              hist.map(item => (
                <tr>
                  <td >{item.caption}</td>
                  <td >{item.url}</td>
                  <td >{item.datetime}</td>
                  <td><i className='fa-solid fa-trash text-light' onClick={() => { handleDeleteHistory(item.id) }}></i></td>

                </tr>
              ))
              :
              <tr>
              </tr>

          }
        </tbody>
      </Table>
      <ToastContainer />
    </>
  )
}

export default History