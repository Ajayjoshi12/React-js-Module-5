import styled from "styled-components"

export default function Slides() {

    const Wraps = styled.section`
    .slide-back{
        background : #EDF1F3;
        height : 631px;
        
    }
    .head-slide{
        font-size : 70px;
        font-weight : 300;
        padding-bottom : 50px;
    }
    .btn-slide{
        background-color : #212529;
        border-color : #212529;
        color : #fff;
        padding : 10px 40px;
        letter-spacing : 2px;
        text-decoration : none;
    }
    .carousel-control-next-icon, .carousel-control-prev-icon{
        width : 50px;
        height : 50px;
    }
    @media(max-width: 768px){
        .head-slide{
            font-size : 65px;
        }
        .slide-back{
            height : auto;
        }
    }

    @media(max-width: 480px){
        .image-holder{
            margin-top : -390px;
            opacity : 0.3;
        }
        .head-slide{
            font-size : 40px;
        }
        .res-padd{
            padding-top : 130px;
        }
    }
    `

    return (
        <Wraps>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active slide-back">
                        <div className="container">
                            <div className="row d-flex align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="res-padd">
                                        <h2 className="head-slide">YOUR PRODUCTS ARE GREAT</h2>
                                        <a href="#" className="btn-slide">SHOP PRODUCT</a>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="image-holder">
                                        <img src="assets/img/banner-image.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item slide-back">
                    <div className="container">
                            <div className="row d-flex align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="res-padd">
                                        <h2 className="head-slide">TECHNOLOGY HACK YOU WON'T GET</h2>
                                        <a href="#" className="btn-slide">SHOP PRODUCT</a>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="image-holder">
                                        <img src="assets/img/banner-image.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </button>
            </div>
        </Wraps>
    )
}