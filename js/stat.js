'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var DEFAULT_X = 120;
var BAR_Y = 250;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_GAP = 50;
var TEXT_Y = 270;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.fillStyle = '#000';
  ctx.font = '16px "PT Mono"';
  ctx.fillText('Ура вы победили!', DEFAULT_X, 40);
  ctx.fillText('Список результатов:', DEFAULT_X, 60);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + Math.round(Math.random() * 100) + '%, 40%)';
    }
    ctx.fillText(Math.round(times[i]), DEFAULT_X + (BAR_WIDTH + BAR_GAP) * i, TEXT_Y - (BAR_HEIGHT * times[i]) / maxTime - GAP * 3);
    ctx.fillText(players[i], DEFAULT_X + (BAR_WIDTH + BAR_GAP) * i, TEXT_Y);
    ctx.fillRect(DEFAULT_X + (BAR_WIDTH + BAR_GAP) * i, BAR_Y, BAR_WIDTH, -(BAR_HEIGHT * times[i]) / maxTime);
  }
};
