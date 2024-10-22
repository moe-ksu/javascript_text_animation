// JavaScript
//console.log('Hello world!');

// フェード
const fade = document.querySelector('.fade');

const fadeKeyframes = {
  opacity: [0, 1], //cssの値[始め,終わり]
}

const fadeOptions = {
  duration: 3000, //再生時間 ３秒
  easing: 'ease', //速度やタイミング ゆっくり始まって、ゆっくり終わる
  fill: 'forwards', //アニメーションの再生前後の状態
  iterations:Infinity,
  direction:'alternate',
}

fade.animate(fadeKeyframes, fadeOptions);

// 回転
const spin = document.querySelector('.spin');

const spinKeyframes = {
  rotate: ['x 360deg','x 0deg'],
  opacity: [0, 1],
}

const spinOptions = {
  duration: 2000,
  easing: 'ease',
}

spin.animate(spinKeyframes, spinOptions);

// 色の変更
const color = document.querySelector('.color');

const colorKeyframes = {
  backgroundColor: ['orange ','yellow ','lightgreen','skyblue'],
}

const colorOptions = {
  duration: 5000,
  direction: 'alternate',
  iterations: Infinity,
}

color.animate(colorKeyframes,colorOptions);

// 延びる背景
const line = document.querySelector('.line');

const lineKeyframes = {
  width: ['0','100%'],
  color: ['transparent','#FFF'],
}

const lineOptions = {
  duration: 2000,
  fill: 'forwards',
}

line.animate(lineKeyframes,lineOptions);

// スライドイン
const slide = document.querySelector('.slide-in');

const slideKeyframes = {
  opacity: [0, 1],
  translate: ['0 10px', 0],
};

const slideOptions = {
  duration: 1000,
  fill: 'forwards',
};

slide.animate(slideKeyframes,slideOptions);