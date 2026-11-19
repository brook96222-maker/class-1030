# 日序網站：LINE 登入設定

網站已加入 Firebase OIDC 的 LINE 登入按鈕。完成以下 LINE Developers 與 Firebase Console 設定後，登入才會連線成功。

## 1. 建立 LINE Login Channel

在 [LINE Developers Console](https://developers.line.biz/console/) 建立 Provider，再於該 Provider 建立 LINE Login Channel：

- 服務區域：台灣
- App type：Web app
- 建立後記下 Channel ID 與 Channel secret
- LINE Developers 的 Provider 與 Channel 建立流程及使用者 ID 注意事項，請參考 [LINE Login 官方入門文件](https://developers.line.biz/en/docs/line-login/getting-started/)

建立 Channel 需要以帳戶資料完成申請並接受 LINE Developers Agreement；請由帳戶持有人在 LINE Developers Console 操作。

## 2. 在 Firebase 啟用 LINE OIDC

Firebase 的 OIDC 登入需要先將 Authentication 升級為 Identity Platform。接著在 Firebase Console 的 Authentication 登入提供者中新增 OpenID Connect：

- 流程：Authorization code
- Provider ID：`oidc.line`
- Issuer：`https://access.line.me`
- Client ID：LINE Channel ID
- Client secret：LINE Channel secret

請只把 Channel secret 輸入 Firebase Console，勿放入網站程式碼或 GitHub。Firebase 的 OIDC 設定說明見 [Firebase 官方文件](https://firebase.google.com/docs/auth/web/openid-connect)。

## 3. 設定回呼網址與測試

在 LINE Login Channel 的 LINE Login 設定頁，將 Callback URL 設為：

`https://class-1030-a86fb.firebaseapp.com/__/auth/handler`

並在 Firebase Authentication 的 Authorized domains 確認有：

`brook96222-maker.github.io`

網站只要求 `openid` 與 `profile` 資料，不要求 LINE 電子郵件權限。LINE Channel 尚為 Developing 時，只有該 Channel 的管理員與測試者能登入；開放所有網站使用者前，需由 Channel 管理員發布。

## 帳戶資料說明

目前行程資料依 Firebase UID 儲存。LINE 與 Google 第一次登入通常會是不同 UID，因此 LINE 帳戶不會自動看到 Google 帳戶的既有行程；若要兩種登入共用同一份資料，需先完成 Firebase 帳戶連結流程。
