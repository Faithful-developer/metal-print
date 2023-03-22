import './Footer.scss';
import Logo from '../../assets/images/icons/logo.png';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <img src={Logo} alt="" className='logo'/>
                    <ul className='phone-number'>
                        <li>
                            <a href="tel:+998900215550">
                                +998 (90) 021-55-50
                            </a>
                        </li>
                        <li>
                            <a href="tel: +998900615550">
                                +998 (90) 061-55-50
                            </a>
                        </li>
                        <li>
                            <a href="tel: +998909715550">
                                +998 (90) 971-55-50
                            </a>
                        </li>
                        <li>
                            <a href="tel: +998903720555">
                                +998( 90) 372-05-55
                            </a>
                        </li>
                    </ul>
                    <ul className='email-address'>
                        <li>
                            <a href="https://goo.gl/maps/qKsRN8eMh7yiPZky8">
                                Республика Узбекистан, г. Ташкент., Бектемирский р-н,
                                ул. Олтинтопган 40.
                            </a>
                        </li>
                        <li>
                            <a href="mailto: tassintez@mail.ru ">
                                tassintez@mail.ru
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer