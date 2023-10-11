import { Carousel } from "rsuite";
import img1 from "../assets/banners/img-1.jpg";
import img2 from "../assets/banners/img-2.jpg";
import img3 from "../assets/banners/img-3.jpg";
import img4 from "../assets/banners/img-4.jpg";
import img5 from "../assets/banners/img-5.jpg";
import img6 from "../assets/banners/img-6.jpg";
const Banner = () => (
  <Carousel autoplay className="custom-slider">
    <img src={img1} alt="image1" />
    <img src={img2} alt="image2" />
    <img src={img3} alt="image3" />
    <img src={img4} alt="image4" />
    <img src={img5} alt="image5" />
    <img src={img6} alt="image6" />
  </Carousel>
);
export default Banner;
