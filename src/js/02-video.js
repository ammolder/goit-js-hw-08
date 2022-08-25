import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const CURRENT_TIME = 'videoplayer-current-time';

const onTimeUpdate = function (data) {
  localStorage.setItem(CURRENT_TIME, JSON.stringify(data));
};

player.on('timeupdate', throttle(onTimeUpdate, 1000));

player.setCurrentTime(restoreTime());

function restoreTime() {
  const savedCurrentTime = localStorage.getItem(CURRENT_TIME);
  if (savedCurrentTime) {
    const parseTime = JSON.parse(savedCurrentTime);
    return parseTime.seconds;
  }
  return 0;
}
