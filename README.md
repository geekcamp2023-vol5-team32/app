# app

## 開発のはじめかた
1. Dev Containerのファイルをセットアップ  
.devcontainerディレクトリにある、backend.devcontaienr.json or frontend.devcontainer.jsonの利用する方をコピーし、devcontainer.jsonとしてください。
2. Dev Containerを起動  
VS Codeの左下の緑色のボタンをクリックして、Reopen in Containerを選択し、Dev Containerを起動してください。
3. 開発サーバーを起動  
fronendは`yarn dev`、backendの場合は`flask run`を実行し、開発サーバーを起動してください。