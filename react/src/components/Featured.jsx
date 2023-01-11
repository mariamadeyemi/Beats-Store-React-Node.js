import image from "../assets/landing-page/images/image-confetti.jpg"
function Featured() {
    return ( 
        <section className="featured-products">
          <h2 className="featured-text">Featured Products</h2>
          <div className="card-wrapper">
            <div className="card">
        <img src={image} alt="img" className="feature-img" />
        <p className="p-name">cool afro</p>
        <p className="p-price">#10000</p>
            </div>

            <div className="card">
        <img src={image} alt="img" className="feature-img"/>
        <p className="p-name">cool afro</p>
        <p className="p-price">#10000</p>
            </div>

            <div className="card">
        <img src={image} alt="img" className="feature-img"/>
        <p className="p-name">cool afro</p>
        <p className="p-price">#10000</p>
            </div>
          </div>
        </section>
     );
}

export default Featured;