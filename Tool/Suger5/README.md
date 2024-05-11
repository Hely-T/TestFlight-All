### Cách sử dụng Suger

- Vào MitM - Chọn Hostname -> add testflight.apple.com -> Done
- Vào https://raw.githubusercontent.com/Hely-T/TestFlight-All/master/Tool/Suger5/Code.txt và copy toàn bộ code
- Qua Modules -> New Local Module -> Dán toàn bộ code đã copy được vào -> Done -> Đặt name tuỳ chỉnh -> OK
- Vẫn trong mục Module -> Ấn 3 chấm cạnh plugin vừa thêm ->  Edit Content -> Xoá 2 dấu gạch dưới script -> Done -> Click vào Script để bật lên -> Done
- Bật HTTP Capture -> Start Suger -> Vào TF để lấy thông tin -> Lấy xong vào lại Plugin -> Edit Content -> Ở mục nãy xoá // ta tên dấu # vào -> Done, -> Sau đó tắt HTTP Capture 
- Vào mục Scripting -> Editor -> Click vào bánh răng -> $persistentStore -> Nếu chưa có APP_ID thì bấm vào dấu + và thêm mục tên APP_ID, nếu đã có rồi thì qua bước mới.
- Click vào APP_ID và điền ID các app TestFlight cần auto. Ngăn cách nhau bằng dấu "," và viết liền không cách.
- => Kiểm tra lịch sử ở Utilities -> Logs