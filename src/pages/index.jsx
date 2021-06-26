import React from 'react';
import { routes } from '../routes';

export default function Home() {
  return (
    <div className="container">
      <div className="navigation">
        <header id="header ">
          <nav>
            <ul>
              <li className="logo"></li>
              <li className="items">
                <a href={routes.home}>Home</a>
              </li>
              <li className="items">
                <a href={routes.about}>About</a>
              </li>
              <li className="items">
                <a href="#">Blogs</a>
              </li>
              <li className="items">
                <a href={routes.contact}>Contact</a>
              </li>
              <li className="items">
                <a href="#">Feedback</a>
              </li>
              <li className="btn">
                <a href="#">
                  <i className="fas fa-bars"></i>
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>

      <div className="carousel-container">
        <div className="slider">
          <div className="myslide fade">
            <div className="txt">
              <h1>IMAGE 1</h1>
              <p>
                Web Devoloper
                <br />
                Subscribe To My Channel For More Videos
              </p>
            </div>
            <img
              src="https://images.pexels.com/photos/1141853/pexels-photo-1141853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="image 5"
              style={{ width: '100%', height: '100%' }}
            />
          </div>

          <div className="myslide fade">
            <div className="txt">
              <h1>IMAGE 2</h1>
              <p>
                Web Devoloper
                <br />
                Subscribe To My Channel For More Videos
              </p>
            </div>
            <img
              src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="image 1"
              style={{ width: '100%', height: '100%' }}
            />
          </div>

          <div className="myslide fade">
            <div className="txt">
              <h1>IMAGE 3</h1>
              <p>
                Web Devoloper
                <br />
                Subscribe To My Channel For More Videos
              </p>
            </div>
            <img
              src="https://images.pexels.com/photos/1874613/pexels-photo-1874613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="image 2"
              style={{ width: '100%', height: '100%' }}
            />
          </div>

          <div className="myslide fade">
            <div className="txt">
              <h1>IMAGE 4</h1>
              <p>
                Web Devoloper
                <br />
                Subscribe To My Channel For More Videos
              </p>
            </div>
            <img
              src="https://images.pexels.com/photos/1878715/pexels-photo-1878715.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="image 3"
              style={{ width: '100%', height: '100%' }}
            />
          </div>

          <a className="prev" onclick="plusSlides(-1)">
            &#10094;
          </a>
          <a className="next" onclick="plusSlides(1)">
            &#10095;
          </a>

          <div className="dotsbox" style={{ textAlign: 'center' }}>
            <span className="dot" onclick="currentSlide(1)"></span>
            <span className="dot" onclick="currentSlide(2)"></span>
            <span className="dot" onclick="currentSlide(3)"></span>
            <span className="dot" onclick="currentSlide(4)"></span>
            <span className="dot" onclick="currentSlide(5)"></span>
          </div>
        </div>
      </div>

      <div className="about-us">
        <div className="headings">
          <h1 className="heading">ABOUT US</h1>
        </div>

        <div className="about-container">
          <div id="slider">
            <div className="about-us-content" id="1">
              <div className="explanation">
                <div className="content-box">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                  </p>
                </div>
              </div>
              <div className="company-spec">
                <div className="spec-box">
                  <p>Engineering</p>
                </div>
              </div>
            </div>

            <div className="about-us-content" id="2">
              <div className="explanation">
                <div className="content-box">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, s ed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut
                  </p>
                </div>
              </div>
              <div className="company-spec">
                <div className="spec-box">
                  <p>Real Estate</p>
                </div>
              </div>
            </div>

            <div className="about-us-content" id="3">
              <div className="explanation">
                <div className="content-box">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                  </p>
                </div>
              </div>
              <div className="company-spec">
                <div className="spec-box">
                  <p>Facility Management</p>
                </div>
              </div>
            </div>
          </div>
          <div className="vision-mission-box">
            <div className="content-box">
              <div className="mission">
                <h3 className="space-title">vision</h3>
                <p>lorem ipsum say magna carta consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
              </div>
              <div className="vision">
                <h3 className="space-title">vision</h3>
                <p>lorem ipsum say magna carta consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
              </div>
              <div className="culture">
                <h3 className="space-title">vision</h3>
                <p>lorem ipsum say magna carta consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
              </div>
            </div>
          </div>
        </div>

        <div className="controller-right">
          <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M28.3854 55.3558C43.0699 55.3558 54.974 43.4517 54.974 28.7673C54.974 14.0828 43.0699 2.17871 28.3854 2.17871C13.701 2.17871 1.79688 14.0828 1.79688 28.7673C1.79688 43.4517 13.701 55.3558 28.3854 55.3558Z"
              stroke="#131D3B"
              stroke-width="2.83611"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M28.3857 39.4027L39.0212 28.7673L28.3857 18.1318"
              stroke="#131D3B"
              stroke-width="2.83611"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.75 28.7673H39.0208"
              stroke="#131D3B"
              stroke-width="2.83611"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className="controller-left">
          <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M28.6151 55.3558C13.9306 55.3558 2.02654 43.4517 2.02654 28.7673C2.02654 14.0828 13.9306 2.17871 28.6151 2.17871C43.2995 2.17871 55.2036 14.0828 55.2036 28.7673C55.2036 43.4517 43.2995 55.3558 28.6151 55.3558Z"
              stroke="#131D3B"
              stroke-width="2.83611"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M28.6147 39.4027L17.9793 28.7673L28.6147 18.1318"
              stroke="#131D3B"
              stroke-width="2.83611"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M39.2505 28.7673H17.9797"
              stroke="#131D3B"
              stroke-width="2.83611"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="services-container">
        <div className="services">
          <div className="headings">
            <h1 className="heading white">Services</h1>
          </div>
          <div className="service-icons">
            <div className="icon-box">
              <div className="icon-content"></div>
            </div>
            <div className="icon-box">
              <div className="icon-content">
                <img src="" alt="icon" />
                <p>Retro Constriction</p>
              </div>
            </div>
            <div className="icon-box">
              <div className="icon-content"></div>
            </div>
            <div className="icon-box">
              <div className="icon-content"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="quote-container">
        <h6>RETRO CONSTRUCTION CONNECTING YOU TO YOUR DREAM HOME</h6>
      </div>
      <div className="focus-section">
        <div className="right-side-focus"></div>
        <div className="focus-box">
          <div className="our-focus">
            <div className="title-header">
              <h3 className="title-heading">Our Focus</h3>
            </div>
            <div className="title-content">
              <p className="title-content-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.]
              </p>
            </div>
          </div>
          <div className="our-focus-2">
            <div className="our-objectives">
              <div className="title-header">
                <h3 className="sub-title-heading">Our Objectives</h3>
              </div>
              <div className="title-content">
                <p className="title-content-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco{' '}
                </p>
              </div>
            </div>
            <div className="our-principles">
              <div className="title-header">
                <h3 className="sub-title-heading">Our Principles</h3>
              </div>
              <div className="title-content-body">
                <p className="title-content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-section">
        <div className="headings">
          <h1 className="heading proj">Projects</h1>
        </div>

        <div className="horizontal-scroll">
          <div className="image-box"></div>
          <div className="image-box"></div>
          <div className="image-box"></div>
          <div className="image-box"></div>
          <div className="image-box"></div>
          <div className="image-box"></div>
          <div className="image-box"></div>
          <div className="image-box"></div>
          <div className="image-box"></div>
        </div>
      </div>

      <div className="footer-section">
        <footer>
          <div className="">
            <div className="office-desc"></div>
            <div className="contact-links"></div>
            <div className="social-media-links"></div>
          </div>
        </footer>
      </div>
    </div>
  );
}
