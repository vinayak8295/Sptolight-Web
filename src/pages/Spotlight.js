import React from 'react';

class Spotlight extends React.Component{
    render(){
        return(
            <div>
            <div className="scroll-progress primary-bg" />
            {/* Start Preloader */}
            <div className="preloader text-center">
              <div className="circle" />
            </div>
            {/*Offcanvas sidebar*/}
            <aside id="sidebar-wrapper" className="custom-scrollbar offcanvas-sidebar">
              <button className="off-canvas-close"><i className="elegant-icon icon_close" /></button>
              <div className="sidebar-inner">
                {/*Categories*/}
                {/*Latest*/}
                {/*Ads*/}
              </div>
            </aside>
            {/* Start Header */}
            <header className="main-header header-style-1 font-heading">
              <div className="header-top">
                <div className="container">
                </div>
              </div>
              <div className="header-sticky">
                <div className="container align-self-center">
                  <div className="mobile_menu d-lg-none d-block" />
                  <div className="main-nav d-none d-lg-block float-left">
                    <nav>
                      {/*Desktop menu*/}
                      <ul className="main-menu d-none d-lg-inline font-small">
                        <li><a href="#"><img className="logo" src="assets\imgs\theme\logo.png" /></a></li>
                        <li> <a href="category.js">Highlights</a> </li>
                        <li className="current.js"> <a href="category.js">Sci-Tech</a> </li>
                        <li> <a href="category.js">Sports</a> </li>
                        <li> <a href="category.js">Entertainment</a> </li>
                        <li> <a href="category.js">Creativity</a> </li>
                        <li> <a href="category.js">3rd eye</a> </li>
                      </ul>
                      {/*Mobile menu*/}
                    </nav>
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
            </header>
            {/*Start search form*/}
            {/* Start Main content */}
            <main>
              <div className="featured-1">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 align-self-center">
                      <p className="text-muted"><span className="typewrite d-inline" data-period={2000} data-type="[ &quot; Highlights. &quot;,&quot; Sci-Tech. &quot;,&quot; Entertainment. &quot; , &quot;Sports. &quot;, &quot;Creativity. &quot; ]" /></p>
                      <h2>Lorem ipsum<span>Lorem</span></h2>
                      <h3 className="mb-20"> Lorem ipsum dolor</h3>
                      <h5 className="text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, eveniet.</h5>
                    </div>
                    <div className="col-lg-6 text-right d-none d-lg-block">
                      <img src="assets\imgs\authors\featured.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="hot-tags pt-30 pb-30 font-small align-self-center">
                  <div className="widget-header-3">
                    <div className="row align-self-center">
                      <div className="col-md-4 align-self-center">
                        <h5 className="widget-title">Featured posts</h5>
                      </div>
                      <div className="col-md-8 text-md-right font-small align-self-center">
                        <p className="d-inline-block mr-5 mb-0"><i className="elegant-icon  icon_tag_alt mr-5 text-muted" />Hot tags:</p>
                        <ul className="list-inline d-inline-block tags">
                          <li className="list-inline-item"><a href="#"># Covid-19</a></li>
                          <li className="list-inline-item"><a href="#"># Inspiration</a></li>
                          <li className="list-inline-item"><a href="#"># Work online</a></li>
                          <li className="list-inline-item"><a href="#"># Stay home</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="loop-grid mb-30">
                  <div className="row">
                    <article className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated" data-wow-delay="0.2s">
                      <div className="post-card-1 border-radius-10 hover-up">
                        <div className="post-thumb thumb-overlay img-hover-slide position-relative" style={{backgroundImage: 'url(assets/imgs/news/thumb-16.jpg)'}}>
                          <a className="img-link" href="category.js" />
                          <span className="top-right-icon bg-success"><i className="elegant-icon icon_camera_alt" /></span>
                        </div>
                        <div className="post-content p-30">
                          <div className="entry-meta meta-0 font-small mb-10">
                            <a href="category.js"><span className="post-cat text-info">Highlights</span></a>
                          </div>
                          <div className="d-flex post-card-content">
                            <h5 className="post-title mb-20 font-weight-900">
                              <a href="category.js">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, eveniet.</a>
                            </h5>
                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                              <span className="post-on">27 August</span>
                              <span className="time-reading has-dot">12 mins read</span>
                              <span className="post-by has-dot">23k views</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated" data-wow-delay="0.2s">
                      <div className="post-card-1 border-radius-10 hover-up">
                        <div className="post-thumb thumb-overlay img-hover-slide position-relative" style={{backgroundImage: 'url(assets/imgs/news/thumb-16.jpg)'}}>
                          <a className="img-link" href="category.js" />
                          <span className="top-right-icon bg-success"><i className="elegant-icon icon_camera_alt" /></span>
                        </div>
                        <div className="post-content p-30">
                          <div className="entry-meta meta-0 font-small mb-10">
                            <a href="category.js"><span className="post-cat text-info">Sci-Tech</span></a>
                          </div>
                          <div className="d-flex post-card-content">
                            <h5 className="post-title mb-20 font-weight-900">
                              <a href="category.js">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, eveniet.</a>
                            </h5>
                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                              <span className="post-on">27 August</span>
                              <span className="time-reading has-dot">12 mins read</span>
                              <span className="post-by has-dot">23k views</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated" data-wow-delay="0.2s">
                      <div className="post-card-1 border-radius-10 hover-up">
                        <div className="post-thumb thumb-overlay img-hover-slide position-relative" style={{backgroundImage: 'url(assets/imgs/news/thumb-16.jpg)'}}>
                          <a className="img-link" href="category.js" />
                          <span className="top-right-icon bg-success"><i className="elegant-icon icon_camera_alt" /></span>
                        </div>
                        <div className="post-content p-30">
                          <div className="entry-meta meta-0 font-small mb-10">
                            <a href="category.js"><span className="post-cat text-info">Sports</span></a>
                          </div>
                          <div className="d-flex post-card-content">
                            <h5 className="post-title mb-20 font-weight-900">
                              <a href="category.js">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, eveniet.</a>
                            </h5>
                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                              <span className="post-on">27 August</span>
                              <span className="time-reading has-dot">12 mins read</span>
                              <span className="post-by has-dot">23k views</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated" data-wow-delay="0.2s">
                      <div className="post-card-1 border-radius-10 hover-up">
                        <div className="post-thumb thumb-overlay img-hover-slide position-relative" style={{backgroundImage: 'url(assets/imgs/news/thumb-16.jpg)'}}>
                          <a className="img-link" href="category.js" />
                          <span className="top-right-icon bg-success"><i className="elegant-icon icon_camera_alt" /></span>
                        </div>
                        <div className="post-content p-30">
                          <div className="entry-meta meta-0 font-small mb-10">
                            <a href="category.js"><span className="post-cat text-info">Entertainment</span></a>
                          </div>
                          <div className="d-flex post-card-content">
                            <h5 className="post-title mb-20 font-weight-900">
                              <a href="category.js">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, eveniet.</a>
                            </h5>
                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                              <span className="post-on">27 August</span>
                              <span className="time-reading has-dot">12 mins read</span>
                              <span className="post-by has-dot">23k views</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated" data-wow-delay="0.2s">
                      <div className="post-card-1 border-radius-10 hover-up">
                        <div className="post-thumb thumb-overlay img-hover-slide position-relative" style={{backgroundImage: 'url(assets/imgs/news/thumb-16.jpg)'}}>
                          <a className="img-link" href="category.js" />
                          <span className="top-right-icon bg-success"><i className="elegant-icon icon_camera_alt" /></span>
                        </div>
                        <div className="post-content p-30">
                          <div className="entry-meta meta-0 font-small mb-10">
                            <a href="category.js"><span className="post-cat text-info">Creativity</span></a>
                          </div>
                          <div className="d-flex post-card-content">
                            <h5 className="post-title mb-20 font-weight-900">
                              <a href="category.js">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, eveniet.</a>
                            </h5>
                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                              <span className="post-on">27 August</span>
                              <span className="time-reading has-dot">12 mins read</span>
                              <span className="post-by has-dot">23k views</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated" data-wow-delay="0.2s">
                      <div className="post-card-1 border-radius-10 hover-up">
                        <div className="post-thumb thumb-overlay img-hover-slide position-relative" style={{backgroundImage: 'url(assets/imgs/news/thumb-16.jpg)'}}>
                          <a className="img-link" href="category.js" />
                          <span className="top-right-icon bg-success"><i className="elegant-icon icon_camera_alt" /></span>
                        </div>
                        <div className="post-content p-30">
                          <div className="entry-meta meta-0 font-small mb-10">
                            <a href="category.js"><span className="post-cat text-info">3rd eye</span></a>
                          </div>
                          <div className="d-flex post-card-content">
                            <h5 className="post-title mb-20 font-weight-900">
                              <a href="category.js">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, eveniet.</a>
                            </h5>
                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                              <span className="post-on">27 August</span>
                              <span className="time-reading has-dot">12 mins read</span>
                              <span className="post-by has-dot">23k views</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
              {/* End Main content */}
              {/*site-bottom*/}
              {/*end site-bottom*/}
              {/* Footer Start*/}
              {/* End Footer */}
              <div className="dark-mark" />
              {/* Vendor JS*/}
              {/* NewsBoard JS */}
            </main></div>
        )
    }
}
export default Spotlight;