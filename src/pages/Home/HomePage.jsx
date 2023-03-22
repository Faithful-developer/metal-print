import './HomePage.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Helmet} from 'react-helmet'
import Slider from 'react-slick'
import CarouselData from "./Data/CarouselData";
import ProductCard from "../../components/ProductCard";
import ProductData from "./Data/ProductData";
import Footer from "../../containers/Footer";
import MetalLid from "./AnimatedCard";
import PhotoDesign1 from "./design-1.png";
import PhotoDesign2 from "./design-2.png";
import PhotoDesign3 from "./design-3.png";
const HomePage = () => {
    const settings = {
        infinite: true,
        autoplay: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const imageList = [PhotoDesign1, PhotoDesign2, PhotoDesign3];

    return (
        <>
            <Helmet>
                <title>Главная</title>
            </Helmet>
            <div className='home-slider'>
                <Slider {...settings}>
                    {
                        CarouselData.map(item => (
                            <div className="slide">
                                <img src={item.imgLink} alt=""/>
                                {/*<div className="context">*/}
                                {/*    <h2>{item.title}</h2>*/}
                                {/*    <p>{item.overview}</p>*/}
                                {/*</div>*/}
                            </div>
                        ))
                    }
                </Slider>
            </div>
            <div className="product-model">
                <div className="container">
                    <div className="product-model-wrapper">
                        <div className="mm-82">
                            <MetalLid imageList={imageList} />
                            <h2>
                                Twist off 82мм
                            </h2>
                        </div>
                        <div className="mm-66">
                            <MetalLid imageList={imageList} />
                            <h2>
                                Twist off 66мм
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product">
                <div className="container">
                    <div className="product-wrapper">
                        {
                            ProductData.map(item => (
                                <ProductCard
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    imgLink={item.imgLink}
                                    overview={item.overview}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default HomePage
