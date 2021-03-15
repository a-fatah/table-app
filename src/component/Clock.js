import React, { useEffect, useState } from "react";
import moment from "moment";

export default () => {
  const time = moment();
  let interval;

  const [currentTime, setCurrentTime] = useState(time);

  useEffect(() => {
    interval = setInterval(() => setCurrentTime(moment()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return time.format("HH:mm:ss");
};
