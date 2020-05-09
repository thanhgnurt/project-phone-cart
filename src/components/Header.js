import React, { Component } from 'react'
export default class Header extends Component {
    render() {
        return (
           
                <header>
                    <ul
                        className="side-nav hidden custom-scrollbar sn-bg-2 ps ps--theme_default"
                        id="slide-out"
                        data-ps-id="c27390a3-9efc-e0d8-197a-ab96d73a156a"
                    >
                        <li>
                            <div className="logo-wrapper waves-light waves-effect waves-light">
                                <a href='home'>
                                    <img
                                        className="img-fluid flex-center"
                                        alt = ''
                                        src="http://mdbootstrap.com/img/logo/mdb-transparent.png"
                                    />
                                </a>
                            </div>
                        </li>
                        <li>
                            <ul className="social">
                                <li>
                                    <a className="icons-sm fb-ic"  href='home'>
                                        <i className="fa fa-facebook"> </i>
                                    </a>
                                </li>
                                <li>
                                    <a className="icons-sm pin-ic" href='home'>
                                        <i className="fa fa-pinterest"> </i>
                                    </a>
                                </li>
                                <li>
                                    <a className="icons-sm gplus-ic"  href='home'>
                                        <i className="fa fa-google-plus"> </i>
                                    </a>
                                </li>
                                <li>
                                    <a className="icons-sm tw-ic"  href='home'>
                                        <i className="fa fa-twitter"> </i>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <form className="search-form" role="search">
                                <div className="form-group waves-light waves-effect waves-light">
                                    <input className="form-control" type="text" placeholder="Search" />
                                </div>
                            </form>
                        </li>
                        <li>
                            <ul className="collapsible collapsible-accordion">
                                <li>
                                    <a className="collapsible-header waves-effect arrow-r"  href='home'>
                                        <i className="fa fa-shopping-bag" /> Product Page
              <i className="fa fa-angle-down rotate-icon" />
                                    </a>
                                    <div className="collapsible-body">
                                        <ul>
                                            <li>
                                                <a className="waves-effect" href="product.html" >
                                                    Product Page V.1
                  </a>
                                            </li>
                                            <li>
                                                <a className="waves-effect" href="product-page.html"  >
                                                    Product Page V.2
                  </a>
                                            </li>
                                            <li>
                                                <a className="waves-effect" href="product-page-4.html" >
                                                    Product Page V.3
                  </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="active">
                                    <a className="collapsible-header waves-effect arrow-r active"  href='home'>
                                        <i className="fa fa-shopping-cart" /> Cart Pages
              <i className="fa fa-angle-down rotate-icon" />
                                    </a>
                                    <div className="collapsible-body">
                                        <ul>
                                            <li>
                                                <a className="waves-effect" href="cart.html" >
                                                    Page with shopping cart
                  </a>
                                            </li>
                                            <li>
                                                <a className="waves-effect" href="contact.html" >
                                                    Page with contact form
                  </a>
                                            </li>
                                            <li>
                                                <a className="waves-effect" href="contact-2.html"  >
                                                    Page with contact form V.2
                  </a>
                                            </li>
                                            <li>
                                                <a className="waves-effect" href="login.html"  >
                                                    Page with sign in form
                  </a>
                                            </li>
                                            <li>
                                                <a className="waves-effect" href="terms.html"  >
                                                    Page with 'terms of use'
                  </a>
                                            </li>
                                            <li>
                                                <a className="waves-effect" href="faq.html"  >
                                                    Page with 'FAQ'
                  </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a className="collapsible-header waves-effect arrow-r"  href='home'>
                                        <i className="fa fa-dashboard" /> Homepages
              <i className="fa fa-angle-down rotate-icon" />
                                    </a>
                                    <div className="collapsible-body">
                                        <ul>
                                            <li>
                                                <a className="waves-effect" href="home-page.html">
                                                    Ecommerce homepage default
                  </a>
                                            </li>
                                            <li>
                                                <a className="waves-effect" href="home-page-2.html">
                                                    Ecommerce homepage full width
                  </a>
                                            </li>
                                            <li>
                                                <a className="waves-effect" href="home-page-3-carousel.html">
                                                    Ecommerce homepage V.3 Carousel
                  </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="waves-effect"
                                                    href="home-page-3-full-page-carousel.html"
                                                >
                                                    Ecommerce homepage V.3 Full Page Carousel
                  </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="waves-effect"
                                                    href="home-page-3-half-page-carousel.html"
                                                >
                                                    Ecommerce homepage V.3 Half Page Carousel
                  </a>
                                            </li>
                                            <li>
                                                <a className="waves-effect" href="home-page-4.html">
                                                    Ecommerce homepage V.4
                  </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a className="collapsible-header waves-effect arrow-r"  href='home'>
                                        <i className="fa fa-desktop" /> Post Pages
              <i className="fa fa-angle-down rotate-icon" />
                                    </a>
                                    <div className="collapsible-body">
                                        <ul>
                                            <li>
                                                <a className="waves-effect" href="post.html">
                                                    Page with column on the right
                  </a>
                                            </li>
                                            <li>
                                                <a className="waves-effect" href="blog-post-left-column.html">
                                                    Page with newsletter on the left
                  </a>
                                            </li>
                                            <li>
                                                <a className="waves-effect" href="blog-post.html">
                                                    Page with newsletter on the right
                  </a>
                                            </li>
                                            <li>
                                                <a className="waves-effect" href="blog-post-full-width.html">
                                                    Full width page with logged user
                  </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="waves-effect"
                                                    href="blog-post-full-width%20not%20logged%20in%20user.html"
                                                >
                                                    Full width page with not logged user
                  </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a className="collapsible-header waves-effect arrow-r"  href='home'>
                                        <i className="fa fa-diamond" /> Category Pages
              <i className="fa fa-angle-down rotate-icon" />
                                    </a>
                                    <div className="collapsible-body">
                                        <ul>
                                            <li>
                                                <a
                                                    className="waves-effect"
                                                    href="category-list-left-column.html"
                                                >
                                                    Category list with left column
                  </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="waves-effect"
                                                    href="category-list-right-column.html"
                                                >
                                                    Category list with right column
                  </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="waves-effect"
                                                    href="category-grid-left-column.html"
                                                >
                                                    Category grid with left column
                  </a>
                                            </li>
                                            <li>
                                                <a className="waves-effect" href="category-right-column.html">
                                                    Category grid with right column
                  </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="waves-effect"
                                                    href="category-grid-left-column-carousel.html"
                                                >
                                                    Category grid with left column carousel
                  </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <div className="sidenav-bg mask-strong" />
                        <div className="ps__scrollbar-x-rail">
                            <div tabIndex={0} className="ps__scrollbar-x" />
                        </div>
                        <div className="ps__scrollbar-y-rail">
                            <div tabIndex={0} className="ps__scrollbar-y" />
                        </div>
                    </ul>
                    <nav className="navbar fixed-top navbar-toggleable-md navbar-expand-lg navbar-dark scrolling-navbar double-nav">
                        <div className="float-left">
                            <a className="button-collapse" data-activates="slide-out"  href='home'>
                                <i className="fa fa-bars" />
                            </a>
                        </div>
                        <div className="breadcrumb-dn mr-auto">
                            <ol className="breadcrumb header-breadcrumb">
                                <li className="breadcrumb-item">
                                    <a  href='home'>Trang Chủ</a>
                                </li>
                            </ol>
                        </div>
                        <ul className="nav navbar-nav nav-flex-icons ml-auto">
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle waves-effect waves-light"
                                    id="dropdownMenu1"
                                    aria-expanded="false"
                                    aria-haspopup="true"
                                    data-toggle="dropdown"
                                    href='home'
                                >
                                    <i className="fa fa-user" /> Tài Khoản
          </a>
                                <div
                                    className="dropdown-menu dropdown-menu-right"
                                    aria-labelledby="dropdownMenu1"
                                >
                                    <a className="dropdown-item waves-effect waves-light"  href='home'>Đăng Ký</a>
                                    <a className="dropdown-item waves-effect waves-light"  href='home'>Đăng Nhập</a>
                                    <a className="dropdown-item waves-effect waves-light"  href='home'>Đăng Xuất</a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </header>
               
        )
    }
}
