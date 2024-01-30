import './rightbar.css';

import { Users } from '../../dummyData';
import Online from '../online/Online';

export default function Rightbar({profile}) {

  const HomeRightBar = ()=>{
    return(
      <>
      <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText"><b>Caleb Miller</b> and <b>3 other friends</b> have a birthday today</span>
          <img className='rightbarAd' src="/assets/ad.jpg" alt="" />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            {Users.map(u=>(
              <Online key={u.id} user={u} />
            ))}
             
          </ul>
        </div></>
    )

  }

  const ProfileRightBar = ()=>{
    return(
      <>
      <h4 className='rightbarTitle' >User information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className='rightbarInfoKey'>City: </span>
          <span className='rightbarInfoValue'>Harare </span>
        </div>
        <div className="rightbarInfoItem">
          <span className='rightbarInfoKey'>From: </span>
          <span className='rightbarInfoValue'>Masvingo </span>
        </div>
        <div className="rightbarInfoItem">
          <span className='rightbarInfoKey'>Relationship: </span>
          <span className='rightbarInfoValue'>Single </span>
        </div>
      </div>
      <h4 className="rightbartitle">User friends</h4>
      <div className="righbarFollowings">
        <div className="rightbarFollowing">
          <img src="assets/afro.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Pearl Musa</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/albert.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Paida James</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/nicole.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Kim Ncube</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/gym.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Krist Rouch</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/nerd.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Fred Phiri</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/harry.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Monalisa Chil</span>
        </div>
      </div>
      </>
    )
  }

  return (
    <div className='rightbar' >
      <div className="rightWrapper">
        {profile ? <ProfileRightBar/> : <HomeRightBar/>} 
      </div>
    </div>
  )
}
