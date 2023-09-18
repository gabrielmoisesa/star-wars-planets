import './Header.css';
import starwarsLogo from '../../assets/svgs/logo-star-wars.svg';
import ellipse1 from '../../assets/svgs/ellipse-1.svg';
import ellipse2 from '../../assets/svgs/ellipse-2.svg';
import line1 from '../../assets/svgs/line-1.svg';

function Header() {
  return (
    <header>
      <div className="ellipse-container">
        <img src={ ellipse1 } alt="Yellow Circle" className="ellipse1" />
        <div className="ellipse2-container">
          <img src={ ellipse2 } alt="White Circle" className="ellipse2" />
          <img className="starwars-logo" src={ starwarsLogo } alt="Star Wars Logo" />
        </div>
        <img className="line1" src={ line1 } alt="White line" />
      </div>
    </header>
  );
}

export default Header;
