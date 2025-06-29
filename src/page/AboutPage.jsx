// src/pages/AboutPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/AboutPage.css";

function AboutPage() {
  const navigate = useNavigate();

  const handleViewProductsClick = () => {
    navigate("/products"); // Điều hướng đến trang sản phẩm
  };

  return (
    <div className="about-page">
      <div className="container">
        <h1>Về chúng tôi - HealthyShop</h1>

        <section className="about-intro">
          <p>
            Chào mừng bạn đến với HealthyShop - điểm đến tin cậy của bạn cho các
            sản phẩm thực phẩm chức năng chất lượng cao. Chúng tôi cam kết mang
            đến những sản phẩm tốt nhất để nâng cao sức khỏe và chất lượng cuộc
            sống của bạn.
          </p>
          <p>
            Với sứ mệnh "Sức khỏe là vàng", HealthyShop luôn nỗ lực tìm kiếm và
            cung cấp các sản phẩm có nguồn gốc rõ ràng, được kiểm định nghiêm
            ngặt, đảm bảo an toàn và hiệu quả cho người tiêu dùng.
          </p>
        </section>

        <section className="about-mission">
          <h2>Sứ mệnh của chúng tôi</h2>
          <p>
            Cung cấp giải pháp dinh dưỡng tối ưu, giúp mọi người duy trì một lối
            sống khỏe mạnh, năng động và hạnh phúc.
          </p>
        </section>

        <section className="about-values">
          <h2>Giá trị cốt lõi</h2>
          <ul>
            <li>
              <i className="fa-solid fa-check-circle"></i>{" "}
              <strong>Chất lượng:</strong> Luôn đặt chất lượng sản phẩm lên hàng
              đầu, từ nguyên liệu đầu vào đến thành phẩm cuối cùng.
            </li>
            <li>
              <i className="fa-solid fa-heart"></i> <strong>Sức khỏe:</strong>{" "}
              Ưu tiên sức khỏe và sự an toàn tuyệt đối của khách hàng trong mọi
              sản phẩm chúng tôi cung cấp.
            </li>
            <li>
              <i className="fa-solid fa-handshake"></i> <strong>Uy tín:</strong>{" "}
              Xây dựng niềm tin vững chắc với khách hàng qua sự minh bạch, trung
              thực và tận tâm trong từng giao dịch.
            </li>
            <li>
              <i className="fa-solid fa-leaf"></i> <strong>Đổi mới:</strong>{" "}
              Luôn cập nhật những xu hướng và nghiên cứu mới nhất trong lĩnh vực
              dinh dưỡng để mang đến các sản phẩm tiên tiến và hiệu quả.
            </li>
          </ul>
        </section>

        <section className="about-team">
          <h2>Đội ngũ</h2>
          <p>
            Đội ngũ HealthyShop bao gồm các chuyên gia dinh dưỡng, dược sĩ và
            những người đam mê sức khỏe, luôn sẵn lòng tư vấn và hỗ trợ bạn tìm
            được sản phẩm phù hợp nhất với nhu cầu cá nhân. Chúng tôi tin rằng
            kiến thức chuyên sâu và sự tận tâm là chìa khóa để mang lại giá trị
            thực cho khách hàng.
          </p>
          {/* Bạn có thể thay đổi đường dẫn ảnh này thành ảnh thực tế của đội ngũ */}
          <img
            src="https://via.placeholder.com/800x300/f39c12/FFFFFF?text=Our+Team+at+HealthyShop"
            alt="Đội ngũ HealthyShop"
            className="team-image"
          />
        </section>

        <section className="about-why-us">
          <h2>Tại sao chọn HealthyShop?</h2>
          <p>
            Với HealthyShop, bạn không chỉ mua sản phẩm mà còn nhận được sự an
            tâm. Chúng tôi:
          </p>
          <ul>
            <li>
              Cung cấp đa dạng các sản phẩm chính hãng, có nguồn gốc xuất xứ rõ
              ràng.
            </li>
            <li>Tư vấn tận tình bởi đội ngũ chuyên gia giàu kinh nghiệm.</li>
            <li>Chính sách đổi trả linh hoạt, bảo vệ quyền lợi khách hàng.</li>
            <li>
              Giá cả cạnh tranh, đi kèm với nhiều chương trình ưu đãi hấp dẫn.
            </li>
          </ul>
        </section>

        <section className="about-cta">
          <p>Hãy cùng HealthyShop chăm sóc sức khỏe của bạn ngay hôm nay!</p>
          <button onClick={handleViewProductsClick}>
            Khám phá sản phẩm của chúng tôi
          </button>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
