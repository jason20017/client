import React from "react";
import data from "../components/photo";
import { Carousel } from "react-bootstrap";
const HomePage = () => {
  return (
    <div>
      <div class="main-banner" id="top">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6">
              <div class="left-content">
                <div class="thumb">
                  <div class="inner-content">
                    <h4>We Are Hexashop</h4>
                    <span>Awesome, clean &amp; creative HTML5 Template</span>
                    <div class="main-border-button">
                      <a href="#">Purchase Now!</a>
                    </div>
                  </div>
                  <img src={data.photo[0].imgSrc} alt="" />
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="right-content">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="right-first-image">
                      <div class="thumb">
                        <div class="inner-content">
                          <h4>Women</h4>
                          <span>Best Clothes For Women</span>
                        </div>
                        <div class="hover-content">
                          <div class="inner">
                            <h4>Women</h4>
                            <p>
                              Lorem ipsum dolor sit amet, conservisii ctetur
                              adipiscing elit incid.
                            </p>
                            <div class="main-border-button">
                              <a href="#">Discover More</a>
                            </div>
                          </div>
                        </div>
                        <img src={data.photo[1].imgSrc} />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="right-first-image">
                      <div class="thumb">
                        <div class="inner-content">
                          <h4>Men</h4>
                          <span>Best Clothes For Men</span>
                        </div>
                        <div class="hover-content">
                          <div class="inner">
                            <h4>Men</h4>
                            <p>
                              Lorem ipsum dolor sit amet, conservisii ctetur
                              adipiscing elit incid.
                            </p>
                            <div class="main-border-button">
                              <a href="#">Discover More</a>
                            </div>
                          </div>
                        </div>
                        <img src={data.photo[2].imgSrc} />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="right-first-image">
                      <div class="thumb">
                        <div class="inner-content">
                          <h4>Kids</h4>
                          <span>Best Clothes For Kids</span>
                        </div>
                        <div class="hover-content">
                          <div class="inner">
                            <h4>Kids</h4>
                            <p>
                              Lorem ipsum dolor sit amet, conservisii ctetur
                              adipiscing elit incid.
                            </p>
                            <div class="main-border-button">
                              <a href="#">Discover More</a>
                            </div>
                          </div>
                        </div>
                        <img src={data.photo[3].imgSrc} />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="right-first-image">
                      <div class="thumb">
                        <div class="inner-content">
                          <h4>Accessories</h4>
                          <span>Best Trend Accessories</span>
                        </div>
                        <div class="hover-content">
                          <div class="inner">
                            <h4>Accessories</h4>
                            <p>
                              Lorem ipsum dolor sit amet, conservisii ctetur
                              adipiscing elit incid.
                            </p>
                            <div class="main-border-button">
                              <a href="#">Discover More</a>
                            </div>
                          </div>
                        </div>
                        <img src={data.photo[4].imgSrc} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Carousel className="carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={data.photo[4].imgSrc}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={data.photo[3].imgSrc}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={data.photo[2].imgSrc}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomePage;
