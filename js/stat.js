'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_WIDTH = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

function getMaxTime(times) {
  return Math.max.apply(Math, times);
}

function printingColumns(ctx, names, times) {
  var MARGIN = 50;
  var MARGIN_LEFT = 45;
  var BAR_HEIGHT = 150;
  var heightIndex = BAR_HEIGHT / getMaxTime(times);
  names.forEach(function (currentValue, index) {
    printingColumn(ctx, currentValue, times[index], heightIndex, MARGIN_LEFT, (BAR_WIDTH + MARGIN) * index);
  });
}

function printingColumn(ctx, name, time, heightIndex, marginLeft, marginBetween) {
  var columnHeight = heightIndex * time;
  var columnTextY = CLOUD_Y + CLOUD_HEIGHT - GAP * 2;
  var columnRectY = columnTextY - 20 - columnHeight;
  var columnScoreY = columnTextY - 30 - columnHeight;
  var columnBottomX = CLOUD_X + marginLeft + marginBetween;
  ctx.fillText(name, columnBottomX, columnTextY);
  ctx.fillStyle = name !== 'Вы' ? 'hsl(240,' + Math.floor(Math.random() * 100) + '%, 50%)' : 'hsl(0, 100%, 50%)';

  ctx.fillRect(columnBottomX, columnRectY, BAR_WIDTH, columnHeight);
  ctx.fillStyle = '#000';
  ctx.fillText(Math.floor(time), columnBottomX, columnScoreY);
}

function printingText(ctx, x, y) {

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', x, y);
  ctx.fillText('Список результатов:', x, y + 20);
}

window.renderStatistics = function (ctx, names, times) {

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  printingText(ctx, CLOUD_X + GAP * 2, CLOUD_Y + GAP * 3);

  printingColumns(ctx, names, times);
};
