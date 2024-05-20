/*
Script Author: Hely-T
Reference: https://github.com/Hely-T/TestFlight-All/
*/

const reg1 = /^https:\/\/testflight\.apple\.com\/v3\/accounts\/(.*)\/apps$/;
const reg2 = /^https:\/\/testflight\.apple\.com\/join\/(.*)/;

if (reg1.test($request.url)) {
  $prefs.setValueForKey(null, "request_id");
  let url = $request.url;
  let key = url.replace(/(.*accounts\/)(.*)(\/apps)/, "$2");
  const headers = Object.keys($request.headers).reduce((t, i) => ((t[i.toLowerCase()] = $request.headers[i]), t), {});

  let session_id = headers["x-session-id"];
  let session_digest = headers["x-session-digest"];
  let request_id = headers["x-request-id"];
  $prefs.setValueForKey(key, "key");
  $prefs.setValueForKey(session_id, "session_id");
  $prefs.setValueForKey(session_digest, "session_digest");
  $prefs.setValueForKey(request_id, "request_id");
  if ($prefs.valueForKey("request_id") !== null) {
    $notify("Tự động tham gia TestFlight", "Lấy thông tin thành công", "");
  } else {
    $notify("Tự động tham gia TestFlight", "Không thể lấy thông tin", "Vui lòng thêm testflight.apple.com vào danh sách cho phép");
  }
  $done({});
} else if (reg2.test($request.url)) {
  let appId = $prefs.valueForKey("APP_ID");
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
  $prefs.setValueForKey(appId, "APP_ID");
  $notify("Tự động tham gia TestFlight", `Đã thêm APP_ID: ${id}`, `ID hiện tại: ${appId}`);
  $done({});
}

function unique(arr) {
  return Array.from(new Set(arr));
}
