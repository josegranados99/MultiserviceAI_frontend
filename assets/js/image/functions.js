const messages = (elementHTML, text, ms) => {
  setTimeout(() => {
    elementHTML.innerHTML = text;
  }, ms);
};

const paramsInitial = () => {
  sizeSelect.innerHTML = `<select name="cmb-size" id="cmb-size">
                <option value="1024x1024">1024x1024</option>
                <option value="1792x1024">1792x1024</option>
                <option value="1024x1792">1024x1792</option>
              </select>`;

  qualitySelect.innerHTML = `<select name="cmb-quality" id="cmb-quality">
                <option value="hd">HD</option>
                <option value="standard">Standard</option>
              </select>`;
  styleSelect.innerHTML = `<select name="cmb-style" id="cmb-style">
                <option value="vivid">Vivid</option>
                <option value="natural">Natural</option>
              </select>`;
};

const configParams = () => {
  const model = String(modelSelect.value);
  console.log(model);

  if (model === "dall-e-2") {
    console.log("papitas");

    sizeSelect.innerHTML = `<select name="cmb-size" id="cmb-size">
                <option value="256x256">256x256</option>
                <option value="512x512">512x512</option>
                <option value="1024x1024">1024x1024</option>
                </select>`;
    qualitySelect.innerHTML = `<select name="cmb-quality" id="cmb-quality">
                <option value="standard">Standard</option>
              </select>`;
    styleSelect.innerHTML = `<select name="cmb-style" id="cmb-style">
                <option value="vivid">Vivid</option>
              </select>`;
  } else {
    paramsInitial();
  }
};
