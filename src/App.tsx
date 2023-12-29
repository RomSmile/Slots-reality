import './styles/header.scss';
import witcher from './images/witcher.png';
import frontSparks from './images/sparks-front.svg';
import backSparks from './images/sparks-back.svg';
import logo from './images/logo.svg';

export const App = () => {
  const copyCode = (promo: string) => {
    navigator.clipboard.writeText(promo);
    alert("Copied!");
  }

  return (
    <>
      <header className="header">
        <span className="terms">*Terms and Conditions Apply</span>
        <img src={logo} alt="logo" className="logo" />
        <img src={witcher} alt="withcer" className="witcher" />
        <img src={backSparks} alt="back sparks" className="back-sparks" />
        <img src={frontSparks} alt="front sparks" className="front-sparks" />
        <div className="header__content-wrapper">
          <h1>300% <span>welcome bonus</span></h1>
          <div className="code-wrapper">
            <div className="code">
              <span id="promo-code">witcher</span>
            </div>
            <button onClick={() => copyCode('witcher')}>copy code</button>
          </div>
          <a href="#">play now</a>
        </div>
      </header>
    </>

  )
}