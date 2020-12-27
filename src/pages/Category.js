import React from 'react';

class Category extends React.Component{
    render(){
        return(
            <div>
        <div className="scroll-progress primary-bg" />
        {/* Start Preloader */}
        <div className="preloader text-center">
          <div className="circle" />
        </div>
        {/* Start Preloader */}
        {/*     <div class="preloader text-center">
        <div class="circle"></div>
    </div> */}
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
                    <li> <a href="category-big.html">Highlights</a> </li>
                    <li className="current-item"> <a href="category-big.html">Sci-Tech</a> </li>
                    <li> <a href="category-big.html">Sports</a> </li>
                    <li> <a href="category-big.html">Entertainment</a> </li>
                    <li> <a href="category-big.html">Creativity</a> </li>
                    <li> <a href="category-big.html">3rd eye</a> </li>
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
          {/*archive header*/}
          <div className="archive-header pt-50 text-center">
            <div className="container">
              <h2 className="font-weight-900">Highlights</h2>
              <div className="breadcrumb">
                <a href="index.html" rel="nofollow">Home</a>
                <span /> Highlights
              </div>
              <div className="bt-1 border-color-1 mt-30 mb-50" />
            </div>
          </div>
          <div className="container">
            <div className="loop-list loop-list-style-1">
              <div className="row">
                <article className="col-md-6 mb-40 wow fadeInUp  animated">
                  <div className="post-card-1 border-radius-10 hover-up">
                    <div className="post-thumb thumb-overlay img-hover-slide position-relative" style={{backgroundImage: 'url(assets/imgs/news/news-6.jpg)'}}>
                      <a className="img-link" href="#" />
                      <ul className="social-share">
                        <li><a href="#"><i className="elegant-icon social_share" /></a></li>
                        <li><a className="fb" href="#" title="Share on Facebook" target="_blank"><i className="elegant-icon social_facebook" /></a></li>
                        <li><a className="tw" href="#" target="_blank" title="Tweet now"><i className="elegant-icon social_twitter" /></a></li>
                        <li><a className="pt" href="#" target="_blank" title="Pin it"><i className="elegant-icon social_pinterest" /></a></li>
                      </ul>
                    </div>
                    <div className="post-content p-30">
                      <div className="entry-meta meta-0 font-small mb-10">
                        <a href="category.html"><span className="post-cat text-info">Artists</span></a>
                        <a href="category.html"><span className="post-cat text-success">Film</span></a>
                      </div>
                      <div className="d-flex post-card-content">
                        <h5 className="post-title mb-20 font-weight-900">
                          <a href="#">Easy Ways to Use Alternatives to Plastic</a>
                        </h5>
                        <div className="post-excerpt mb-25 font-small text-muted">
                          <p>Graduating from a top accelerator or incubator can be as career-defining for a&nbsp;startup founder&nbsp;as an elite university diploma. The intensive programmes, which…</p>
                        </div>
                        <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                          <span className="post-on">27 August</span>
                          <span className="time-reading has-dot">12 mins read</span>
                          <span className="post-by has-dot">23k views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="col-md-6 mb-40 wow fadeInUp  animated">
                  <div className="post-card-1 border-radius-10 hover-up">
                    <div className="post-thumb thumb-overlay img-hover-slide position-relative" style={{backgroundImage: 'url(assets/imgs/news/news-8.jpg)'}}>
                      <a className="img-link" href="#" />
                      <ul className="social-share">
                        <li><a href="#"><i className="elegant-icon social_share" /></a></li>
                        <li><a className="fb" href="#" title="Share on Facebook" target="_blank"><i className="elegant-icon social_facebook" /></a></li>
                        <li><a className="tw" href="#" target="_blank" title="Tweet now"><i className="elegant-icon social_twitter" /></a></li>
                        <li><a className="pt" href="#" target="_blank" title="Pin it"><i className="elegant-icon social_pinterest" /></a></li>
                      </ul>
                    </div>
                    <div className="post-content p-30">
                      <div className="entry-meta meta-0 font-small mb-10">
                        <a href="category.html"><span className="post-cat">Fashion</span></a>
                      </div>
                      <div className="d-flex post-card-content">
                        <h5 className="post-title mb-20 font-weight-900">
                          <a href="#">Tips for Growing Healthy, Longer Hair</a>
                        </h5>
                        <div className="post-excerpt mb-25 font-small text-muted">
                          <p>Proin vitae placerat quam. Ut sodales eleifend urna, in condimentum tortor ultricies eu. Nunc auctor iaculis dolorProin vitae placerat quam. Proin vitae placerat quam.</p>
                        </div>
                        <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                          <span className="post-on">12 August</span>
                          <span className="time-reading has-dot">6 mins read</span>
                          <span className="post-by has-dot">3k views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="col-md-6 mb-40 wow fadeInUp  animated">
                  <div className="post-card-1 border-radius-10 hover-up">
                    <div className="post-thumb thumb-overlay img-hover-slide position-relative" style={{backgroundImage: 'url(assets/imgs/news/news-10.jpg)'}}>
                      <a className="img-link" href="#" />
                      <span className="top-right-icon bg-secondary"><i className="elegant-icon icon_heart_alt" /></span>
                      <ul className="social-share">
                        <li><a href="#"><i className="elegant-icon social_share" /></a></li>
                        <li><a className="fb" href="#" title="Share on Facebook" target="_blank"><i className="elegant-icon social_facebook" /></a></li>
                        <li><a className="tw" href="#" target="_blank" title="Tweet now"><i className="elegant-icon social_twitter" /></a></li>
                        <li><a className="pt" href="#" target="_blank" title="Pin it"><i className="elegant-icon social_pinterest" /></a></li>
                      </ul>
                    </div>
                    <div className="post-content p-30">
                      <div className="entry-meta meta-0 font-small mb-10">
                        <a href="category.html"><span className="post-cat text-success">Lifestyle</span></a>
                      </div>
                      <div className="d-flex post-card-content">
                        <h5 className="post-title mb-20 font-weight-900">
                          <a href="#">Project Ideas Around the House</a>
                        </h5>
                        <div className="post-excerpt mb-25 font-small text-muted">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor condimentum metus non tempor. Maecenas non augue aliquam, facilisis lectus quis, lacinia risus.</p>
                        </div>
                        <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                          <span className="post-on">27 August</span>
                          <span className="time-reading has-dot">12 mins read</span>
                          <span className="post-by has-dot">23k views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="col-md-6 mb-40 wow fadeInUp  animated">
                  <div className="post-card-1 border-radius-10 hover-up">
                    <div className="post-thumb thumb-overlay img-hover-slide position-relative" style={{backgroundImage: 'url(assets/imgs/news/news-12.jpg)'}}>
                      <a className="img-link" href="#" />
                      <ul className="social-share">
                        <li><a href="#"><i className="elegant-icon social_share" /></a></li>
                        <li><a className="fb" href="#" title="Share on Facebook" target="_blank"><i className="elegant-icon social_facebook" /></a></li>
                        <li><a className="tw" href="#" target="_blank" title="Tweet now"><i className="elegant-icon social_twitter" /></a></li>
                        <li><a className="pt" href="#" target="_blank" title="Pin it"><i className="elegant-icon social_pinterest" /></a></li>
                      </ul>
                    </div>
                    <div className="post-content p-30">
                      <div className="entry-meta meta-0 font-small mb-10">
                        <a href="category.html"><span className="post-cat text-danger">Hotels</span></a>
                      </div>
                      <div className="d-flex post-card-content">
                        <h5 className="post-title mb-20 font-weight-900">
                          <a href="#">How to Give Yourself a Spa Day from Home</a>
                        </h5>
                        <div className="post-excerpt mb-25 font-small text-muted">
                          <p>Graduating from a top accelerator or incubator can be as career-defining for a&nbsp;startup founder&nbsp;as an elite university diploma. The intensive programmes, which…</p>
                        </div>
                        <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                          <span className="post-on">18 August</span>
                          <span className="time-reading has-dot">14 mins read</span>
                          <span className="post-by has-dot">25k views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="col-md-6 mb-40 wow fadeInUp  animated">
                  <div className="post-card-1 border-radius-10 hover-up">
                    <div className="post-thumb thumb-overlay img-hover-slide position-relative" style={{backgroundImage: 'url(assets/imgs/news/news-7.jpg)'}}>
                      <a className="img-link" href="#" />
                      <span className="top-right-icon bg-secondary"><i className="elegant-icon icon_heart_alt" /></span>
                      <ul className="social-share">
                        <li><a href="#"><i className="elegant-icon social_share" /></a></li>
                        <li><a className="fb" href="#" title="Share on Facebook" target="_blank"><i className="elegant-icon social_facebook" /></a></li>
                        <li><a className="tw" href="#" target="_blank" title="Tweet now"><i className="elegant-icon social_twitter" /></a></li>
                        <li><a className="pt" href="#" target="_blank" title="Pin it"><i className="elegant-icon social_pinterest" /></a></li>
                      </ul>
                    </div>
                    <div className="post-content p-30">
                      <div className="entry-meta meta-0 font-small mb-10">
                        <a href="category.html"><span className="post-cat text-success">Lifestyle</span></a>
                      </div>
                      <div className="d-flex post-card-content">
                        <h5 className="post-title mb-20 font-weight-900">
                          <a href="#">How to See Alberta: A 10-Day Suggested Driving Itinerary</a>
                        </h5>
                        <div className="post-excerpt mb-25 font-small text-muted">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor condimentum metus non tempor. Maecenas non augue aliquam, facilisis lectus quis, lacinia risus.</p>
                        </div>
                        <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                          <span className="post-on">27 August</span>
                          <span className="time-reading has-dot">12 mins read</span>
                          <span className="post-by has-dot">23k views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="col-md-6 mb-40 wow fadeInUp  animated">
                  <div className="post-card-1 border-radius-10 hover-up">
                    <div className="post-thumb thumb-overlay img-hover-slide position-relative" style={{backgroundImage: 'url(assets/imgs/news/news-13.jpg)'}}>
                      <a className="img-link" href="#" />
                      <ul className="social-share">
                        <li><a href="#"><i className="elegant-icon social_share" /></a></li>
                        <li><a className="fb" href="#" title="Share on Facebook" target="_blank"><i className="elegant-icon social_facebook" /></a></li>
                        <li><a className="tw" href="#" target="_blank" title="Tweet now"><i className="elegant-icon social_twitter" /></a></li>
                        <li><a className="pt" href="#" target="_blank" title="Pin it"><i className="elegant-icon social_pinterest" /></a></li>
                      </ul>
                    </div>
                    <div className="post-content p-30">
                      <div className="entry-meta meta-0 font-small mb-10">
                        <a href="category.html"><span className="post-cat text-danger">Hotels</span></a>
                      </div>
                      <div className="d-flex post-card-content">
                        <h5 className="post-title mb-20 font-weight-900">
                          <a href="#">My 6 Favorite Hostels in Panama City, Panama</a>
                        </h5>
                        <div className="post-excerpt mb-25 font-small text-muted">
                          <p>Graduating from a top accelerator or incubator can be as career-defining for a&nbsp;startup founder&nbsp;as an elite university diploma. The intensive programmes, which…</p>
                        </div>
                        <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                          <span className="post-on">18 August</span>
                          <span className="time-reading has-dot">14 mins read</span>
                          <span className="post-by has-dot">25k views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div className="row mt-50">
              <div className="col-12">
                <div className="pagination-area mb-30 wow fadeInUp animated">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-start">
                      <li className="page-item"><a className="page-link" href="#"><i className="elegant-icon arrow_left" /></a></li>
                      <li className="page-item active"><a className="page-link" href="#">01</a></li>
                      <li className="page-item"><a className="page-link" href="#">02</a></li>
                      <li className="page-item"><a className="page-link" href="#">03</a></li>
                      <li className="page-item"><a className="page-link" href="#">04</a></li>
                      <li className="page-item"><a className="page-link" href="#"><i className="elegant-icon arrow_right" /></a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* End Main content */}
        {/*site-bottom*/}
        {/*end site-bottom*/}
        <div className="dark-mark" />
      </div>
        )
    }
}
export default Category;