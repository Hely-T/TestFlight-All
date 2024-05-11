### Script Auto Join TestFlight

- Không sử dụng proxy để tải xuống tệp

### Cách sử dụng Loon

- Nhập Plugin
- Vào trang Mitm để kích hoạt và bật Mitm qua Http2
- Vào Profile -> Data Persistence -> Import Data by key. Key= APP_ID, Value= (can be left blank)
- Khởi động bật Loon và cho phép VPN, sau đó vào App TestFlight để kích hoạt Plugin
- Đi tới Profile -> Plugin -> Chọn vào Script, trong mục APP_ID điền ID của TF bạn muốn tham gia làm giá trị, (ID là ký tự sau khi nối liên kết https://testflight.apple.com/join/LPQmtkUs String (nghĩa là "LPQmtkUs" trong ví dụ này)⚠️: hỗ trợ liên kết TF không giới hạn, mỗi liên kết cần phân tách bằng dấu phẩy "," (chẳng hạn như: LPQmtkUs ,Hgun65jg,8yhJgv)
)

### Cách sử dụng Sugar5

- Vào MitM - Chọn Hostname -> add testflight.appl.com -> Done
- Vào https://raw.githubusercontent.com/Hely-T/TestFlight-All/master/Tool/Sugar5/Code.txt và copy toàn bộ code
- Qua Modules -> New Local Module -> Dán toàn bộ code đã copy được vào -> Done -> Đặt name tuỳ chỉnh -> OK
- Vẫn trong mục Module -> Ấn 3 chấm cạnh plugin vừa thêm ->  Edit Content -> Xoá 2 dấu gạch dưới script

### Lời tâm sự
- Đây là một dự án được tôi Dịch lại và đã fix những lỗi vặt, các bạn yêu quý có thể sử dụng. Cảm ơn vì đã tin tưởng!
