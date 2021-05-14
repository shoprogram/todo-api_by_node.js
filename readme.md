## 構成
- mysql8.0
- node v12

## コマンド
```sh
$ npm i

# mysql.server start で起動しておく
$ npm db:init

```

## 疎通確認
`http://localhost:4000/api/v1/todo`でリストが返却されればOK
