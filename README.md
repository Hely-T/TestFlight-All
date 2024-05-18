 * **Script By [Hely-T](https://github.com/Hely-T)**
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
- Vào **Code [Click vào đây] (https://raw.githubusercontent.com/Hely-T/TestFlight-All/master/Tool/Surge5/Code.txt)** và copy toàn bộ code
- Qua Modules -> New Local Module -> Dán toàn bộ code đã copy được vào -> Done -> Đặt name bất kì (Vì tôi đã setup name auto lên đặt tên như nào cũng được) -> OK -> Click vào Script để bật lên -> Done
- Bật HTTP Capture -> Start Surge -> Vào TF để lấy thông tin -> Lấy xong vào lại Plugin -> 3 gạch -> Edit Content 
- Ở dưới Script ta thêm # vào đầu ( tức là trước {{{INFO_FETCH_SCRIPT_NAME}}} - Dạng: #{{{INFO_FETCH_SCRIPT_NAME}}} ) -> Done, -> Sau đó tắt HTTP Capture 
- Vào mục Scripting -> Editor -> Click vào bánh răng -> $persistentStore -> Nếu chưa có APP_ID thì bấm vào dấu + và thêm mục tên APP_ID, nếu đã có rồi thì qua bước mới.
- Click vào APP_ID và điền ID các app TestFlight cần auto. Ngăn cách nhau bằng dấu "," và viết liền không cách.
- => Kiểm tra lịch sử ở Utilities -> Logs

### Cách sử dụng QuantumultX

- Đầu tiên: Toàn bộ câu lệnh mình để ở (https://raw.githubusercontent.com/Hely-T/TestFlight-All/master/Tool/QuantumultX/code.txt)
- Ở Setting mục Rewrite -> Resources -> Copy link số 1 -> Bên trên góc phải màn hình có hình 2 xích móc vào nhau hãy bấm vào -> Resource URL: Dán link nãy vừa copy -> Tag đặt tên theo ý thích. -> Quay ra setting và bật Rewrite lên
- Kéo xuống ở mục Profile chọn Edit -> + task_local: copy mục số 2 và dán vào bên dưới task_local -> + mitm: dán mục số 3 bên dưới
- Quay lại Rewrite -> Resource -> 2 Xích -> Dán link số 4 -> Tag= boxjs.
-Bật QuantumultX -> Vào Safari -> Ghi: boxjs.com -> Subscriptions -> Add Subscription -> Dán link số 5 -> Save -> Click vào mục tên: Tự động tham gia TestFlight.
- Applications -> Theo dõi TestFlight -> Nhập link cần treo -> Done!

### Cách sử dụng Stash
- Có 2 file. 1 File sử dụng thủ công bằng cách cài giống như QuantumultX
- Cách 2: Cài file nhanh: **Stash Fast Click [TestFlight.stoverride](https://link.stash.ws/install-override/github.com/Hely-T/TestFlight-All/raw/master/Tool/Stash/FastClick/TestFlight.stoverride)**

### Lời tâm sự

- Đây là một bộ source được tôi fork từ bên Trung Quốc về và đã Việt Hoá lại (Loon,Surge)
- Loon tôi đã fix thông báo httpconnect (Không thông báo liên tục khi kết nối yếu nữa)
- Surge tôi đã update Auto Setup Name + Auto Cron. Mọi người chỉ cần làm theo hướng dẫn và sử dụng
- 18/05/2024: Đã update QuantumultX.Stash và việt hoá. Mọi người hãy sử dụng và cảm nhận.

