import { useState } from "react";

export default function Counter(params) {
  const initialData = {
    name: "",
    counter: 0,
  };

  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("my inital value");

  const [isLightOn, setIsLightOn] = useState(true);

  const [formData, setFormData] = useState(initialData);

  const [inputVal, setInputVal] = useState("mallik");

  const increseClick = () => {
    setCounter(counter + 1);
  };

  const decreaseClick = () => {
    setCounter(counter - 1);
  };

  const changeTextName = () => {
    setName("my name is malik");
  };

  const changeFormData = () => {
    setFormData({
      name: "mallik",
      counter: 123,
    });
  };

  const onDivClick = () => {
    setIsLightOn(!isLightOn);
  };

  function getImage() {
    if (isLightOn) {
      return (
        <div
          style={{
            backgroundImage:
              "url(data:image/jpeg;base64,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)",
            height: "40vh",
            width: "17vw",
            cursor: "pointer",
          }}
          onClick={onDivClick}
        ></div>
      );
    } else {
      return (
        <div
          style={{
            backgroundImage:
              "url(https://d1hrwyvk1pin3o.cloudfront.net/AcuCustom/Sitename/DAM/014/red_light_bulb.jpg)",
            height: "40vh",
            width: "17vw",
            cursor: "pointer",
          }}
          onClick={onDivClick}
        ></div>
      );
    }
  }

  function onInputChange(event) {
    setInputVal(event.target.value);

    console.log("here", event.target.value);
  }

  return (
    <div style={{ margin: "10%" }}>
      <h2>{formData.name}</h2>
      <h2>{formData.counter}</h2>
      <h2>{inputVal}</h2>
      <button onClick={increseClick}>Increase</button>
      <button onClick={decreaseClick}>Decrease</button>
      <button onClick={changeTextName}>Change text name</button>
      <button onClick={changeFormData}>Change form data</button>
      {getImage()}

      <input type="text" onChange={onInputChange} />
    </div>
  );
}
