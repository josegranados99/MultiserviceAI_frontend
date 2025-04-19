const generateImage = async () => {
  const request = areaText.value.trim();
  const modelAI = modelSelect.value;
  const size = sizeSelect.value;
  const quality = qualitySelect.value;
  const style = styleSelect.value;

  if (!request) {
    areaText.focus();
    return false;
  }

  messages(spanMessage, "Generating the AI ​​Image", 1000);

  boxImage.innerHTML =
    "<img src='./assets/img/imageGenerator/Infinity-loading.gif' alt='loading' />";

  try {
    const response = await fetch(
      "http://localhost:3123/api/v1/image/generate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userCode,
          text: request,
          modelAI,
          size,
          quality,
          style,
        }),
      }
    );

    spanMessage.innerHTML = "Generating image...";

    const data = await response.json();

    if (data && data.image) {
      boxImage.innerHTML = `<img src='${data.image}' alt='AI Image Generate' />`;
      spanMessage.innerHTML = currentDate();
    } else {
      spanMessage.innerHTML = "The image could not be generated";
    }
  } catch (error) {
    console.log("Error: ", error);
    messages(spanMessage, "Error generating image, please try again.", 2000);
  }

  areaText.focus();
};
