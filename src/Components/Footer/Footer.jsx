import React, {useEffect} from 'react'
import './footer.css'
import video2 from '../../Assets/video2.mp4'
import {FiChevronRight, FiSend} from 'react-icons/fi'
import {GiElephantHead} from 'react-icons/gi'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineYoutube} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
   //Creating a react hook to add a scroll animation...
   useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
             <input data-aos="fade-up" type="text" placeholder='Enter Email Address' />
             <button data-aos="fade-up" className='btn flex' type='submit'>
                  SEND <FiSend className='icon'/>
             </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <GiElephantHead className="icon"/>  Yathra.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
             Kerala is blessed with a unique set of geographical features 
             that have made it one of the most sought after tourist destinations
             in Asia. A long shoreline with serene beaches, tranquil stretches of
             emerald backwaters, lush hill stations and exotic wildlife, are just 
             a few of the wonders,Lets explore it...
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className="icon"/>
              <AiOutlineYoutube className="icon"/>
              <AiOutlineInstagram className="icon"/>
              <FaTripadvisor className="icon"/>
            </div>
          </div>
          <div className="footerLinks grid">
                {/* Group One */}
            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Services
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Insurance
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Agency 
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Tourism
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Payment
              </li>
            </div>
                {/* Group Two */}
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">
                PARTNERS
              </span>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Bookings
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Rentcars
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Doormitory 
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Hotels
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                TripAdvisor
              </li>
            </div>
              {/* Group Three */}
            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">
                ADVENTURES
              </span>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Cycling
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Boating
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Trekking 
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Kayaking
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Jetboat
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE OF KERALA</small>
            <small>COPYRIGHTS RESERVED &copy; SIVIN VISWANATH 2023</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
