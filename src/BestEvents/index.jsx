export default function BestEvents(params) {
  const bestEvents = [
    "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-400,h-400:ote-MTUrIEVWRU5UUw%3D%3D,otc-FFF1CC,otf-Roboto,ots-32,ox-30,oy-324:q-80/plan-for-today-mobile-collection-202207120352.png",
    "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-400,h-400:ote-OCBFVkVOVFM%3D,otc-FFF1CC,otf-Roboto,ots-32,ox-30,oy-324:q-80/plan-for-tomorrow-mobile-collection-202207120352.png",
    "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-400,h-400:ote-MTArIEVWRU5UUw%3D%3D,otc-FFF1CC,otf-Roboto,ots-32,ox-30,oy-324:q-80/head-out-weekend-mobile-collection-202207120352.png",
    "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-400,h-400:ote-MTArIEVWRU5UUw%3D%3D,otc-FFF1CC,otf-Roboto,ots-32,ox-30,oy-324:q-80/weekend-events-mobile-collection-202207120352.png",
  ];

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
        <div className="col">
          <div className="card"  >
            <img src={bestEvents[0]} className="card-img-top" alt="..." />
          </div>
        </div>
        <div className="col">
          <div className="card"  >
            <img src={bestEvents[1]} className="card-img-top" alt="..." />
          </div>
        </div>
        <div className="col">
          <div className="card"  >
            <img src={bestEvents[2]} className="card-img-top" alt="..." />
          </div>
        </div>
        <div className="col">
          <div className="card"  >
            <img src={bestEvents[3]} className="card-img-top" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}
