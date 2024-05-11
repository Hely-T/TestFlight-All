### Cách sử dụng Surge

- Vào MitM - Chọn Hostname -> add: testflight.apple.com -> Done
- Vào https://raw.githubusercontent.com/Hely-T/TestFlight-All/master/Tool/Surge5/Code.txt và copy toàn bộ code
- Qua Modules -> New Local Module -> Dán toàn bộ code đã copy được vào -> Done -> Đặt name bất kì (Vì tôi đã setup name auto lên đặt tên như nào cũng được) -> OK -> Click vào Script để bật lên -> Done
- Bật HTTP Capture -> Start Surge -> Vào TF để lấy thông tin -> Lấy xong vào lại Plugin -> 3 gạch -> Edit Content 
- Ở dưới Script ta thêm # vào đầu ( tức là trước {{{INFO_FETCH_SCRIPT_NAME}}} - Dạng: #{{{INFO_FETCH_SCRIPT_NAME}}} ) -> Done, -> Sau đó tắt HTTP Capture 
- Vào mục Scripting -> Editor -> Click vào bánh răng -> $persistentStore -> Nếu chưa có APP_ID thì bấm vào dấu + và thêm mục tên APP_ID, nếu đã có rồi thì qua bước mới.
- Click vào APP_ID và điền ID các app TestFlight cần auto. Ngăn cách nhau bằng dấu "," và viết liền không cách.
- => Kiểm tra lịch sử ở Utilities -> Logs