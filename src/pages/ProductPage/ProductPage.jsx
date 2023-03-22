import './ProductPage.scss'
import ProductData from "../Home/Data/ProductData";
import Footer from "../../containers/Footer";

const ProductPage = ({match}) => {
    let id = parseInt(match.params.id)

    function findArrayElementByTitle(array, idNumber) {
        return array.find((element) => {
            return element.id === idNumber;
        })
    }

    let Product = findArrayElementByTitle(ProductData, id)

    return (
        <>
            <div className="product-wrapper">
                <div className="container">
                    <div className="container-info">
                        <div className="img-wrapper">
                            <img src={Product.imgLink} alt=""/>
                        </div>
                        <div className="content-wrapper">
                            <h1>{Product.title}</h1>
                        </div>
                    </div>
                    <div className="container-overview">
                        <p>{Product.moreInfo}
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default ProductPage
