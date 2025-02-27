import React from 'react';
import './Navbar.scss';
import MenuIcon from "../../assets/icons/navbar-icons/MenuIcon.png";
import HeartIcon from "../../assets/icons/navbar-icons/HeartIcon.png";
import SearchIcon from "../../assets/icons/navbar-icons/SearchIcon.png";
import AddIcon from "../../assets/icons/navbar-icons/AddIcon.svg";
import ConNay from "../../assets/icons/navbar-icons/ConNay.png";
import NotificationIcon from "../../assets/icons/navbar-icons/NotificationIcon.png";

const Navbar = () => {
    return (
        <div className="NavbarDiv">

            <div className='LeftNavbar'>
                <button className="NavbarDiv-MenuButton">
                    <img className="NavbarDiv-MenuIcon" src={MenuIcon} />
                </button>

                <img className="NavbarDiv-HeartIcon" src={HeartIcon} />
                <p>Nhè nhè nhe</p>

            </div>
            <div className='CenterNavbar'>
                <input type="text" placeholder="Tìm kiếm cho tìm kiếm nhè nhè nhe <3" className='SearchInput'></input>
                <button className="SearchButton">
                    <img className="SearchButtonIcon" src={SearchIcon} />
                </button>
            </div>

            <div className='RightNavbar'>
                <button className="AddButton">
                    <img src={AddIcon} />
                    <p className="AddP">Thêm kỉ niệm</p>
                </button>
                <button className='NotificationButton'>
                    <img className="NotificationIcon" src={NotificationIcon}></img>
                </button>
                <button className='ConNayButton' onClick={() =>
                    alert("Aaaaa bạn vừa nựng con này cho con này nhè nhè nhe ")}
                    style={{
                        cursor: "pointer"
                    }}>
                    <img className="ConNayIcon" src={ConNay} />
                </button>
            </div>

        </div>
    );
}

export default Navbar;
