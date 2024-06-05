import styled from "styled-components"

export default function Navbar() {


    const Wrapper = styled.section`
    .header-back{
        background : #f8f9fa;
        padding : 5px 0px;
    }
    .nb{
        color : #212529;
        font-weight : 600;
        font-size : 24px;
    }
    .nav1{
        color : #717171;
        padding : 10px 20px 10px 20px !important;
    }
    .nav1:hover{
        color : #72AEC8
    }
    .icon-main{
        padding-right : 20px;
        font-size : 18px;
        color : #212529;
    }
    .icon-main2{
        font-size : 18px;
        color : #212529;
    }
    .btn-toggler{
        background-color : #212529;
    }
    `


    return (
        <Wrapper>
            <header className="header-back">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg ">
                        <a className="navbar-brand nb" href="#">MiniStore</a>
                        <button className="navbar-toggler btn-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item active">
                                    <a className="nav-link nav1" href="#">HOME</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link nav1" href="#">SERVICES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link nav1" href="#">PRODUCTS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link nav1" href="#">WATCHES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link nav1" href="#">SALE</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link nav1" href="#">BLOG</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle nav1" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                        PAGES
                                    </a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">ABOUT</a>
                                        <a className="dropdown-item" href="#">BLOG</a>
                                        {/* <div className="dropdown-divider"></div> */}
                                        <a className="dropdown-item" href="#">SHOPE</a>
                                        <a className="dropdown-item" href="#">CART</a>
                                        <a className="dropdown-item" href="#">CHECKOUT</a>
                                        <a className="dropdown-item" href="#">SINGLE POST</a>
                                        <a className="dropdown-item" href="#">SINGLE PRODUCT</a>
                                        <a className="dropdown-item" href="#">CONTACT</a>
                                    </div>
                                </li>

                            </ul>
                            <a href="#" className="icon-main"><i className="fa fa-search" aria-hidden="true"></i></a>
                            <a href="#" className="icon-main"><i className="fa fa-user-o" aria-hidden="true"></i></a>
                            <a href="#" className="icon-main2"><i className="fa fa-shopping-cart" aria-hidden="true"></i></a>

                        </div>
                    </nav>
                </div>
            </header>
        </Wrapper>
    )
}