'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var MARGIN = 50;
var MARGIN_LEFT = 45;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, names, times) {
  var max = 0;

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 3);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + GAP + GAP * 4);

  for (var j = 0; j < times.length; j++) {
    if (times[j] > max) {
      max = times[j];
    }
  }

  var heightIndex = BAR_HEIGHT / max;

  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], CLOUD_X + MARGIN_LEFT + (BAR_WIDTH + MARGIN) * i, CLOUD_Y + CLOUD_HEIGHT - GAP * 2);
    if (names[i] !== 'Вы') {
      ctx.fillStyle = 'hsl(225,' + Math.floor(Math.random() * 100) + '%, 50%)';
    } else {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillRect(CLOUD_X + MARGIN_LEFT + (BAR_WIDTH + MARGIN) * i, CLOUD_Y + CLOUD_HEIGHT - GAP * 4 - heightIndex * times[i], BAR_WIDTH, heightIndex * times[i]);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.floor(times[i]), CLOUD_X + MARGIN_LEFT + (BAR_WIDTH + MARGIN) * i, CLOUD_Y + CLOUD_HEIGHT - GAP * 5 - heightIndex * times[i]);
  }

};
