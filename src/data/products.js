// src/data/products.js
const products = [
  {
    id: 1,
    name: "Vitamin tổng hợp D3 & K2",
    description:
      "Bổ sung vitamin cần thiết cho cơ thể, hỗ trợ xương khớp chắc khỏe. Sản phẩm này cung cấp đầy đủ các vitamin và khoáng chất quan trọng, giúp tăng cường hệ miễn dịch, cải thiện năng lượng và hỗ trợ chức năng xương.",
    price: 350000,
    image: "https://via.placeholder.com/250/28a745/FFFFFF?text=Vitamin", // Thay bằng đường dẫn ảnh thực tế của bạn
    detailImage:
      "https://via.placeholder.com/500x500/28a745/FFFFFF?text=Vitamin+Detail", // Thay bằng đường dẫn ảnh chi tiết
    benefits: [
      "Hỗ trợ xương khớp chắc khỏe",
      "Tăng cường hệ miễn dịch",
      "Cải thiện năng lượng",
      "Bổ sung dinh dưỡng toàn diện",
    ],
    usage: "Uống 1 viên mỗi ngày sau bữa ăn sáng.",
    category: "Vitamin",
    stock: 50, // Số lượng tồn kho (ví dụ)
  },
  {
    id: 2,
    name: "Omega-3 Dầu cá tinh khiết",
    description:
      "Tốt cho tim mạch và não bộ, giảm viêm nhiễm. Omega-3 là axit béo thiết yếu mà cơ thể không tự tổng hợp được, giúp duy trì chức năng não bộ, thị lực và giảm nguy cơ mắc các bệnh tim mạch.",
    price: 480000,
    image: "https://via.placeholder.com/250/3498db/FFFFFF?text=Omega-3",
    detailImage:
      "https://via.placeholder.com/500x500/3498db/FFFFFF?text=Omega-3+Detail",
    benefits: [
      "Hỗ trợ tim mạch khỏe mạnh",
      "Cải thiện chức năng não bộ",
      "Giảm viêm nhiễm",
      "Tăng cường thị lực",
    ],
    usage: "Uống 2 viên mỗi ngày cùng bữa ăn.",
    category: "Dầu cá",
    stock: 40,
  },
  {
    id: 3,
    name: "Protein Whey Isolate",
    description:
      "Hỗ trợ phát triển cơ bắp, phục hồi sau tập luyện. Đây là nguồn protein tinh khiết, ít chất béo và carbohydrate, lý tưởng cho việc xây dựng và phục hồi cơ bắp.",
    price: 920000,
    image: "https://via.placeholder.com/250/e74c3c/FFFFFF?text=Protein",
    detailImage:
      "https://via.placeholder.com/500x500/e74c3c/FFFFFF?text=Protein+Detail",
    benefits: [
      "Tăng trưởng cơ bắp",
      "Phục hồi cơ bắp nhanh",
      "Hàm lượng protein cao",
      "Ít béo, ít đường",
    ],
    usage: "Pha 1 muỗng với 250ml nước hoặc sữa sau khi tập luyện.",
    category: "Protein",
    stock: 30,
  },
  {
    id: 4,
    name: "Collagen Thủy phân Type I & III",
    description:
      "Cải thiện độ đàn hồi da, móng và tóc chắc khỏe. Collagen là protein cấu trúc chính trong cơ thể, giúp duy trì sự săn chắc của da và sức khỏe của các mô liên kết.",
    price: 610000,
    image: "https://via.placeholder.com/250/9b59b6/FFFFFF?text=Collagen",
    detailImage:
      "https://via.placeholder.com/500x500/9b59b6/FFFFFF?text=Collagen+Detail",
    benefits: [
      "Cải thiện độ đàn hồi da",
      "Móng chắc khỏe, tóc bóng mượt",
      "Hỗ trợ sức khỏe khớp",
      "Giảm nếp nhăn",
    ],
    usage: "Pha 1 muỗng vào nước hoặc đồ uống yêu thích hàng ngày.",
    category: "Collagen",
    stock: 55,
  },
  {
    id: 5,
    name: "Probiotic Tiêu hóa 50 Tỷ CFU",
    description:
      "Hỗ trợ hệ tiêu hóa khỏe mạnh, tăng cường miễn dịch. Chứa nhiều chủng lợi khuẩn quan trọng giúp cân bằng hệ vi sinh đường ruột.",
    price: 320000,
    image: "https://via.placeholder.com/250/1abc9c/FFFFFF?text=Probiotic",
    detailImage:
      "https://via.placeholder.com/500x500/1abc9c/FFFFFF?text=Probiotic+Detail",
    benefits: [
      "Cải thiện tiêu hóa",
      "Tăng cường miễn dịch đường ruột",
      "Giảm đầy hơi, khó tiêu",
      "Cân bằng hệ vi sinh",
    ],
    usage: "Uống 1 viên mỗi ngày trước bữa ăn.",
    category: "Tiêu hóa",
    stock: 60,
  },
  {
    id: 6,
    name: "Glucosamine Chondroitin MSM",
    description:
      "Hỗ trợ sức khỏe khớp, giảm đau nhức xương khớp. Công thức toàn diện giúp tái tạo sụn khớp và giảm các triệu chứng viêm.",
    price: 550000,
    image: "https://via.placeholder.com/250/f1c40f/FFFFFF?text=Glucosamine",
    detailImage:
      "https://via.placeholder.com/500x500/f1c40f/FFFFFF?text=Glucosamine+Detail",
    benefits: [
      "Hỗ trợ tái tạo sụn khớp",
      "Giảm đau nhức xương khớp",
      "Cải thiện linh hoạt khớp",
      "Chống viêm",
    ],
    usage: "Uống 2 viên mỗi ngày cùng bữa ăn.",
    category: "Xương khớp",
    stock: 35,
  },
  {
    id: 7,
    name: "Creatine Monohydrate",
    description:
      "Tăng cường sức mạnh và hiệu suất tập luyện. Creatine giúp tăng khả năng sản xuất năng lượng nhanh chóng cho cơ bắp trong các bài tập cường độ cao.",
    price: 400000,
    image: "https://via.placeholder.com/250/2c3e50/FFFFFF?text=Creatine",
    detailImage:
      "https://via.placeholder.com/500x500/2c3e50/FFFFFF?text=Creatine+Detail",
    benefits: [
      "Tăng cường sức mạnh",
      "Cải thiện hiệu suất tập luyện",
      "Tăng khối lượng cơ nạc",
      "Phục hồi nhanh hơn",
    ],
    usage: "Pha 1 muỗng với nước trước hoặc sau tập luyện.",
    category: "Thể thao",
    stock: 45,
  },
  {
    id: 8,
    name: "Magnesium Glycinate",
    description:
      "Hỗ trợ giấc ngủ, thư giãn cơ bắp và giảm căng thẳng. Magnesium Glycinate là dạng magie dễ hấp thụ, ít gây khó chịu đường tiêu hóa.",
    price: 280000,
    image: "https://via.placeholder.com/250/7f8c8d/FFFFFF?text=Magnesium",
    detailImage:
      "https://via.placeholder.com/500x500/7f8c8d/FFFFFF?text=Magnesium+Detail",
    benefits: [
      "Hỗ trợ giấc ngủ sâu",
      "Thư giãn cơ bắp",
      "Giảm căng thẳng và lo âu",
      "Hỗ trợ chức năng thần kinh",
    ],
    usage: "Uống 1-2 viên trước khi đi ngủ.",
    category: "Khoáng chất",
    stock: 65,
  },
];

export default products;
