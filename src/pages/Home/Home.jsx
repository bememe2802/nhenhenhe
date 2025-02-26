import "./Home.scss";
import AlbumPicture1 from "./Images/AlbumPicture1.jpg";
import AlbumPicture2 from "./Images/AlbumPicture2.jpg";
import AlbumPicture3 from "./Images/AlbumPicture3.jpg";
import AlbumPicture4 from "./Images/AlbumPicture4.jpg";
import AlbumPicture5 from "./Images/AlbumPicture5.jpg";
import AlbumPicture6 from "./Images/AlbumPicture6.jpg";
import AlbumPicture7 from "./Images/AlbumPicture7.jpg";
import AlbumPicture8 from "./Images/AlbumPicture8.jpg";

const Home = () => {
    return (
        <>
            <div className="Home">
                <div className="AlbumTitle">
                    <p className="Title">Ảnh các thứ</p>
                </div>

                <div className="AlbumGrid">

                    <div className="PictureDiv">
                        <img className="Picture" src={AlbumPicture1} />
                        <div className="PictureInfo">
                            <p className="PictureStatus">ĐI CHƠI CÔNG VIÊN CÙNG NHAU</p>
                            <p className="DateAndTime">24/02/2025   &#8226;   07:10 AM</p>
                        </div>
                    </div>

                    <div className="PictureDiv">
                        <img className="Picture" src={AlbumPicture2} />
                        <div className="PictureInfo">
                            <p className="PictureStatus">CŨNG LÀ ĐI CHƠI CÔNG VIÊN CÙNG NHAU</p>
                            <p className="DateAndTime">24/02/2025   &#8226;   07:04 AM</p>
                        </div>
                    </div>

                    <div className="PictureDiv">
                        <img className="Picture" src={AlbumPicture3} />
                        <div className="PictureInfo">
                            <p className="PictureStatus">CÔ GÁI XÌ TIN</p>
                            <p className="DateAndTime">20/10/2024   &#8226;   12:11 PM</p>
                        </div>
                    </div>

                    <div className="PictureDiv">
                        <img className="Picture" src={AlbumPicture4} />
                        <div className="PictureInfo">
                            <p className="PictureStatus">HỪ CÓ NGƯỜI LƯỜI ĐI BỘ</p>
                            <p className="DateAndTime">14/11/2024   &#8226;   03:36 PM</p>
                        </div>
                    </div>

                    <div className="PictureDiv">
                        <img className="Picture" src={AlbumPicture5} />
                        <div className="PictureInfo">
                            <p className="PictureStatus">GAME THỦ 200 NĂM</p>
                            <p className="DateAndTime">12/05/2024   &#8226;   03:48 PM</p>
                        </div>
                    </div>

                    <div className="PictureDiv">
                        <img className="Picture" src={AlbumPicture6} />
                        <div className="PictureInfo">
                            <p className="PictureStatus">KHÁ LÀ ẾCH CẶP ỘP ỘP ỘP</p>
                            <p className="DateAndTime">11/08/2024   &#8226;   12:11 PM</p>
                        </div>
                    </div>

                    <div className="PictureDiv">
                        <img className="Picture" src={AlbumPicture7} />
                        <div className="PictureInfo">
                            <p className="PictureStatus">THẤY NÀNG ĐỢI NGƯỜI YÊU</p>
                            <p className="DateAndTime">14/11/2024   &#8226;   04:43 PM</p>
                        </div>
                    </div>

                    <div className="PictureDiv">
                        <img className="Picture" src={AlbumPicture8} />
                        <div className="PictureInfo">
                            <p className="PictureStatus">BẬT CHẾ ĐỘ LẨU = LẨU</p>
                            <p className="DateAndTime">02/09/2024   &#8226;   08:43 PM</p>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
}

export default Home;