import Player from "@vimeo/player";
import { throttle } from "lodash";
const player = new Player('vimeo-player', {
  id: 236203659,
})
let vimeoDuration = 0;
const throttledFn = throttle(() => {
  player.getCurrentTime().then(function(seconds) {
    console.log(seconds);
    vimeoDuration = seconds;
    localStorage.setItem("videoplayer-current-time", JSON.stringify(vimeoDuration));
  });
}, 1000);

player.on("timeupdate", throttledFn);
if (localStorage.hasOwnProperty("videoplayer-current-time") === true) {
let currentTime = localStorage.getItem("videoplayer-current-time");
let parsedTime = JSON.parse(currentTime);
player.setCurrentTime(parsedTime);
}