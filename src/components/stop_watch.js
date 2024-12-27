import React, { useState } from 'react';

const StopWatch = () => {

    const [time, setTime] = useState(0);
    const [intervalID, setIntervalID] = useState(null);

    const startTimer = () => {
        console.log('Start button clicked!');
        if (!intervalID) {
            const id = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
            setIntervalID(id);
        }
    }

    const stopTimer = () => {
        if (intervalID) { // רק אם יש interval פעיל
            clearInterval(intervalID); // עצירת ה-interval
            setIntervalID(null); // איפוס ה-ID כדי לאפשר הפעלה מחדש
        }
    };

    const resetTimer = () => {
        stopTimer();
        setTime(0);
    };

    return (
        <div>
            <h1>{time} Seconds</h1>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    );
};

export default StopWatch;
