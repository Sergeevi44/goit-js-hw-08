import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCAL_DATA = localStorage.getItem('videoplayer-current-time');

if (LOCAL_DATA) {
  player.setCurrentTime(LOCAL_DATA);
}

player.on('timeupdate', throttle(addCurrentTimeToLocalStorage, 1000));

function addCurrentTimeToLocalStorage(currentTime) {
  console.log(currentTime.seconds);
  localStorage.setItem('videoplayer-current-time', currentTime.seconds);
}
// player.on('play', function () {
//   console.log('played the video!');
// });

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });
