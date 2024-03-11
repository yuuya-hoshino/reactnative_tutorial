# reactnative_tutorial

> [!TIP]
> Windowsの場合はWSL2で実行するのがおすすめ

# 使い方
1. クローンする
2. Docker(またはDesktop)を起動しておき、任意のターミナル（WinならPowershell・Macならzsh)などで下記のコマンドを入力し、イメージを作成する
``` bash
docker build --target dev -t native:app ./Docker
```
3. その後、Docker/Reactの中にあるget-local-ip.sh(Linux(WSL2も含む)・Macの場合)・get-local-ip.ps1(Windowsの場合)を実行する

## Mac・Linuxの場合
1. まずは下記のコマンドで権限を付与する(sudoを用いるのでログインしているユーザーのパスワードが必須です)
``` bash
cd Docker/React
sudo chmod u+x,o+x get-local-ip.sh
```
2. その後下記のコマンドでスクリプトを実行する
``` bash
./get-local-ip.sh
```

## Windowsの場合
1. まず、Powershellを管理者権限で開きます（開き方はWin + Rでファイル名を指定して実行を開き、powershellと入力しCtrl+Shift+Enterを押すと管理者で開くことができる)
2. その後、下記のコマンドを打って、スクリプトを実行できるようにする
``` powershell
Set-ExecutionPolicy RemoteSigned -Scope Process -Force
```
3. 次にエクスプローラからget-local-ip.ps1を右クリック→プロパティから一番下の方にあるこのスクリプトを実行する？みたいなことが書いてある部分にチェックマークをつけます。
4. その後再度ps1スクリプトを実行します


4. その後下記のコマンドでコンテナを起動させる(VSCodeでDockerの拡張機能がインストールしてある場合はエクスプローラからcompose.ymlを右クリックしてCompose UPをクリックすれば起動できます)

``` bash
docker compose up -d
```

5. その後コンテナ内に入るか、ホストのターミナルからでもどちらでもいいけど、下記のコマンドを打ってNodeのモジュールをインストールします
   
   ## ホストのターミナルで行う場合
``` bash
   docker exec yarn install
```

## コンテナ内のターミナルで行う場合

``` bash
yarn install
```

6. 最後にyarn startと実行してQRコードが表示され、ExpoGOの画面でページが表示されれば完成