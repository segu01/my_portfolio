export default function HeroSection() {
  return (
    <section id="herosection" className="hero--section">
      <div className="hero-section--content--box">
        <div className="hero--section-content">
          <p className="section--title">Hey, I'm Sai Srinivas</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          I am baically from Andhra Pradesh I am Passionate and creative Frontend Developer with a knowledge in web development technologies. Eager to contribute innovative solutions to enhance user experiences and create visually appealing, responsive, and interactive web applications. I bring a fresh perspective, enthusiasm, and a drive to continuously learn and adapt. 
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/avatar.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
