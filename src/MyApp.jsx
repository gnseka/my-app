import NavBar from "./Nav/index";
import MySlider from "./Slider/index";
import Recommend from "./Recommend/index";
import BestEvents from "./BestEvents/index";
import Premier from "./Premier/index";
import Counter from "./Counter";
import Weather from "./Weather/Weather";
import Photo from "./Photo/Photo";
import MyTimer from "./MyTimer";
import Form from "./LoginForm/Form.jsx";

export default function MyApp(params) {
  return (
    <>
      <NavBar />
      <MySlider />
      <Recommend />
      <BestEvents />
      <Premier />
      <Form />
      <Counter />
      <Weather />
      {/* <Photo /> */}
      {/* <MyTimer /> */}
    </>
  );
}
