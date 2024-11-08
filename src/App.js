import * as CONFIG from './config.js';

import './App.css';

import NavBar from './components/NavBar/NavBar';
import NavItems from './components/NavItems/NavItems';

import SideBySide from './components/SideBySide/SideBySide';
import SideText from './components/SideText/SideText';
import SideImage from './components/SideImage/SideImage';

import Details from './components/Details/Details';
import FeatureInfo from './components/FeatureInfo/FeatureInfo';
import InstallInfo from './components/InstallInfo/InstallInfo';
import Question from './components/Question/Question.js';

import ContactForm from './components/ContactForm/ContactForm';
import ContactInput from './components/ContactInput/ContactInput';
import ContactButton from './components/ContactButton/ContactButton';

import Footer from './components/Footer/Footer';

import logo from './images/logo.png';
import logoAlternative from './images/logo-alternative.png';
import preview from './images/preview1.jpeg';
import preview2 from './images/preview2.png';
import detailsBg1 from './images/detailsbg1.png';
import detailsBg2 from './images/detailsbg2.png';
import detailsBg3 from './images/detailsbg3.png';
import images from './images';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

function App() {
  return (
    <div className="App" id="app">
{/* 
      <NavBar>
        <NavItems
          logo={logo}
          logoHref={CONFIG.logoHref}
          items={CONFIG.items}
        ></NavItems>
      </NavBar> */}

      <div className="AppContainer">
        {CONFIG.introAnchor ?
          <SideBySide id={CONFIG.introAnchor}>
            <SideText
              title={CONFIG.introTitle}
              description={CONFIG.introDescription}
              button={CONFIG.introButtonType}
              buttonText={CONFIG.introButtonText}
              link={CONFIG.introButtonLink}
            >
            </SideText>
            <SideImage>
              {preview}
            </SideImage>
          </SideBySide>
        : <></>}

        {CONFIG.featuresAnchor ?
          <Details
            title={CONFIG.featuresTitle}
            id={CONFIG.featuresAnchor}
            bgImg={detailsBg1}
            bgPos="bottom"
          >
            { CONFIG.featuresDetails.map((elem, index) => (
                <FeatureInfo 
                  title={Object.keys(elem)}
                  description={elem[Object.keys(elem)[0]]}
                  key={index}
                ></FeatureInfo>
              )) }
          </Details>
        : <></>}

              <div className='swiper-section'>

              <Swiper
      slidesPerView={3}
      autoplay={{ delay: 3000 }}
      autoHeight={true}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      navigation
      modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
      className="mySwiper"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Imagem ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
              </div>

        {CONFIG.midAnchor ?
          <SideBySide id={CONFIG.midAnchor}>
            <div className="video-section">
            <iframe
        src="https://player.vimeo.com/video/1025712620?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        title="Empreender Cascais"
      ></iframe>
</div>
            <SideText
              title={CONFIG.midTitle}
              description={CONFIG.midDescription}
              button={CONFIG.midButtonType}
              buttonText={CONFIG.midButtonText}
              link={CONFIG.midButtonLink}
            >
            </SideText>
          </SideBySide>
        : <></>}

        {/* {CONFIG.botAnchor ?
          <Details
            title={CONFIG.botTitle}
            id={CONFIG.botAnchor}
            bgImg={detailsBg2}
            bgPos="bottom"
          >
            { CONFIG.botDetails.map((obj, index) => (
                Object.keys(obj).map((elem, index) => (
                  <InstallInfo 
                    title={obj[elem].title}
                    description={obj[elem].desc}
                    button={obj[elem].button}
                    buttonText={obj[elem].buttonText}
                    link={obj[elem].link}
                    key={index}
                  ></InstallInfo>
                ))
              )) }
          </Details>
        : <></>} */}

        {CONFIG.faqAnchor ?
          <Details
            title={CONFIG.faqTitle}
            id={CONFIG.faqAnchor}
            bgImg={detailsBg3}
            bgPos="top"
          >
            { CONFIG.faqDetails.map((elem, index) => (
                <Question
                  question={Object.keys(elem)}
                  answer={elem[Object.keys(elem)[0]]}
                  key={index}
                ></Question>
              )) }
          </Details>
        : <></>}

      </div>
      <div className="AppBottomContainer">
        {/* <ContactForm>
            <ContactInput
              type="name"
              placeholder="Your name"
              id="name"
              pattern="[a-zA-z ]+"
              isReq={true}
            ></ContactInput>
            <ContactInput
              type="email"
              placeholder="Your email"
              id="email"
              pattern=".*"
              isReq={true}
            ></ContactInput>
            <ContactInput
              type="textarea"
              placeholder="Your message"
              id="textarea"
              pattern=".*"
              isReq={true}
            ></ContactInput>
            <ContactButton
              id="submit-button"
              value="Send"
            ></ContactButton>
          </ContactForm> */}


          {/* <Footer
            logo={logoAlternative}
            logoHref={CONFIG.footerLogoHref}
            text={CONFIG.footerText}
          >
          </Footer> */}
        </div>
    </div>
  );
}

export default App;
