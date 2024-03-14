import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
      <div className='w-100 d-flex justify-content-center align-items-center' style={{ height: "80vh" }}>
        <div className='row p-5 shadow'>
          <div className='col d-flex flex-column justify-content-center'>
            <h1>Media Player 2024</h1> <br />
            <p>This media player will blow your mind, just upload youtube
              video url and paste here to watch & create your own playlist</p>
            <div>
              <Link to={'/dash'} className='btn btn-success'>Get Started</Link>
            </div>
          </div>
          <div className='col'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4RprYdLdPciRyYSPIzgh58nw5LK-s6tNkHpifMNQW7kEQWwHxse_H9f8KHrFewB9yppg&usqp=CAU" alt="image not found" className='img-fluid  shadow' />

          </div>
        </div>
      </div>



      <div className='mt-3 p-5'>
        <h1 className='text-center'>Features</h1> <br />

        <div className='d-flex mt-2 flex-row justify-content-between'>

          <div className="card" style={{ width: "18rem" }}>
            <img src="https://cdn.dribbble.com/users/1340032/screenshots/2964726/upload.gif" className="card-img-top" alt="..." style={{ height: '200px' }} />

            <div className="card-body">
              <h5 className="card-title">Upload Video</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>

          </div>

          <div className="card" style={{ width: "18rem" }}>
            <img src="https://media1.giphy.com/media/KFnSuizdGVCtkVFOXM/source.gif" className="card-img-top" alt="..." style={{ height: '200px' }} />
            <div className="card-body">
              <h5 className="card-title">Watch Video</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }}>
            <img src="https://media.giphy.com/media/3o7TKB15qTJv5E397y/giphy.gif" className="card-img-top" alt="..." style={{ height: '200px' }} />
            <div className="card-body">
              <h5 className="card-title">Your Watch History</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>


        </div>

      </div>



      <div className='mt-5 d-flex justify-content-between align-items-center p-5'>

        <div className='col'>
          <h2>Simple, Fast and Secured</h2>
          <p style={{ textAlign: "justify" }}>This media player allows you to uplaod any youtube video and
            watch it without any complications.
          </p>
        </div>

        <div className='col'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/eLYizanla8A?si=zNAVptdv9LBWK3rG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

      </div>


    </>

  )
}

export default Landing