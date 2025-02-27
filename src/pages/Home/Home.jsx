import "./Home.scss";

const Home = () => {
    return (
        <div className="Home">
            <div className="AlbumTitle">
                <p className="Title">Ảnh các thứ</p>
            </div>

            <div className="AlbumGrid">
                {Array.from({ length: 8 }, (_, i) => (
                    <div className="PictureDiv" key={i}>
                        <img
                            className="Picture"
                            src={`/assets/images/home-images/AlbumPicture${i + 1}.jpg`}
                            alt={`Ảnh ${i + 1}`}
                        />
                        <div className="PictureInfo">
                            <p className="PictureStatus">
                                {[
                                    "ĐI CHƠI CÔNG VIÊN CÙNG NHAU",
                                    "CŨNG LÀ ĐI CHƠI CÔNG VIÊN CÙNG NHAU",
                                    "CÔ GÁI XÌ TIN",
                                    "HỪ CÓ NGƯỜI LƯỜI ĐI BỘ",
                                    "GAME THỦ 200 NĂM",
                                    "KHÁ LÀ ẾCH CẶP ỘP ỘP ỘP",
                                    "THẤY NÀNG ĐỢI NGƯỜI YÊU",
                                    "BẬT CHẾ ĐỘ LẨU = LẨU"
                                ][i]}
                            </p>
                            <p className="DateAndTime">
                                {[
                                    "24/02/2025 • 07:10 AM",
                                    "24/02/2025 • 07:04 AM",
                                    "20/10/2024 • 12:11 PM",
                                    "14/11/2024 • 03:36 PM",
                                    "12/05/2024 • 03:48 PM",
                                    "11/08/2024 • 12:11 PM",
                                    "14/11/2024 • 04:43 PM",
                                    "02/09/2024 • 08:43 PM"
                                ][i]}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
