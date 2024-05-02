import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner1 from "../../../assets/home/1.jpg"
import banner2 from "../../../assets/home/2.jpg"
import banner3 from "../../../assets/home/3.jpg"
import banner4 from "../../../assets/home/4.jpg"

const Banner = () => {
    return (
        
            <Carousel>
                <div>
                    <img src={banner1} />
                </div>
                <div>
                    <img src={banner2} />
                </div>
                <div>
                    <img src={banner3} />
                </div>
                <div>
                    <img src={banner4} />
                </div>
                
            </Carousel>
       
    );
};

export default Banner;