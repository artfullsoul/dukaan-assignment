
import './App.css';
import NavLogo from "./assets/navLogo.png";
import copy from "copy-to-clipboard";  
import Section21 from "./assets/section2/1.png";
import Section22 from "./assets/section2/2.png";
import Section23 from "./assets/section2/3.png";

import Section31 from "./assets/section3/1.png";
import Section32 from "./assets/section3/2.png";
import Section33 from "./assets/section3/3.png";
import Section34 from "./assets/section3/4.png";
import Cross from "./assets/cross.png"
import Flag from "./assets/flag.png";
import { useState } from 'react';


function App() {
  const [inputValue, setinputValue] = useState("cozy")
  const [sloganCopyIndex, setsloganCopyIndex] = useState(null)
  const [hoveredSlogan, sethoveredSlogan] = useState(null)
  const [slogan, setSlogan] = useState([
    "There is no Sore it will Not Heal, No cool it will not Subdue.",
    "coziness building for tomorrow",
    "There is no Sore it will Not Heal, No cool it will not Subdue.",
    "Review the facts cool is the best.",
    "Review the facts cool is the best.",
    "coziness building for tomorrow",
    "There is no Sore it will Not Heal, No cool it will not Subdue.",
    "coziness building for tomorrow",
    "There is no Sore it will Not Heal, No cool it will not Subdue.",
    "coziness building for tomorrow",
    "There is no Sore it will Not Heal, No cool it will not Subdue.",
    "coziness building for tomorrow",
    "There is no Sore it will Not Heal, No cool it will not Subdue.",
    "coziness building for tomorrow",
    "There is no Sore it will Not Heal, No cool it will not Subdue.",
    "coziness building for tomorrow",
    "There is no Sore it will Not Heal, No cool it will not Subdue.",
    "coziness building for tomorrow",
  ]);
  const [selectedIndex, setselectedIndex] = useState(1);
  return (
    <div className="App">
      {/* NAVBAR */}
      <div className='navbar back-clr-blue'>
        <div className='width-80'>
          <div className='nav-img'>
            <img src={NavLogo}/>
          </div>
          <div className='nav-button'>
            <p className='clr-white' style={{margin:0,fontSize:"1vw",alignSelf:"center"}}>Sign in</p>
            <button className='nav-butt font-1'>Dukaan for Pc</button>
            {/* <div className='nav-butt'>
              <p className='clr-blue'>Dukaan for Pc</p>
            </div> */}
          </div>
        </div>
      </div>
      {/* NAVBAR BLUE SECTION */}
      <div className='blue-section'/>
      {/* SECTION1 */}
      <div className='section-1 width-80'>
        <div className='section-1-upper width-80'>
          <p className='section-1-upper-head'>Free slogan maker</p>
          <p className='section-1-upper-desc'>Simply enter a term that describes your business, and get up to 1,000 relevant slogans for free.</p>
          
          <p className='section-1-upper-input-head font-1'>Word for your slogan</p>
          <div className='section-1-upper-input-cont'>
            <input 
              value={inputValue}
              onChange={e => setinputValue(e.target.value)}
              className='section-1-upper-input font-1'/>
            <img className='cross' src={Cross} />
          </div>
          <button className='gen-butt font-1'>Generate Slogans</button>
        </div>

        <div className='section-1-lower width-80'>
          <button className='download-butt  font-1'>Download all</button>
          <p className='section-1-lower-head'>We have generated 1,023 slogans for “cozy”</p>
          <div className='slogans-cont'>
            {slogan.map((data,index) => {
              return(
                <div className='indi-slogan' key={index} onClick={() => { copy(data); setsloganCopyIndex(index);}} onMouseEnter={() => sethoveredSlogan(index)} onMouseLeave={() => sethoveredSlogan(null)}>
                  {(hoveredSlogan === index) && (index % 2 == 0 ? <div style={{position:"absolute",left:sloganCopyIndex === index ?"4vw":"1.5vw",marginTop:"2vh",backgroundColor:'#4D4D4D',color:"white",padding:"0.3vw",fontSize:"0.7vw"}}>
                    <p style={{margin:0}}>{sloganCopyIndex === index ? "Copied" :"Click to copy"}</p>
                  </div>:
                  <div style={{position:"absolute",right:sloganCopyIndex === index ?"4vw":"1.5vw",marginTop:"2vh",backgroundColor:'#4D4D4D',color:"white" ,padding:"0.3vw",fontSize:"0.7vw"}}>
                   <p style={{margin:0}}>{sloganCopyIndex === index ? "Copied" :"Click to copy"}</p>
                  </div>)}
                  <p className='font-1'>{data}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className='page-index-cont'>
          <div className='selected page-index-div'>
            <p className='page-index page-index-selected  font-1'>{selectedIndex}</p>
          </div>
          {selectedIndex+1 <= 21 && <div className='page-index-div'>
            <p className='page-index font-1'>{selectedIndex+1}</p>
          </div>}
          {selectedIndex+2 <= 21 && <div className='page-index-div'>
            <p className='page-index font-1'>{selectedIndex+2}</p>
          </div>}
          {selectedIndex+3 < 21 && <div className='page-index-div'>
            <p className='page-index font-1'>...</p>
          </div>}
          {selectedIndex != 21 && <div className='page-index-div'>
            <p className='page-index font-1'>21</p>
          </div>}
        </div>
        <p className='next  font-1'>Next ></p>
      </div>
      
      {/* SECTION2 */}
      <div className='section-2  '>
        <div className='section-2-cont width-80'>
          <div className='indi-sec-2'>
            <img src={Section21} className="sec-2-img"/>
            <p className='section-2-head'>Search</p>
            <p className='section-2-desc font-1'>Simply add a keyword or a term related to your business in the slogan maker search box. Wait for the magic to happen.</p>
          </div>

          <div className='indi-sec-2'>
            <img src={Section22}/>
            <p className='section-2-head'>Select</p>
            <p className='section-2-desc font-1'>Choose from thousands of options generated by the slogan maker that fit your needs.</p>
          </div>

          <div className='indi-sec-2'>
            <img src={Section23}/>
            <p className='section-2-head'>Stand out</p>
            <p className='section-2-desc font-1'>Congrats on your new slogan. It's time to win the world!</p>
          </div>
        </div>
      </div>
      
      {/* SECTION3 */}
      <div className='section-3  width-80'>
        <p className='section-3-head'>Try our other free products</p>
        <div className='section-3-card-cont'>
          <div className='section-3-card'>
            <img className='section-3-card-img' src={Section31}/>
            <p className='section-3-card-head'>Privacy Policy Generator</p>
            <p className='section-3-card-desc font-1'>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p>
          </div>
            
          <div className='section-3-card'>
            <img className='section-3-card-img' src={Section32}/>
            <p className='section-3-card-head'>{`Terms & Conditions Generator`}</p>
            <p className='section-3-card-desc font-1'>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p>
          </div>

            
          <div className='section-3-card'>
            <img className='section-3-card-img' src={Section33}/>
            <p className='section-3-card-head'>Domain Name Generator</p>
            <p className='section-3-card-desc font-1'>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p>
          </div>

          <div className='section-3-card'>
            <img className='section-3-card-img' src={Section34}/>
            <p className='section-3-card-head'>Invoice Generator</p>
            <p className='section-3-card-desc font-1'>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p>
          </div>
        </div>
      </div>
      
      {/* FOOTER */}
      <div className='footer back-clr-black'>
        <div className='footer-top width-80'>
          <div className='footer-link-img-cont'>
            <img src={NavLogo}/>
          </div>
          
          <div className='footer-link-cont'>
            <p className='footer-links clr-white'>Contact</p>
            <p className='footer-links clr-white'>FAQ's</p>
          </div>
          
          <div className='footer-link-cont'>
            <p className='footer-links clr-white'>Tutorials</p>
            <p className='footer-links clr-white'>Blog</p>
            
          </div>
          
          <div className='footer-link-cont'>
            <p className='footer-links clr-white'>Privacy</p>
            <p className='footer-links clr-white'>Banned Items</p>
            
          </div>
          
          <div className='footer-link-cont'>
            <p className='footer-links clr-white'>About</p>
            <p className='footer-links clr-white' style={{display:"flex"}}>Jobs<div className='selected-job page-index-div'>
            <p className='page-index page-index-selected-job  font-1'>3</p>
          </div></p>
            
          </div>
          
          <div className='footer-link-cont'>
            <p className='footer-links clr-white'>Facebook</p>
            <p className='footer-links clr-white'>Twitter</p>
            <p className='footer-links clr-white'>Linkedin</p>
            
          </div>

        </div>

        <div className='footer-bottom width-80'>
          <div className='copyright-line'>
            <p className='clr-white'>Dukaan 2020, All rights reserved.</p>
          </div>
          <div className='made-in'>
            <p className='clr-white'>Made in </p>
            <img src={Flag} />
          </div>
        </div>

      </div>
      
    </div>
  );
}

export default App;
