# app

## 開発のはじめかた
1. Dev Containerのファイルをセットアップ  
.devcontainerディレクトリにある、backend.devcontaienr.json or frontend.devcontainer.jsonの利用する方を複製し、devcontainer.jsonとしてください。
2. Dev Containerを起動  
VS Codeの左下の緑色のボタンをクリックして、Reopen in Containerを選択し、VS Code on Dev Containerを起動してください。
3. 開発サーバーを起動  
/frontend or /backend/srcに移動し、fronendは`yarn dev`、backendの場合は`flask run`を実行し、開発サーバーを起動してください。