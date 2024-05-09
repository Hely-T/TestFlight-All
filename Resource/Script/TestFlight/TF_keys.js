/*
Script Author: DecoAri
Fix Author: Hely-T
Reference: https://raw.githubusercontent.com/Hely-T/Loon/master/Resource/Script/TestFlight/TF_keys.js
Các bước sử dụng cụ thể
1: Nhập trình cắm
2: Vào trang Mitm để kích hoạt Mitm qua Http2
3: Khởi động VPN, vào Ứng dụng TestFlight và hiển thị thông báo rằng quá trình thu thập thành công.
4: Đi tới Cấu hình -> Dữ liệu liên tục -> Nhập dữ liệu đã chỉ định, điền APP_ID làm khóa và điền ID của TF bạn muốn tham gia làm giá trị, (ID là ký tự sau khi nối liên kết https://testflight.apple.com/join/LPQmtkUs String (nghĩa là "LPQmtkUs" trong ví dụ này)⚠️: hỗ trợ liên kết TF không giới hạn, mỗi liên kết cần phân tách bằng dấu phẩy tiếng Anh "," (chẳng hạn như: LPQmtkUs ,Hgun65jg,8yhJgv)
)
*/
const reg1 = /^https:\/\/testflight\.apple\.com\/v3\/accounts\/(.*)\/apps$/;
const reg2 = /^https:\/\/testflight\.apple\.com\/join\/(.*)/;
if (reg1.test($request.url)) {
    $persistentStore.write(null, 'request_id')
    let url = $request.url
    let key = url.replace(/(.*accounts\/)(.*)(\/apps)/, '$2')
    let session_id = $request.headers['X-Session-Id'] || $request.headers['x-session-id']
    let session_digest = $request.headers['X-Session-Digest'] || $request.headers['x-session-digest']
    let request_id = $request.headers['X-Request-Id'] || $request.headers['x-request-id']
    let ua = $request.headers['User-Agent'] || $request.headers['user-agent']
    $persistentStore.write(key, 'key')
    $persistentStore.write(session_id, 'session_id')
    $persistentStore.write(session_digest, 'session_digest')
    $persistentStore.write(request_id, 'request_id')
    $persistentStore.write(ua, 'tf_ua')
    console.log($request.headers)
    if ($persistentStore.read('request_id') !== null) {
      $notification.post('TF thu thập thông tin', 'Thu thập thông tin thành công, vui lòng đóng tập lệnh!','')

    } else {
      $notification.post('Thu thập thông tin TF', 'Việc thu thập thông tin không thành công, vui lòng bật chuyển đổi Mitm qua HTTP2 và khởi động lại VPN và Ứng dụng TestFlight! ','')
    }
    $done({})
}
if (reg2.test($request.url)) {
  let appId = $persistentStore.read("APP_ID");
  if (!appId) {
    appId = "";
  }
  let arr = appId.split(",");
  const id = reg2.exec($request.url)[1];
  arr.push(id);
  arr = unique(arr).filter((a) => a);
  if (arr.length > 0) {
    appId = arr.join(",");
  }
  $persistentStore.write(appId, "APP_ID");
  $notification.post("TestFlight Tự động tham gia", `APP_ID đã được thêm: ${id}`, `ID hiện tại: ${appId}`);
  $done({})
}
function unique(arr) {
  return Array.from(new Set(arr));
}