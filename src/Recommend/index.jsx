import "./index.css";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

export default function Recommend(params) {
  // const imageMovies = [
  //   "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTE0SyBsaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00310794-cuvupfmdst-portrait.jpg",
  //   "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ni41LzEwICA3MC41SyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00339118-gvcavdpszx-portrait.jpg",
  //   "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTE0SyBsaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00310794-cuvupfmdst-portrait.jpg",
  //   "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTE0SyBsaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00310794-cuvupfmdst-portrait.jpg",
  //   "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NzkuOUsgbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00343918-xljxjgxqjz-portrait.jpg",
  // ];

  const imageMovies = [
    {
      src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTE0SyBsaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00310794-cuvupfmdst-portrait.jpg",
      title: "bai jan ",
      decription: "bai jan  is a nice moeie",
    },
    {
      src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ni41LzEwICA3MC41SyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00339118-gvcavdpszx-portrait.jpg",
      title: "kerala story",
      decription: "kerala story is a drama",
    },
    {
      src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTE0SyBsaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00310794-cuvupfmdst-portrait.jpg",
      title: "kerala story",
      decription: "kerala story is a drama",
    },
    {
      src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NzkuOUsgbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00343918-xljxjgxqjz-portrait.jpg",
      title: "kerala story",
      decription: "kerala story is a drama",
    },
  ];

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: false,
  //   dots: false,
  //   fade: true,
  // };

  return (
    <div style={{ padding: "3rem" }}>
      <h3>Recommended Movies</h3>

      <div className="image-wrapper">
        <Slider {...settings}>
          {imageMovies.map((element, index) => {
            return (
              <div
                key={index}
                // className="card"
                style={{
                  maxWidth: "15vw",
                }}
              >
                <img src={element.src} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{element.title}</h5>
                  <p className="card-text">{element.decription}</p>
                  {/* <a href="#" className="btn btn-primary">
                    {element.decription}
                  </a> */}
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
