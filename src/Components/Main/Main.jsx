import React, {useEffect} from 'react'
import './main.css'
import img from '../../Assets/img.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id:1,
    imgSrc: img,
    destTitle: 'Munnar',
    location: 'Idukki',
    grade: 'CULTURAL RELAX',
    fees: '700Rs',
    description:'Known for its evergreen tea plantations, the hills of Munnar with their rolling beauty and charm can cast a magical spell on the visitors!Known for its evergreen tea plantations, the hills of Munnar with their rolling beauty and charm can cast a magical spell'

  },

  {
    id:2,
    imgSrc: img2,
    destTitle: 'Alleppy Backwaters',
    location: 'Alappuzha',
    grade: 'CULTURAL RELAX',
    fees: '1000Rs',
    description:'Alleppey become famous for many reasons like the beautiful combination of lakes, lagoons, crisscrossed narrow canals, rivers, coconut palms, paddy fields and many more. Earlier Alleppey and near by areas are low laying wet lands.'

  },

  {
    id:3,
    imgSrc: img3,
    destTitle: 'Kovalam Beach',
    location: 'Thiruvananthapuram',
    grade: 'CULTURAL RELAX',
    fees: '600Rs',
    description:'Kovalam is an internationally renowned beach with three adjacent crescent beaches. It has been a favourite haunt of tourists since the 1930s. A massive rocky promontory on the beach has created a beautiful bay of calm waters ideal for sea bathing. The leisure'

  },

  {
    id:4,
    imgSrc: img4,
    destTitle: 'Jatayu Earth Center',
    location: 'Kollam',
    grade: 'CULTURAL RELAX',
    fees: '500Rs',
    description:'Jatayu Nature Park holds the distinction of having the worlds largest bird sculpture, which is of Jatayu. The sculpture measures (200 feet (61 m) long, 150 feet (46 m) wide, 70 feet (21 m) in height and occupies'

  },

  {
    id:5,
    imgSrc: img5,
    destTitle: 'Chembra Peak',
    location: 'Wayanad',
    grade: 'CULTURAL RELAX',
    fees: '800Rs',
    description:'Situated 2100 m above sea level, Chembra is the highest peak in Wayanad district and lives up to its billing of being a picturesque location as the route to the peak is past waterfalls and lush greenery.'

  },

  {
    id:6,
    imgSrc: img6,
    destTitle: 'Varkkala Cliff',
    location: 'Ernakulam',
    grade: 'CULTURAL RELAX',
    fees: '2000Rs',
    description:'It is the only place in Kerala where the hills come close to the sea. The uniqueness of the place is the merging of cliffs with the Arabian Sea. Varkala Beach is a popular beach where you can enjoy various water sports'

  },

  {
    id:7,
    imgSrc: img7,
    destTitle: 'Muthanga Wildlife Safari',
    location: 'Wayanad',
    grade: 'CULTURAL RELAX',
    fees: '900Rs',
    description:'Muthanga Wildlife Sanctuary in Wayanad attracts thousands of tourists round the year with its lush green forest that promises endearing views and experiences hard to forget for years. The second largest wildlife sanctuary in Kerala, Muthanga consists of tropical moist dry deciduous, evergreen forests.'

  },

  {
    id:8,
    imgSrc: img8,
    destTitle: 'Fort Kochi',
    location: 'Ernakulam',
    grade: 'CULTURAL RELAX',
    fees: '1100Rs',
    description:'Fort Kochi has played an important role in the history of Kerala. Fort Kochi also has several attractions like the Santa Cruz Basilica. Fort Kochi also houses many historical monuments such as the St. Francis Church, the first church of Vasco da Gama, the Dutch Seminary, the China Vela and many others.'

  },

  {
    id:9,
    imgSrc: img9,
    destTitle: 'Alleppy Backwaters',
    location: 'Alappuzha',
    grade: 'CULTURAL RELAX',
    fees: '1000Rs',
    description:'Vagamon, a beautiful picnic spot famous for trekking, is situated near Peermedu in Idukki district. The grassy hills, velvet lawns and overall mysticism of the place is something unique. Visitors can avail many activities including trekking, paragliding, mountaineering and rock climbing.'
  }
]

const Main = () => {
   //Creating a react hook to add a scroll animation...
   useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <section className='main container section'>
        <div className="secTitle">
          <h3 data-aos="fade-right" className='title'>Most visited destinations</h3>
        </div>

        <div className="secContent grid">
          {/* Here we are using high order array method(map) */}

          {
            Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
              return(
                <div key={id} data-aos="fade-up" className="singleDestination">
                  {/* it will return single id from the map array */}

                  <div className="imageDiv">
                    <img src={imgSrc} alt={destTitle} />
                  </div>

                  <div className="cardInfo">
                    <h4 className="destTitle">{destTitle}</h4>
                    <span className="continent flex">
                      <HiOutlineLocationMarker className='icon'/>
                      <span className="name">{location}</span>
                    </span>

                    <div className="fees flex">
                      <div className="grade">
                        <span>{grade} <small>+1</small></span>
                      </div>

                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                    </div>

                    <div className="desc">
                      <p>{description}</p>
                    </div>

                    <button className='btn flex'>
                      DETAILS <HiOutlineClipboardCheck className='icon'/>
                    </button>
                  </div>
                </div>
              )
            })
          }
        </div>
    </section>
  )
}

export default Main
