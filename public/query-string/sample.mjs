// query-string v9 は ESM 専用なので .mjs で書く
// 実行: node public/query-string/sample.mjs
import queryString from 'query-string';

// --- parse: クエリ文字列 → オブジェクト ---
console.log('--- parse ---');
console.log(queryString.parse('?foo=bar&n=1&tag=a&tag=b'));
// => { foo: 'bar', n: '1', tag: [ 'a', 'b' ] }

// 型変換
console.log(queryString.parse('n=1&flag=true', {parseNumbers: true, parseBooleans: true}));
// => { n: 1, flag: true }

// 配列の書式
console.log(queryString.parse('tag[]=a&tag[]=b', {arrayFormat: 'bracket'}));
console.log(queryString.parse('tag=a,b', {arrayFormat: 'comma'}));

// --- stringify: オブジェクト → クエリ文字列 ---
console.log('--- stringify ---');
console.log(queryString.stringify({b: 2, a: 1, q: 'こんにちは 世界'}));
// キーはデフォルトでソートされ、値はエンコードされる
console.log(queryString.stringify({tag: ['a', 'b']}, {arrayFormat: 'bracket'}));
// null / 空文字をスキップ
console.log(queryString.stringify({a: null, b: '', c: 1}, {skipNull: true, skipEmptyString: true}));

// --- parseUrl / stringifyUrl: URL 全体を扱う ---
console.log('--- parseUrl / stringifyUrl ---');
console.log(queryString.parseUrl('https://example.com/search?q=css&page=2#top', {parseFragmentIdentifier: true}));
console.log(queryString.stringifyUrl({url: 'https://example.com/search?q=css', query: {page: 3}}));

// --- pick / exclude: 特定のパラメータだけ残す・消す ---
console.log('--- pick / exclude ---');
const url = 'https://example.com/?q=css&utm_source=x&utm_medium=y';
console.log(queryString.pick(url, ['q']));
console.log(queryString.exclude(url, (name) => name.startsWith('utm_')));
