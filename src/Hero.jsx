import heroimg from "./assets/hero.svg";
//undraw.co

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-center">
                <div className="hero-title">
                    <h1>Contentful CMS</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Exercitationem eos repellat ea et maiores fuga,
                        nisi, neque voluptatibus aut accusantium voluptates
                        harum itaque non, id aperiam minus porro hic officia?
                    </p>
                </div>
                <div className="img-container">
                    <img src={heroimg} id="imgc" className="img" />
                </div>
            </div>
        </section>
    );
};
export default Hero;
