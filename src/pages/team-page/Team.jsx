import React from 'react'
import Navbar from '../../components/navbar-component/Navbar'
import './Team.css'
import { teamMembers } from '../../Data'
const TeamMemberCard=({member})=>{
    return <div className='member-card'>
        <div className='member-img'>
          <img src={member.profile} alt="" />
        </div>
        <div className="member-details">
          <h3>{member.name}</h3>
          <p>{member.domain}</p>
          <div className='member-social'>
            {member.social.map(item=> <img className='member-social-icon' src={item} alt="" /> )}
          </div>
        </div>
    </div>
}

const Team=()=> {
  return (
   <div className='team'>
    <Navbar/>
    <main className='team-container'>
        <h3>Without bonding and coordination,every project is a failure. Lookat who makes Kicksup great. ;{')'}</h3>
        <ul className='team-members-list'>
            {teamMembers.map(member=><TeamMemberCard key={member._id} member={member}/>)}
        </ul>
    </main>
   </div>
  )
}

export default Team