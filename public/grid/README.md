
`<span style="background-color: crimson;">X</span>`
だと見た目がダサい

squareをコピペして別のreactコンポーネントを作るのは面倒そう。
と思ったけど、classNameだけ変えればいいのか
```
function Square({value, onSquareClick}: SquareProps) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
```

というか、divにすればいいだけだった。
  -> 一番下の行の四角から、色がはみ出しちゃう

https://developer.mozilla.org/ja/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing
マージンの相殺

