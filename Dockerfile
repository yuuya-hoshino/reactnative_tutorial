# React Native 開発用 Dockerfile

# 公式 Node.js 16 Alpine イメージを使用
FROM node:16-alpine

# コンテナ内の作業ディレクトリを設定
WORKDIR /app

# Expo CLI をグローバルにインストール
RUN npm install -g expo-cli

# package.json と package-lock.json を作業ディレクトリにコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# アプリケーションコードをコピー
COPY . .

# Expo 開発用のデフォルトポートを公開
EXPOSE 19000
EXPOSE 19001
EXPOSE 19002

# Expo 開発サーバーを起動
CMD ["npm", "start"]
