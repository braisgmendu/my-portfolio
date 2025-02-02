export default function HereSection() {
    return (
        <section id="heroSection" className="hero-section">
            <div className="hero-section-content-box">
                <div className="hero-section-content">
                    <p className="section-title"> Hey, I'm Brais</p>
                    <h1 className="hero-section-title">
                        <span className="hero-section-title-color">
                            Full Stack
                        </span>{" "}
                        <br />
                        Developer
                    </h1>
                    <p className="hero-section-description">
                        description
                        <br />
                        more description
                    </p>
                </div>
                <button className="btn btn-primary"> Get In Touch</button>
            </div>
            <div className="hero-section-img">
                <img src="/img/myImg.jpg" alt="hero Section" />
            </div>
        </section>
    )
}