import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BankUs(props) {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div>
      <div className="block-slide">
        <Slider {...settings}>
          <div className="image-slider">
            <img
              width="100%"
              src="/assets/images/home/slide_1.png"
              alt="slide"
            />
          </div>
          <div className="image-slider">
            <img
              width="100%"
              src="/assets/images/home/slide_1.png"
              alt="slide"
            />
          </div>
          <div className="image-slider">
            <img
              width="100%"
              src="/assets/images/home/slide_1.png"
              alt="slide"
            />
          </div>
        </Slider>
      </div>
      <div className="container">
        <div className="mirae-asset mt-5">
          <p className="title-name mb-3 text-center">GIỚI THIỆU CÔNG TY</p>
          <div className="row">
            <p>
              Mirae Asset Finance Việt Nam là thành viên của Tập đoàn Mirae
              Asset đến từ Hàn Quốc, với 20 năm kinh nghiệm trong lĩnh vực tài
              chính, đầu tư, quản lý tài sản…, đang có mặt tại 15 quốc gia, cùng
              hệ thống 200 văn phòng và chi nhánh trên toàn thế giới.
            </p>
            <p>
              Có mặt tại Việt Nam năm 2006, công ty được xây dựng dựa trên tầm
              nhìn luôn theo đuổi chiến lược quản lý đầu tư tối ưu, nhằm hỗ trợ
              khách hàng dễ dàng tiếp cận và có cơ hội nhận được nguồn vốn hiệu
              quả, hợp pháp và an toàn, Mirae Asset Việt Nam đã nỗ lực không
              ngừng để hoàn thiện các sản phẩm vay tiêu dùng.
            </p>
          </div>
        </div>
        <div className="mirae-asset mt-5">
          <p className="title-name mb-3 text-center">TẦM NHÌN - SỨ MỆNH</p>
          <div className="row">
            <div className="col-md-6">
              <p>Tầm nhìn</p>
              <p>
                Mcredit hướng tới trở thành một công ty tài chính tiêu dùng
                thuận tiện cho mọi người dân, được khách hàng ưu tiên lựa chọn
                các sản phẩm dịch vụ tài chính tiêu dùng đa dạng, đáp ứng nhu
                cầu của khách hàng có thu nhập khiêm tốn từ thành thị tới nông
                thôn. Các sản phẩm chính của Mcredit là: Cho vay tiền mặt và Cho
                vay trả góp, với lợi thế sản phẩm vượt trội, thủ tục xét duyệt
                nhanh gọn, dịch vụ chăm sóc hậu mãi tận tâm, lãi suất cạnh tranh
                và mạng lưới rộng khắp giúp Mcredit nhanh chóng tiếp cận tới
                đông đảo khách hàng trong thời gian ngắn.
              </p>
            </div>
            <div className="col-md-6">
              <p>Sứ mệnh</p>
              <p>
                Mcredit hướng tới trở thành một công ty tài chính tiêu dùng
                thuận tiện cho mọi người dân, được khách hàng ưu tiên lựa chọn
                các sản phẩm dịch vụ tài chính tiêu dùng đa dạng, đáp ứng nhu
                cầu của khách hàng có thu nhập khiêm tốn từ thành thị tới nông
                thôn. Các sản phẩm chính của Mcredit là: Cho vay tiền mặt và Cho
                vay trả góp, với lợi thế sản phẩm vượt trội, thủ tục xét duyệt
                nhanh gọn, dịch vụ chăm sóc hậu mãi tận tâm, lãi suất cạnh tranh
                và mạng lưới rộng khắp giúp Mcredit nhanh chóng tiếp cận tới
                đông đảo khách hàng trong thời gian ngắn.
              </p>
            </div>
          </div>
        </div>
        <div className="m-credit mt-5">
          <p className="title-name mb-3 text-center">CÁC DỰ ÁN CỦA BANK US</p>
          <div className="row block-projects">
            <div className="col-md-4">
              <img src="" alt="image" />
              <div className="content-project">
                <div className="content-top">
                  <div className="content-left">
                    <p>Vay tiền mặt từ</p>
                    <p>MIRAE ASSET</p>
                  </div>
                  <div className="content-right">
                    <img src="" alt="" />
                  </div>
                </div>
                <div className="content-bottom">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque molestie lorem euconsequat gravida. Nunc mattis et
                    erat eu sagittis. Fusce in arcu ullamcorper, fermentum nulla
                    et, pretium ipsum.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <img src="" alt="image" />
              <div className="content-project">
                <div className="content-top">
                  <div className="content-left">
                    <p>Vay tiền mặt từ</p>
                    <p>MIRAE ASSET</p>
                  </div>
                  <div className="content-right">
                    <img src="" alt="" />
                  </div>
                </div>
                <div className="content-bottom">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque molestie lorem euconsequat gravida. Nunc mattis et
                    erat eu sagittis. Fusce in arcu ullamcorper, fermentum nulla
                    et, pretium ipsum.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <img src="" alt="image" />
              <div className="content-project">
                <div className="content-top">
                  <div className="content-left">
                    <p>Vay tiền mặt từ</p>
                    <p>MIRAE ASSET</p>
                  </div>
                  <div className="content-right">
                    <img src="" alt="" />
                  </div>
                </div>
                <div className="content-bottom">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque molestie lorem euconsequat gravida. Nunc mattis et
                    erat eu sagittis. Fusce in arcu ullamcorper, fermentum nulla
                    et, pretium ipsum.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <img src="" alt="image" />
              <div className="content-project">
                <div className="content-top">
                  <div className="content-left">
                    <p>Vay tiền mặt từ</p>
                    <p>MIRAE ASSET</p>
                  </div>
                  <div className="content-right">
                    <img src="" alt="" />
                  </div>
                </div>
                <div className="content-bottom">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque molestie lorem euconsequat gravida. Nunc mattis et
                    erat eu sagittis. Fusce in arcu ullamcorper, fermentum nulla
                    et, pretium ipsum.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <img src="" alt="image" />
              <div className="content-project">
                <div className="content-top">
                  <div className="content-left">
                    <p>Vay tiền mặt từ</p>
                    <p>MIRAE ASSET</p>
                  </div>
                  <div className="content-right">
                    <img src="" alt="" />
                  </div>
                </div>
                <div className="content-bottom">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque molestie lorem euconsequat gravida. Nunc mattis et
                    erat eu sagittis. Fusce in arcu ullamcorper, fermentum nulla
                    et, pretium ipsum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="m-credit mt-5">
          <p className="title-name mb-3 text-center">ĐỐI TÁC CỦA BANK US</p>
          <div className="row block-projects">
            <div className="col-md-4">
              <img src="" alt="image" />
            </div>
            <div className="col-md-4">
              <img src="" alt="image" />
            </div>
            <div className="col-md-4">
              <img src="" alt="image" />
            </div>
            <div className="col-md-4">
              <img src="" alt="image" />
            </div>
            <div className="col-md-4">
              <img src="" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BankUs;
