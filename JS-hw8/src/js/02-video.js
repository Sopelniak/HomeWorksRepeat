import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('#vimeo-player');
const player = new Player(iframeEl);

player.on(
  'timeupdate',
  throttle(function (e) {
    localStorage.setItem('videoplayer-current-time', e.seconds);
  }, 1000)
);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
