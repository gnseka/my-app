import style from "./index.module.css";

export default function Premier(params) {
  const premierCards = [
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00356431-avjaaezuqt-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00357984-guecmnjqyn-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00358727-luenqusahh-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00356191-uylynhqtcq-portrait.jpg",
  ];

  return (
    <div className={style.bgColor}>
      <img
        style={{
          maxWidth: "100%",
        }}
        src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
      />

      <h3>Premiers</h3>
      <h3>Brand New</h3>

      <div className={style.cardContainer}>
        {premierCards.map((element, index) => {
          return (
            <div
              key={index}
              className={style.cardBg}
              style={{
                backgroundImage: "url(" + element + ")",
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
