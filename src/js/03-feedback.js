import { throttle } from "lodash";
const emailInput = document.querySelector("input");
const messageInput = document.querySelector("textarea");
const data = {
  email: '',
  text: ''
}
const emailData = (event) => {
  data.email = event.target.value;
  localStorage.setItem("feedback-form-state", JSON.stringify(data));
}
emailInput.addEventListener("input", throttle((emailData),500))

const textData = (event) => {
  data.text = event.target.value;
  localStorage.setItem("feedback-form-state", JSON.stringify(data));
}
messageInput.addEventListener("input", throttle((textData), 500))

const dataFromStorage = localStorage.getItem("feedback-form-state");
const normalizedData = JSON.parse(dataFromStorage);
if (normalizedData && (normalizedData.hasOwnProperty('email') === true || normalizedData.hasOwnProperty('text') === true)) {
  if (normalizedData.email !== '' || normalizedData.text !== '') {
    emailInput.value = normalizedData.email;
    messageInput.value = normalizedData.text;
  }
} else {
  emailInput.value = '';
  messageInput.value = '';
}

const submitBtn = document.querySelector("button");
submitBtn.addEventListener("click", () => {
  console.log(data);
  localStorage.removeItem("feedback-form-state");
})
