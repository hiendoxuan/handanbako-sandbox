# handanbako-sandbox

[handanbako](https://github.com/hiendoxuan/handanbako) の試験用リポジトリです。本番のコードではありません。

- AI（Claude Code）が issue から下書き PR を出す練習台です
- `main` へのマージは人だけができます（ブランチ保護：レビュー1件と CI の通過が必要）
- AI の鍵（GitHub App）でマージを試すと弾かれることを、ここで確かめます

## 使い方

```bash
npm test     # テスト
npm start    # 注文一覧と合計を出す
```

Node 24 以上。依存のライブラリはありません。
