import React, { useState } from 'react'
import axios from "axios";

const Register = () => {

  const initialInput ={
          name:"",
          email:"",
          contact:""
  }

const[input,setInput]=useState(initialInput);


const hanldeChange=(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
}

const handleSubmit =()=>{
      axios.post(`http://localhost:8080/user/register`,input).then((res)=>{
        if(res.status ==200){
          alert("success")
        }
        setInput(initialInput);
      }).catch((err)=>{
        console.log(err)
      })
}


  return (
    <>

<section className="vh-100" style={{ backgroundColor: "plum" }}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{ borderRadius: 25 }}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Fill All Details Here
                </p>
                <div className="mx-1 mx-md-4">
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type={"text"}
                        name={"name"}
                        className="form-control"
                        value={input.name}
                        onChange={hanldeChange}
                      />
                      <label className="form-label" htmlFor="name">
                        Your Name
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type={"email"}
                        name={"email"}
                        className="form-control"
                        value={input.email}
                        onChange={hanldeChange}
                      />
                      <label className="form-label" htmlFor="email">
                        Your Email
                      </label>
                    </div>
                  </div>


                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input className="form-control"
                        type={"number"}
                        name={"contact"}               
                        value={input.contact}
                        onChange={hanldeChange}
                      />
                      <label className="form-label" htmlFor="contact">
                       Your contact
                      </label>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button onClick={handleSubmit} className="btn btn-primary btn-lg">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid"
                  alt="Sample image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



    </>
  )
}

export default Register