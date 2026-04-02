import  candleLogo from './images/logo.png';

export default function Header(){
    return(
        <div className='header-logo'>
            <img src={candleLogo} alt='logo' />
            <h1>Scented Candle</h1>
        </div>
    )
}   