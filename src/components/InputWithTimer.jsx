import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function InputWithTimer({ time, placeholder = "" }) {
    const [duration, setDuration] = useState(time);
    const [secondsLeft, setSecondsLeft] = useState(duration);

    const handleChange = (event) => {
        const value = Number(event.target.value);
        setDuration(value);
        setSecondsLeft(value);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setSecondsLeft((v) => {
                if (v <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return v - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [duration]);

    return (
        <>
            <input
                type="text"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                value={duration}
                onChange={handleChange}
                placeholder={placeholder}
            />
            <p>Décompte : {secondsLeft}</p>
        </>
    );
}

InputWithTimer.propTypes = {
    time: PropTypes.number.isRequired,
    placeholder: PropTypes.string,
};