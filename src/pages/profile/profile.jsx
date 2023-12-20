import React from 'react'
import { useAuth } from '../../utils/auth'
import { useNavigate } from 'react-router';

const Profile = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  console.log('checking',auth.user)

  const handleLogout = () => {
    auth.logout();
    navigate('/login')
    
  }

  return (
    <div style={{width:"400px", height:"200px" , margin:"0 auto"}}>
      <h1>Wellcome {auth.user}</h1>

      <button className='btn btn-warning' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Profile
