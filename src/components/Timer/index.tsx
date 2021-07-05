import { useEffect, useState } from "react";

const App = ({ onTimerFinish = () => { } }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => { setPercentage((v) => v + 2.5) }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (percentage > 400) {
      setPercentage(0);
      onTimerFinish()
      console.log(percentage);
    }
  }, [percentage]);

  const getSpan1Width = (percentage) => {
    let width = 0;
    if (percentage < 100) width = percentage;
    else width = 100;
    return width;
  };

  const getSpan2Height = (percentage) => {
    let height = 0;
    if (percentage >= 100 && percentage <= 200) height = percentage - 100;
    else if (percentage > 100) height = 100;
    return height;
  };
  const getSpan3Width = (percentage) => {
    let width = 0;
    if (percentage >= 200 && percentage <= 300) width = percentage - 200;
    else if (percentage >= 300) width = 100;
    return width;
  };

  const getSpan4Height = (percentage) => {
    let height = 0;
    if (percentage >= 300 && percentage <= 400) height = percentage - 300;
    else if (percentage >= 400) height = 100;
    return height;
  };

  return (
    <div className="timer">
      <span style={{ width: `${getSpan1Width(percentage)}%` }}></span>
      <span style={{ height: `${getSpan2Height(percentage)}%` }}></span>
      <span style={{ width: `${getSpan3Width(percentage)}%` }}></span>
      <span style={{ height: `${getSpan4Height(percentage)}%` }}></span>
      <span></span>
    </div>
  );
}
