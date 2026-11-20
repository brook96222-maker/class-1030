# LINE 登入設定狀態

LINE Login 已完成設定並發布，所有 LINE 使用者都可以使用網站的 LINE 登入按鈕。

## LINE Developers

- Provider：`日序`
- Channel：`日序`（LINE Login、Web app）
- Channel ID：`2012713436`
- 狀態：`Published`
- Firebase callback URL：`https://class-1030-a86fb.firebaseapp.com/__/auth/handler`
- 開放的 LINE 權限：`openid`、`profile`；未申請 LINE 電子郵件權限

Channel secret 僅儲存在 Firebase Authentication 的 OIDC 提供者設定中，不要放進網站程式或 GitHub。

## Firebase Authentication

- Firebase 專案：`class-1030-a86fb`
- Identity Platform：已啟用，計費方案仍為免費 Spark
- OIDC Provider ID：`oidc.line`
- Issuer：`https://access.line.me`
- Channel ID 與 Channel secret：已填入 Firebase OIDC 設定
- GitHub Pages 授權網域：`brook96222-maker.github.io`

目前 Spark 方案的 OIDC 上限為每日 2 位活躍使用者；升級畫面顯示過去 30 天尖峰為 1 位。若需要更高用量，Firebase 會要求改用 Blaze 方案。

## 網站帳戶資料

網站使用 Firebase UID 隔離行程資料。LINE 與 Google 登入通常會建立不同 UID，因此兩種登入不會自動共用既有行程；若需要共用，需另行實作 Firebase 帳戶連結。
