import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframeEl = document.querySelector('#vimeo-player');

const player = new Player(iframeEl);

const onPlay = function(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds); 
    console.log(data);
};

player.on('timeupdate', throttle(onPlay, 1000));

const setTime = () => {
    if (localStorage.getItem('videoplayer-current-time') === null) {
        return;
    }
player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).then(function(seconds) {

})
    .catch(function (error) {
    switch (error.name) {
        case 'RangeError':

            break;

        default:

            break;
    }
});
}

setTime()

