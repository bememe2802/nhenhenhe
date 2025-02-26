import { useNavigate } from "react-router-dom";
import "./Sidebar.scss";
import HomeIcon from "./Images/HomeIcon.png";
import MemoriesIcon from "./Images/MemoriesIcon.png";
import DayLoveIcon from "./Images/DayLoveIcon.png";
import TravelIcon from "./Images/TravelIcon.png";

const Sidebar = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="Sidebar">
                <div className="SidebarButton" onClick={() => navigate("/")}>
                    <img className="SidebarIcon" src={HomeIcon} />
                    <p className="SidebarItemInfo">Trang chủ</p>
                </div>
                <div className="SidebarButton" onClick={() => navigate("/Memories")}>
                    <img className="SidebarIcon" src={MemoriesIcon} />
                    <p className="SidebarItemInfo">Kỉ niệm</p>
                </div>
                <div className="SidebarButton" onClick={() => navigate("/DayLoveCount")}>
                    <img className="SidebarIcon" src={DayLoveIcon} />
                    <p className="SidebarItemInfo">Ngày yêu</p>
                </div>
                <div className="SidebarButton" onClick={() => navigate("/Travel")}>
                    <img className="SidebarIcon" src={TravelIcon} />
                    <p className="SidebarItemInfo">Du lịch</p>
                </div>
            </div>
        </>
    );
}

export default Sidebar;