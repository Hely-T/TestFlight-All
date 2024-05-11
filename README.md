### Script Auto Join TestFlight

- Không sử dụng proxy để tải xuống tệp
- Vui lòng cài Certificate và Trust trong cài đặt chung máy trước khi sử dụng

### Cách sử dụng Loon

- Nhập Plugin (https://raw.githubusercontent.com/Hely-T/TestFlight-All/master/Auto_Join_TF.plugin)
- Vào trang Mitm để kích hoạt và bật Mitm qua Http2
- Vào Profile -> Data Persistence -> Import Data by key. Key= APP_ID, Value= (Có thể bỏ trống) - (Nếu đã nhập plugin trước có APP_ID thì k cần thêm nữa)
- Tick bật Script ở Profile lên -> Khởi động bật Loon và cho phép VPN, sau đó vào App TestFlight để kích hoạt Plugin
- Đi tới Profile -> Plugin -> Chọn vào Script, trong mục APP_ID điền ID của TF bạn muốn tham gia làm giá trị, (ID là ký tự sau khi nối liên kết https://testflight.apple.com/join/LPQmtkUs String (nghĩa là "LPQmtkUs" trong ví dụ này)⚠️: hỗ trợ liên kết TF không giới hạn, mỗi liên kết cần phân tách bằng dấu phẩy "," (chẳng hạn như: LPQmtkUs ,Hgun65jg,8yhJgv)
)

### Cách sử dụng Surge5

- Vào MitM - Chọn Hostname -> add: testflight.apple.com -> Done
- Vào https://raw.githubusercontent.com/Hely-T/TestFlight-All/master/Tool/Surge5/Code.txt và copy toàn bộ code
- Qua Modules -> New Local Module -> Dán toàn bộ code đã copy được vào -> Done -> Đặt name tuỳ chỉnh -> OK -> Click vào Script để bật lên -> Done
- Bật HTTP Capture -> Start Surge -> Vào TF để lấy thông tin -> Lấy xong vào lại Plugin -> 3 gạch -> Edit Content 
- Ở dưới Script ta thêm # vào đầu ( tức là trước {{{INFO_FETCH_SCRIPT_NAME}}} - Dạng: #{{{INFO_FETCH_SCRIPT_NAME}}} ) -> Done, -> Sau đó tắt HTTP Capture 
- Vào mục Scripting -> Editor -> Click vào bánh răng -> $persistentStore -> Nếu chưa có APP_ID thì bấm vào dấu + và thêm mục tên APP_ID, nếu đã có rồi thì qua bước mới.
- Click vào APP_ID và điền ID các app TestFlight cần auto. Ngăn cách nhau bằng dấu "," và viết liền không cách.
- => Kiểm tra lịch sử ở Utilities -> Logs

### Lời tâm sự
- Đây là một dự án được tôi Dịch lại và đã fix những lỗi vặt, các bạn yêu quý có thể sử dụng. Cảm ơn vì đã tin tưởng!
