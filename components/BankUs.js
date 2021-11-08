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
    <div className="block-page-bankus">
      <div className="block-slide">
        <Slider {...settings}>
          <div className="image-slider">
            <img
              width="100%"
              src="/assets/images/home/slide_top.png"
              alt="slide"
            />
          </div>
          <div className="image-slider">
            <img
              width="100%"
              src="/assets/images/home/slide_top.png"
              alt="slide"
            />
          </div>
          <div className="image-slider">
            <img
              width="100%"
              src="/assets/images/home/slide_top.png"
              alt="slide"
            />
          </div>
        </Slider>
      </div>
      <p className="title-name mb-3 text-center mt-5">GIỚI THIỆU CÔNG TY</p>
      <div className="block-introduce">
        <div className="container">
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
      </div>
      <p className="title-name mb-3 text-center mt-5">TẦM NHÌN - SỨ MỆNH</p>
      <div className="block-vision-mission">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="block-vision">
                <p className="title">Tầm nhìn</p>
                <p className="content-vision">
                  Mcredit hướng tới trở thành một công ty tài chính tiêu dùng
                  thuận tiện cho mọi người dân, được khách hàng ưu tiên lựa chọn
                  các sản phẩm dịch vụ tài chính tiêu dùng đa dạng, đáp ứng nhu
                  cầu của khách hàng có thu nhập khiêm tốn từ thành thị tới nông
                  thôn. Các sản phẩm chính của Mcredit là:
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="block-mission">
                <p className="title">Sứ mệnh</p>
                <p className="content-mission">
                  Mcredit hướng tới trở thành một công ty tài chính tiêu dùng
                  thuận tiện cho mọi người dân, được khách hàng ưu tiên lựa chọn
                  các sản phẩm dịch vụ tài chính tiêu dùng đa dạng, đáp ứng nhu
                  cầu của khách hàng có thu nhập khiêm tốn từ thành thị tới nông
                  thôn. Các sản phẩm chính của Mcredit là:
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="title-name mb-3 text-center mt-5">CÁC DỰ ÁN CỦA BANK US</p>
      <div className="block-projects-list">
        <div className="container">
          <div className="row block-projects">
            <div className="col-md-4 mt-4">
              <div className="block-item-project">
                <img width="100%" src="/assets/images/home/mirae.png" alt="image" />
                <div className="content-project">
                  <div className="content-top">
                    <div className="content-left">
                      <p>Vay tiền mặt từ</p>
                      <p>MIRAE ASSET</p>
                    </div>
                    <div className="content-right">
                      <img src="/assets/images/icons/icon_read_more.png" alt="icon" />
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
            </div>
            <div className="col-md-4 mt-4">
              <div className="block-item-project">
                <img width="100%" src="/assets/images/home/shb.png" alt="image" />
                <div className="content-project">
                  <div className="content-top">
                    <div className="content-left">
                      <p>Vay tiền mặt từ</p>
                      <p>SHB BANK</p>
                    </div>
                    <div className="content-right">
                      <img src="/assets/images/icons/icon_read_more.png" alt="icon" />
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
            </div>
            <div className="col-md-4 mt-4">
              <div className="block-item-project">
                <img width="100%" src="/assets/images/home/mcredit.png" alt="image" />
                <div className="content-project">
                  <div className="content-top">
                    <div className="content-left">
                      <p>Vay tiền mặt từ</p>
                      <p>MCREDIT</p>
                    </div>
                    <div className="content-right">
                      <img src="/assets/images/icons/icon_read_more.png" alt="icon" />
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
            </div>
            <div className="col-md-4 mt-4">
              <div className="block-item-project">
                <img width="100%" src="/assets/images/home/easycredit.png" alt="image" />
                <div className="content-project">
                  <div className="content-top">
                    <div className="content-left">
                      <p>Vay tiền mặt từ</p>
                      <p>EASY CREDIT</p>
                    </div>
                    <div className="content-right">
                      <img src="/assets/images/icons/icon_read_more.png" alt="icon" />
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
            </div>
            <div className="col-md-4 mt-4">
              <div className="block-item-project">
                <img width="100%" src="/assets/images/home/ptf.png" alt="image" />
                <div className="content-project">
                  <div className="content-top">
                    <div className="content-left">
                      <p>Vay tiền mặt từ</p>
                      <p>PTF VIETNAM</p>
                    </div>
                    <div className="content-right">
                      <img src="/assets/images/icons/icon_read_more.png" alt="icon" />
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
        </div>
      </div>
      <p className="title-name mb-3 text-center mt-5">ĐỐI TÁC CỦA BANK US</p>
      <div className="block-partner-list">
        <div className="container">
          <div className="row block-partner">
            <div className="col-md-4">
              <div className="block-item-partner">
                <img src="/assets/images/home/mirae.png" alt="image" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="block-item-partner">
                <img src="/assets/images/home/shb.png" alt="image" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="block-item-partner">
                <img src="/assets/images/home/mcredit.png" alt="image" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="block-item-partner">
                <img src="/assets/images/home/easycredit.png" alt="image" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="block-item-partner">
                <img src="/assets/images/home/ptf.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BankUs;
