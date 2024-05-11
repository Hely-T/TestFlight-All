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
- Qua Modules -> New Local Module -> Dán toàn bộ code đã copy được vào -> Done -> Đặt name bất kì (Vì tôi đã setup name auto lên đặt tên như nào cũng được) -> OK -> Click vào Script để bật lên -> Done
- Bật HTTP Capture -> Start Surge -> Vào TF để lấy thông tin -> Lấy xong vào lại Plugin -> 3 gạch -> Edit Content 
- Ở dưới Script ta thêm # vào đầu ( tức là trước {{{INFO_FETCH_SCRIPT_NAME}}} - Dạng: #{{{INFO_FETCH_SCRIPT_NAME}}} ) -> Done, -> Sau đó tắt HTTP Capture 
- Vào mục Scripting -> Editor -> Click vào bánh răng -> $persistentStore -> Nếu chưa có APP_ID thì bấm vào dấu + và thêm mục tên APP_ID, nếu đã có rồi thì qua bước mới.
- Click vào APP_ID và điền ID các app TestFlight cần auto. Ngăn cách nhau bằng dấu "," và viết liền không cách.
- => Kiểm tra lịch sử ở Utilities -> Logs

### Lời tâm sự

- Đây là một bộ source được tôi fork từ bên Trung Quốc về và đã Việt Hoá lại (Loon,Surge)
- Loon tôi đã fix thông báo httpconnect (Không thông báo liên tục khi kết nối yếu nữa)
- Surge tôi đã update Auto Setup Name + Auto Cron. Mọi người chỉ cần làm theo hướng dẫn và sử dụng

### Lời kết:

- Khi nào tôi APPLE ID Để tải Quantumult X với Stash thì mình sẽ Việt Hoá các file đó sau. Do hiện tại cũng chưa có app nên không thể test và check lỗi được, mong mọi người thông cảm !!!