import React from 'react';
import Navbar from '../components/Navbar'
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import user from '../images/Screenshot (22).png';
import purchase from '../images/Screenshot (22) - Copy - Copy.png'
import './new.css';
const New = () => {
  return (
    <>
    {/* <h4>UI/UX > refer and earn</h4>
   
    <div class="other-courses-card first">
        <div className='flex'>

    <h3>Referral earning</h3>

     <div className="save">save ₹ 2,500/-</div>
 
    
    <a href=""><button class="how" fdprocessedid="5klqr4">withdrow balance</button></a>
        </div>
  </div>
<h3 className='works'>How does it works?</h3>
<div className='content'>
<img src={user} width={100} height={100}/>

<h4>Invite Your Friends</h4>
<div  className='icon'>

<img src={purchase} width={100} height={100} className='space-between'/>
</div>

</div> */}

 <Navbar/>
 <h5 className='ui-first'>UI/UX > Refer & Earn</h5>
 <div className='boxx'>
  <div className='three'>

  <h6 className='earn'>Referral earnings</h6>
  <h6 className='total'>total earnings</h6>
  <h6 className='total'>Wallet balance</h6>
  </div>
  
  
  <button class="how" fdprocessedid="5klqr4">withdrow balance</button>
 
 </div>
 <h3 className='works'>How does it works?</h3>
 
 <h6 className='ref1'>Your Referral code</h6>
 <div className='boxxx'>
<h6 className='code11'>EDCH54</h6>


 </div>
    </>
  )
}

export default New

