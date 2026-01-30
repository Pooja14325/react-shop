import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Landing = () => {
    const navigate = useNavigate()
  return (
     <div className="text-center mt-5">
      <h1>Register Now!</h1>
      <Link onClick={() => navigate("registration")} className="btn btn-primary mt-3" to="/registration">
        Register Now
      </Link>
    </div>
  )
}

export default Landing;