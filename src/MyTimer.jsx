import { useEffect, useState } from "react";

export default function MyTimer(params) {
  const [time, setTime] = useState(" ");

  useEffect(() => {
    setInterval(() => {
      setTime(" " + new Date());
    }, 1000);
  }, []);

  return (
    <div>
      <h1> {time} </h1>
    </div>
  );
}
