import throttle from 'lodash.throttle';

import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.setCurrentTime(
  JSON.parse(localStorage.getItem('videoplayer-current-time'))
);

player.on('timeupdate', throttle(saveTimeVideo, 1000));

function saveTimeVideo(time) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(time.seconds)
  );
}
