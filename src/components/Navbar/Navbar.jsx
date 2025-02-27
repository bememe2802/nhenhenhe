import React from 'react';
import './Navbar.scss';



const Navbar = () => {
    return (
        <div className="NavbarDiv">

            <div className='LeftNavbar'>
                <button className="NavbarDiv-MenuButton">
                    <img className="NavbarDiv-MenuIcon" src="/assets/icons/navbar-icons/MenuIcon.png" alt="Menu" />
                </button>

                <img className="NavbarDiv-HeartIcon" src="/assets/icons/navbar-icons/HeartIcon.png" alt="Heart" />
                <p>Nhè nhè nhe</p>

            </div>
            <div className='CenterNavbar'>
                <input type="text" placeholder="Tìm kiếm cho tìm kiếm nhè nhè nhe <3" className='SearchInput' />
                <button className="SearchButton">
                    <img className="SearchButtonIcon" src="/assets/icons/navbar-icons/SearchIcon.png" alt="Search" />
                </button>
            </div>

            <div className='RightNavbar'>
                <button className="AddButton">
                    <img src="/assets/icons/navbar-icons/AddIcon.svg" alt="Add" />
                    <p className="AddP">Thêm kỉ niệm</p>
                </button>
                <button className='NotificationButton'>
                    <img className="NotificationIcon" src="/assets/icons/navbar-icons/NotificationIcon.png" alt="Notification" />
                </button>
                <button className='ConNayButton' onClick={() =>
                    alert("Aaaaa bạn vừa nựng con này cho con này nhè nhè nhe ")}
                    style={{
                        cursor: "pointer"
                    }}>
                    <img className="ConNayIcon" src="/assets/icons/navbar-icons/ConNay.png" alt="Con Nay" />
                </button>
            </div>

        </div>
    );
}

export default Navbar;
