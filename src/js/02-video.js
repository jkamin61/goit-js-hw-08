import Player from "@vimeo/player";
import { throttle } from "lodash";
const frame = document.querySelector("iframe");
const player = new Player('vimeo-player', {
  id: 236203659,
})
let vimeoDuration = '';
const throttledFn = throttle(() => {
  player.getCurrentTime().then(function(seconds) {
    console.log(seconds);
    vimeoDuration = seconds;
    localStorage.setItem("videoplayer-current-time", JSON.stringify(vimeoDuration));
  });
}, 1000);

player.on("timeupdate", throttledFn);
let currentTime = localStorage.getItem("videoplayer-current-time");
let parsedTime = JSON.parse(currentTime);
console.log(parsedTime);
player.setCurrentTime(parsedTime);
