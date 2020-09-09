import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function Timer() {

  const [isRunning, setIsRunning] = useState(true);
  const [day, setDate] = useState(0);
  const [firsttime, setFirstTime] = useState(0);
  const starttime = 200;
  const [disp, setDisp] = useState(starttime);

  function firsttimeget() {
    const firstdate = new Date();
    setFirstTime(firsttime => firstdate.getTime());
  }

  function start() {
    setIsRunning(true);
    setDate(0);
    firsttimeget();
  }

  function pause() {
    setIsRunning(false);
  }

  function reset() {
    setIsRunning(false);
    setDisp(0);
    localStorage.clear();
  }

  useEffect(() => {
    if (isRunning) {
      var vdate = new Date();
      setDate(date => vdate.getTime());
      window.setInterval(() => {
        var vdate = new Date();
        setDate(date => vdate.getTime());
      }, 1000);
    }
  }, [isRunning]);

  useEffect(() => {
    if (isRunning) {
      const daysub = day.toString().substring(0, 10);
      const firsttimmesub = firsttime.toString().substring(0, 10);
      const display = (daysub - firsttimmesub);
      console.log(daysub);
      console.log(firsttimmesub);
      setDisp(starttime - display);
    }
  }, [isRunning, day, firsttime]);

  useEffect(() => {
    const data = localStorage.getItem('saved-item');
    if (data) {
      setFirstTime(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('saved-item', JSON.stringify(firsttime));
  });

  return (
    <div>
      <div>
        <button onClick={start}>start</button>
        <button onClick={pause}>pause</button>
        <button onClick={reset}>reset</button>
        {disp}
      </div>
    </div>
  );

}

export default Timer;
