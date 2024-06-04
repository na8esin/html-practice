
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