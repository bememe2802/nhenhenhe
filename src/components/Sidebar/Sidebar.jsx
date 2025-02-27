import { useNavigate } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="Sidebar">
                <div className="SidebarButton" onClick={() => navigate("/")}>
                    <img className="SidebarIcon" src="/assets/icons/sidebar-icons/HomeIcon.png" alt="Home" />
                    <p className="SidebarItemInfo">Trang chủ</p>
                </div>
                <div className="SidebarButton" onClick={() => navigate("/Memories")}>
                    <img className="SidebarIcon" src="/assets/icons/sidebar-icons/MemoriesIcon.png" alt="Memories" />
                    <p className="SidebarItemInfo">Kỉ niệm</p>
                </div>
                <div className="SidebarButton" onClick={() => navigate("/DayLoveCount")}>
                    <img className="SidebarIcon" src="/assets/icons/sidebar-icons/DayLoveIcon.png" alt="Day Love" />
                    <p className="SidebarItemInfo">Ngày yêu</p>
                </div>
                <div className="SidebarButton" onClick={() => navigate("/Travel")}>
                    <img className="SidebarIcon" src="/assets/icons/sidebar-icons/TravelIcon.png" alt="Travel" />
                    <p className="SidebarItemInfo">Du lịch</p>
                </div>
            </div>
        </>
    );
}

export default Sidebar;