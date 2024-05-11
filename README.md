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

#!name=❏ Auto TestFlight
#!desc=Tự động tham gia ứng dụng TF beta công khai và đóng mô-đun Scriptnày
#!system=ios
#!category=Third Party Module

[Script]
{{{INFO_FETCH_SCRIPT_NAME}}} = type=http-request,pattern=^https:\/\/testflight\.apple\.com\/(v3\/accounts\/.*[^\/accept]|join\/[A-Za-z0-9]+)$,script-path=https://raw.githubusercontent.com/Hely-T/TestFlight-All/master/Tool/Sugar5/Auto_join_TF.js
Tham gia thử nghiệm = type=cron,cronexp="*/{{{CRON_SECONDS}}} * {{{START_HOUR}}}-{{{END_HOUR}}} * * *",script-path=https://raw.githubusercontent.com/Hely-T/TestFlight-All/master/Tool/Sugar5/Auto_join_TF.js,wake-system=1,timeout=180,engine=auto

[MITM]
hostname = %APPEND% testflight.apple.com

### Lời tâm sự
- Đây là một dự án được tôi Dịch lại và đã fix những lỗi vặt, các bạn yêu quý có thể sử dụng. Cảm ơn vì đã tin tưởng!
