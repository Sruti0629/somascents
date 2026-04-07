import  candleLogo from './images/logo-scents.jpg';

export default function Header(){
    return(
        <div className='header-logo'>
            <img src={candleLogo} alt='logo' width="90" style={{padding: "10px 0px"}}/>
            <h1>Scented Candle</h1>
        </div>
    )
}   