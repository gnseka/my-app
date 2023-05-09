import Slider from "react-slick";
import "./index.css";

export default function MySlider(params) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div
      style={{
        maxWidth: "98%",
      }}
    >
      <Slider {...settings}>
        <div>
          <img
            className="slider-img"
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1683036843142_pradeepweb.jpg"
          />
        </div>
        <div>
          <img
            className="slider-img"
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1683108543504_giftcardweb.jpg"
          />
        </div>
        <div>
          <img
            className="slider-img"
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1683108543504_giftcardweb.jpg"
          />
        </div>
        <div>
          <img
            className="slider-img"
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1682617779318_webbannernpa.jpg"
          />
        </div>
        <div>
          <img
            className="slider-img"
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1682676045514_gvprakashkumarmaydesktop.jpg"
          />
        </div>
      </Slider>
    </div>
  );
}
