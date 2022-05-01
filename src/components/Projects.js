// Import Assets
import GiX from '../assets/gix.png';
import metagram from '../assets/metagram.png';
import investidea from '../assets/investidea.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>GiX Exchange (2022)</h3>
                    <img src={GiX} alt="GiX Page" />
                    <p>
                        A decentralised exchange built with Ethereum Smart Contracts, React and Redux library. Facilitates ERC-20 token trading with open order books and TradingView price charts. 
                    </p>

                    <a href="https://mj221.github.io/gix-exchange/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/mj221/gix-exchange" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Meta Gram (2021)</h3>
                    <img src={metagram} alt="Metagram Page" />
                    <p>
                        A decentralised, immutable and censorship resistant social media platform inspired by Instagram. Built with Ethereum Smart Contracts, Infura IPFS and ReactJS with Bootstrap.
                    </p>

                    <a href="https://mj221.github.io/metagram/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/mj221/metagram" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>InvestIdea (2020)</h3>
                    <img src={investidea} alt="InvestIdea Page" />
                    <p>
                        A decentralised crowdfunding platform built using Ethereum Smart Contracts with Remix IDE and VueJs front end. Built at the University of Queensland. Integrated with Google App Engine.
                    </p>

                    <a href="https://coms4507-313410.uc.r.appspot.com/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/mj221/crowdfunding-master" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;