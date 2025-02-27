import React from "react";
import HeartCounter from "../../components/HeartCounter/HeartCounter";
import "./DayLoveCount.scss";

const DayLoveCount = () => {
    return (
        <div className="day-love-container">
            {/* Khung bên trái */}
            <div className="person-card">
                <img src="/assets/images/daylovecount-images/NhiuNhiuNhe.jpg" alt="Avatar" className="avatar" />
                <p className="name">Lê Hồng Mi</p>
                <p className="dob">🎂 28/02/2005 🎂</p>
            </div>

            {/* Trái tim đếm ngày yêu nhau */}
            <div className="heart-container">
                <HeartCounter startDate="2024-04-07" />
            </div>

            {/* Khung bên phải */}
            <div className="person-card">
                <img src="/assets/images/daylovecount-images/NheNheNhe.jpg" alt="Avatar" className="avatar" />
                <p className="name">Nguyễn Huỳnh Đức</p>
                <p className="dob">🎂 13/08/2004 🎂</p>
            </div>
        </div>
    );
};

export default DayLoveCount;
