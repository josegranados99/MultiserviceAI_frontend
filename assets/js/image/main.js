const boxImage = document.getElementById("box-img");
const areaText = document.getElementById("area-text");
const buttonSend = document.getElementById("btn-send");
const spanMessage = document.getElementById("spn-msg");
const modelSelect = document.getElementById("cmb-model");
const sizeSelect = document.getElementById("cmb-size");
const qualitySelect = document.getElementById("cmb-quality");
const styleSelect = document.getElementById("cmb-style");

const userCode = crypto.randomUUID();

spanMessage.innerHTML = currentDate();

modelSelect.addEventListener("click", configParams)
buttonSend.addEventListener("click", generateImage);