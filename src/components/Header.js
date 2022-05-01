// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="MJ" />

            <div className='header__content'>
                <h1>Hi, I'm MinJae(MJ) Lee</h1>
                <p>Blockchain Developer</p>
                <a href="mailto:mjkid221@gmail.com" className='button'>Contact me for a cup of coffee!</a>
            </div>
        </section>
    );
}

export default Header;