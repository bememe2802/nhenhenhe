// src/components/HeartCounter.js
import React, { useState, useEffect } from "react";
import "./HeartCounter.scss"; // Import file CSS

const HeartCounter = ({ startDate }) => {
    const calculateDays = () => {
        const start = new Date(startDate);
        const now = new Date();
        const diffTime = now - start;
        return Math.floor(diffTime / (1000 * 60 * 60 * 24));
    };

    const [days, setDays] = useState(calculateDays());

    useEffect(() => {
        const interval = setInterval(() => {
            setDays(calculateDays());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="heart-container">
            <div className="heart">
                <span className="day-count">{days} ngày</span>
            </div>
        </div>
    );
};

export default HeartCounter;
