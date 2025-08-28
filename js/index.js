const BACKEND_URL = "https://api.geminigen.ai";
const DEFAULT_GEN_VIDEO_MODEL = "veo-2";
const RESPONSE_MESSAGE_MAPPING = {
  500: "An unknown error occurred. Please try again.",
  401: "Incorrect API key",
};

const IMAGE_GEN_ASPECT_RATIOS = ["1:1", "3:4", "4:3", "16:9", "9:16"];
const IMAGE_GEN_STYLES = [
  "None",
  "3D Render",
  "Acrylic",
  "Anime General",
  "Creative",
  "Dynamic",
  "Fashion",
  "Game Concept",
  "Graphic Design 3D",
  "Illustration",
  "Photorealistic",
  "Portrait",
  "Portrait Cinematic",
  "Portrait Fashion",
  "Ray Traced",
  "Stock Photo",
  "Watercolor",
];
const IMAGE_GEN_MODELS = {
  "Imagen 4 Ultra": "imagen-4-ultra",
  "Imagen 4 Fast": "imagen-4-fast",
  "Imagen 4": "imagen-4",
  "Gemini 2.0 Flash": "imagen-flash",
};

const VIDEO_GEN_MODELS = {
  "Veo 3": "veo-3",
  "Veo 3 Fast": "veo-3-fast",
  "Veo 2": "veo-2",
};

const ENHANCE_PROMPT = {
  On: true,
  Off: false,
};

TTS_MODELS = {
  "Gemini 2.5 Flash": "tts-flash",
};

TTS_OUTPUT_FORMATS = ["MP3", "WAV"];

const VIDEO_GEN_RESOLUTIONS = ["720p", "1080p"];
const VIDEO_GEN_ASPECT_RATIOS = ["16:9", "9:16"];

const container = document.getElementById("aspectRatioContainer");
const imageGenStyleSelect = document.getElementById("imageGenStyle");
const imageGenModelSelect = document.getElementById("imageGenModel");
const videoGenModelSelect = document.getElementById("videoGenModel");
const videoResolutionSelect = document.getElementById("videoResolution");
const enhancePromptSelect = document.getElementById("enhancePrompt");
const videoAspectRatioSelect = document.getElementById("videoAspectRatio");
const ttsModelSelect = document.getElementById("ttsModel");
const ttsOutputFormatSelect = document.getElementById("ttsOutputFormat");
const dtsModelSelect = document.getElementById("dtsModel");
const dtsOutputFormatSelect = document.getElementById("dtsOutputFormat");
const ttsDialogueModelSelect = document.getElementById("ttsDialogueModel");
const ttsDialogueOutputFormatSelect = document.getElementById(
  "ttsDialogueOutputFormat"
);

IMAGE_GEN_ASPECT_RATIOS.forEach((ratio, index) => {
  const div = document.createElement("div");
  div.className = "aspect-option" + (index === 0 ? " active" : "");
  div.innerText = ratio;

  div.addEventListener("click", () => {
    document
      .querySelectorAll(".aspect-option")
      .forEach((el) => el.classList.remove("active"));
    div.classList.add("active");
  });

  container.appendChild(div);
});

// Render option từ mảng
IMAGE_GEN_STYLES.forEach((style, index) => {
  const option = document.createElement("option");
  option.value = style.toLowerCase(); // value có thể là chữ thường
  option.text = style; // hiển thị tên
  if (index === 0) option.selected = true; // mặc định chọn cái đầu
  imageGenStyleSelect.appendChild(option);
});

// Render option từ mảng
Object.keys(IMAGE_GEN_MODELS).forEach((style, index) => {
  const option = document.createElement("option");
  option.value = style.toLowerCase(); // value có thể là chữ thường
  option.text = style; // hiển thị tên
  if (index === 0) option.selected = true; // mặc định chọn cái đầu
  imageGenModelSelect.appendChild(option);
});

// Render video model option từ mảng
Object.keys(ENHANCE_PROMPT).forEach((style, index) => {
  const option = document.createElement("option");
  option.value = style.toLowerCase(); // value có thể là chữ thường
  option.text = style; // hiển thị tên
  if (index === 0) option.selected = true; // mặc định chọn cái đầu
  enhancePromptSelect.appendChild(option);
});

Object.keys(VIDEO_GEN_MODELS).forEach((style, index) => {
  const option = document.createElement("option");
  option.value = style.toLowerCase(); // value có thể là chữ thường
  option.text = style; // hiển thị tên
  if (index === 0) option.selected = true; // mặc định chọn cái đầu
  videoGenModelSelect.appendChild(option);
});

VIDEO_GEN_RESOLUTIONS.forEach((style, index) => {
  const option = document.createElement("option");
  option.value = style.toLowerCase(); // value có thể là chữ thường
  option.text = style; // hiển thị tên
  if (index === 0) option.selected = true; // mặc định chọn cái đầu
  videoResolutionSelect.appendChild(option);
});

VIDEO_GEN_ASPECT_RATIOS.forEach((style, index) => {
  const option = document.createElement("option");
  option.value = style.toLowerCase(); // value có thể là chữ thường
  option.text = style; // hiển thị tên
  if (index === 0) option.selected = true; // mặc định chọn cái đầu
  videoAspectRatioSelect.appendChild(option);
});

Object.keys(TTS_MODELS).forEach((style, index) => {
  const option = document.createElement("option");
  option.value = style.toLowerCase(); // value có thể là chữ thường
  option.text = style; // hiển thị tên
  if (index === 0) option.selected = true; // mặc định chọn cái đầu
  ttsModelSelect.appendChild(option);
});

TTS_OUTPUT_FORMATS.forEach((style, index) => {
  const option = document.createElement("option");
  option.value = style.toLowerCase(); // value có thể là chữ thường
  option.text = style; // hiển thị tên
  if (index === 0) option.selected = true; // mặc định chọn cái đầu
  ttsOutputFormatSelect.appendChild(option);
});

Object.keys(TTS_MODELS).forEach((style, index) => {
  const option = document.createElement("option");
  option.value = style.toLowerCase(); // value có thể là chữ thường
  option.text = style; // hiển thị tên
  if (index === 0) option.selected = true; // mặc định chọn cái đầu
  dtsModelSelect.appendChild(option);
});

TTS_OUTPUT_FORMATS.forEach((style, index) => {
  const option = document.createElement("option");
  option.value = style.toLowerCase(); // value có thể là chữ thường
  option.text = style; // hiển thị tên
  if (index === 0) option.selected = true; // mặc định chọn cái đầu
  ttsDialogueOutputFormatSelect.appendChild(option);
});

// TTS Dialogue
Object.keys(TTS_MODELS).forEach((style, index) => {
  const option = document.createElement("option");
  option.value = style.toLowerCase(); // value có thể là chữ thường
  option.text = style; // hiển thị tên
  if (index === 0) option.selected = true; // mặc định chọn cái đầu
  ttsDialogueModelSelect.appendChild(option);
});

TTS_OUTPUT_FORMATS.forEach((style, index) => {
  const option = document.createElement("option");
  option.value = style.toLowerCase(); // value có thể là chữ thường
  option.text = style; // hiển thị tên
  if (index === 0) option.selected = true; // mặc định chọn cái đầu
  dtsOutputFormatSelect.appendChild(option);
});

async function generateImage() {
  const apiKey = document.getElementById("apiKey").value.trim();
  const prompt = document.getElementById("prompt").value.trim();

  if (!apiKey || !prompt) {
    showPopup("Please enter API key and prompt!");
    return;
  }

  const genImageUrl = BACKEND_URL + "/uapi/v1/generate_image";
  const generateBtn = document.getElementById("generateBtn");
  const aspectRatio = document
    .querySelector(".aspect-option.active")
    .innerText.trim();
  let selectedStyleText =
    imageGenStyleSelect.options[imageGenStyleSelect.selectedIndex].text;
  const selectedModelText =
    imageGenModelSelect.options[imageGenModelSelect.selectedIndex].text;
  const uploadGenImageFile = document.getElementById("uploadGenImageFile");
  const imageGenRef = uploadGenImageFile.files[0];

  // Disable button khi bắt đầu gọi API
  const imagePreview = document.getElementById("imagePreview");
  imagePreview.innerHTML = "";
  generateBtn.disabled = true;
  generateBtn.textContent = "Generating...";

  const formData = new FormData();
  formData.append("prompt", prompt);
  formData.append("model", IMAGE_GEN_MODELS[selectedModelText]);
  formData.append("aspect_ratio", aspectRatio);

  if (selectedStyleText !== "None") {
    formData.append("style", selectedStyleText);
  }
  if (imageGenRef) {
    formData.append("files", imageGenRef);
  }

  try {
    const response = await fetch(genImageUrl, {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        Accept: "application/json",
      },
      body: formData,
    });

    if (!response.ok) {
      // Trường hợp backend trả JSON có error_code / error_message
      if (response.status >= 400 && response.status < 500) {
        try {
          const errData = await response.json();
          if (errData?.detail?.error_message) {
            showPopup(errData.detail.error_message);
          } else {
            showPopup("Request failed with status " + response.status);
          }
        } catch (parseErr) {
          showPopup("Client error: " + response.status);
        }
        return;
      }

      // Nếu là lỗi đã được mapping sẵn (500, 401,…)
      const msg =
        RESPONSE_MESSAGE_MAPPING[response.status] ||
        "Unexpected error: " + response.status;
      showPopup(msg);
      return;
    }

    const result = await response.json();
    console.log("API response:", result);

    if (result.base64_images) {
      const imgBase64 = result.base64_images; // lấy nguyên chuỗi string

      const imgElement = document.createElement("img");
      imgElement.src = imgElement.src = "data:image/png;base64," + imgBase64;
      imgElement.alt = "Generated Image";
      imgElement.style.maxWidth = "100%";
      imgElement.style.borderRadius = "12px";
      imgElement.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";

      imagePreview.innerHTML = "";
      imagePreview.appendChild(imgElement);
    }
  } catch (error) {
    if (!navigator.onLine) {
      showPopup("No internet connection!");
    } else if (error instanceof TypeError && error.message.includes("fetch")) {
      showPopup("CORS blocked the request!");
    } else {
      console.error("Error calling API:", error);
      showPopup("Unexpected error: " + error.message);
    }
  } finally {
    // Enable lại button khi xong
    generateBtn.disabled = false;
    generateBtn.textContent = "Generate";
  }
}

async function generateVideo() {
  const apiKey = document.getElementById("apiKeyGenVideo").value.trim();
  const prompt = document.getElementById("promptGenVideo").value.trim();

  if (!apiKey || !prompt) {
    showPopup("Please enter API key and prompt!");
    return;
  }

  // Disable button khi bắt đầu gọi API
  const generateBtn = document.getElementById("generateVideoBtn");
  generateBtn.disabled = true;
  generateBtn.textContent = "Generating...";

  const genImageUrl = BACKEND_URL + "/uapi/v1/video-gen/veo";
  const negativePrompt =
    document.getElementById("negativePromptGenVideo").value.trim() || null;
  const model =
    VIDEO_GEN_MODELS[
      videoGenModelSelect.options[videoGenModelSelect.selectedIndex].text
    ];
  const videoGenDuration = document.getElementById("videoGenDuration").value;
  const enhancePrompt =
    ENHANCE_PROMPT[
      enhancePromptSelect.options[enhancePromptSelect.selectedIndex].text
    ];
  const videoResolution =
    videoResolutionSelect.options[videoResolutionSelect.selectedIndex].text;
  const videoAspectRatio =
    videoAspectRatioSelect.options[videoAspectRatioSelect.selectedIndex].text;
  const imageGenRef = document.getElementById("uploadGenVideoFile").files[0];

  const formData = new FormData();
  formData.append("prompt", prompt);
  formData.append("model", model);
  formData.append("enhance_prompt", enhancePrompt);
  formData.append("negative_prompt", negativePrompt);
  formData.append("duration", videoGenDuration);
  formData.append("resolution", videoResolution);
  formData.append("aspect_ratio", videoAspectRatio);
  if (imageGenRef) {
    formData.append("files", imageGenRef);
  }

  try {
    const response = await fetch(genImageUrl, {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        Accept: "application/json",
      },
      body: formData,
    });

    if (!response.ok) {
      // Trường hợp backend trả JSON có error_code / error_message
      if (response.status >= 400 && response.status < 500) {
        try {
          const errData = await response.json();
          if (errData?.detail?.error_message) {
            showPopup(errData.detail.error_message);
          } else {
            showPopup("Request failed with status " + response.status);
          }
        } catch (parseErr) {
          showPopup("Client error: " + response.status);
        }
        return;
      }

      // Nếu là lỗi đã được mapping sẵn (500, 401,…)
      const msg =
        RESPONSE_MESSAGE_MAPPING[response.status] ||
        "Unexpected error: " + response.status;
      showPopup(msg);
      return;
    }

    showPopup(
      "Video gen request initialization successful. Please check the data in your webhook."
    );
  } catch (error) {
    if (!navigator.onLine) {
      showPopup("No internet connection!");
    } else if (error instanceof TypeError && error.message.includes("fetch")) {
      showPopup("CORS blocked the request!");
    } else {
      console.error("Error calling API:", error);
      showPopup("Unexpected error: " + error.message);
    }
  } finally {
    // Enable lại button khi xong
    generateBtn.disabled = false;
    generateBtn.textContent = "Generate";
  }
}

async function generateTts() {
  const apiKey = document.getElementById("apiKeyGenTts").value;
  const ttsText = document.getElementById("ttsText").value;
  const customPrompt = document.getElementById("ttsCustomPrompt").value;
  const model =
    TTS_MODELS[ttsModelSelect.options[ttsModelSelect.selectedIndex].text];
  const ttsOutputFormat =
    ttsOutputFormatSelect.options[ttsOutputFormatSelect.selectedIndex].text;
  const ttsEmotion = document.getElementById("ttsEmotion").value;
  const voiceId = document.getElementById("ttsVoiceId").value;
  const voiceName = document.getElementById("ttsVoiceName").value;
  const ttsSpeed = document.getElementById("ttsSpeed").value || 1;

  if (
    !apiKey ||
    !ttsText ||
    !model ||
    !ttsOutputFormat ||
    !voiceId ||
    !voiceName
  ) {
    showPopup("Please fill in all required fields!");
    return;
  }

  if (ttsSpeed <= 0) {
    showPopup("Speed required value greater than 0!");
    return;
  }

  // Disable button khi bắt đầu gọi API
  const generateBtn = document.getElementById("generateTtsBtn");
  generateBtn.disabled = true;
  generateBtn.textContent = "Generating...";

  const genImageUrl = BACKEND_URL + "/uapi/v1/text-to-speech";

  const request_body = {
    input: ttsText,
    model: model,
    output_format: ttsOutputFormat.toLowerCase(),
    speed: parseFloat(ttsSpeed),
    voices: [
      {
        voice: {
          id: voiceId,
          name: voiceName,
        },
        name: voiceName,
      },
    ],
  };

  if (ttsEmotion) {
    request_body.emotion = ttsEmotion;
  }

  if (customPrompt) {
    request_body.custom_prompt = customPrompt;
  }

  try {
    const response = await fetch(genImageUrl, {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request_body),
    });

    if (!response.ok) {
      // Trường hợp backend trả JSON có error_code / error_message
      if (response.status >= 400 && response.status < 500) {
        try {
          const errData = await response.json();
          if (errData?.detail?.error_message) {
            showPopup(errData.detail.error_message);
          } else {
            showPopup("Request failed with status " + response.status);
          }
        } catch (parseErr) {
          showPopup("Client error: " + response.status);
        }
        return;
      }

      // Nếu là lỗi đã được mapping sẵn (500, 401,…)
      const msg =
        RESPONSE_MESSAGE_MAPPING[response.status] ||
        "Unexpected error: " + response.status;
      showPopup(msg);
      return;
    }

    showPopup(
      "Generate speech request initialization successful. Please check the data in your webhook."
    );
  } catch (error) {
    if (!navigator.onLine) {
      showPopup("No internet connection!");
    } else if (error instanceof TypeError && error.message.includes("fetch")) {
      showPopup("CORS blocked the request!");
    } else {
      console.error("Error calling API:", error);
      showPopup("Unexpected error: " + error.message);
    }
  } finally {
    // Enable lại button khi xong
    generateBtn.disabled = false;
    generateBtn.textContent = "Generate";
  }
}

async function generateDts() {
  const apiKey = document.getElementById("apiKeyDts").value;
  const model =
    TTS_MODELS[dtsModelSelect.options[dtsModelSelect.selectedIndex].text];
  const outputFormat =
    dtsOutputFormatSelect.options[dtsOutputFormatSelect.selectedIndex].text;
  const voiceId = document.getElementById("dtsVoiceId").value;
  const voiceName = document.getElementById("dtsVoiceName").value;
  const speed = document.getElementById("dtsSpeed").value || 1;
  const file = document.getElementById("dtsDFile").files[0];
  const filePassword = document.getElementById("dtsFilePassword").value;

  if (!file) {
    showPopup("Please select your document!");
    return;
  }

  if (!apiKey || !model || !outputFormat || !voiceId || !voiceName) {
    showPopup("Please fill in all required fields!");
    return;
  }

  if (speed <= 0) {
    showPopup("Speed required value greater than 0!");
    return;
  }

  // Disable button khi bắt đầu gọi API
  const generateBtn = document.getElementById("generateDtsBtn");
  generateBtn.disabled = true;
  generateBtn.textContent = "Generating...";

  const genImageUrl = BACKEND_URL + "/uapi/v1/document-to-speech";

  const formData = new FormData();
  formData.append("model", model);
  formData.append("output_format", outputFormat.toLowerCase());
  formData.append("speed", speed);
  formData.append("file", file);

  const voices = [
    {
      voice: {
        id: voiceId,
        name: voiceName,
      },
      name: voiceName,
    },
  ];
  formData.append("voices", JSON.stringify(voices));

  if (filePassword) {
    formData.append("file_password", filePassword);
  }

  try {
    const response = await fetch(genImageUrl, {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        Accept: "application/json",
      },
      body: formData,
    });

    if (!response.ok) {
      // Trường hợp backend trả JSON có error_code / error_message
      if (response.status >= 400 && response.status < 500) {
        try {
          const errData = await response.json();
          if (errData?.detail?.error_message) {
            showPopup(errData.detail.error_message);
          } else {
            showPopup("Request failed with status " + response.status);
          }
        } catch (parseErr) {
          showPopup("Client error: " + response.status);
        }
        return;
      }

      // Nếu là lỗi đã được mapping sẵn (500, 401,…)
      const msg =
        RESPONSE_MESSAGE_MAPPING[response.status] ||
        "Unexpected error: " + response.status;
      showPopup(msg);
      return;
    }

    showPopup(
      "Generate speech request initialization successful. Please check the data in your webhook."
    );
  } catch (error) {
    if (!navigator.onLine) {
      showPopup("No internet connection!");
    } else if (error instanceof TypeError && error.message.includes("fetch")) {
      showPopup("CORS blocked the request!");
    } else {
      console.error("Error calling API:", error);
      showPopup("Unexpected error: " + error.message);
    }
  } finally {
    // Enable lại button khi xong
    generateBtn.disabled = false;
    generateBtn.textContent = "Generate";
  }
}

function showPopup(message, title = "Notification") {
  document.getElementById("popupTitle").innerText = title;
  document.getElementById("popupMessage").innerText = message;
  document.getElementById("popupOverlay").style.display = "flex";
}

function closePopup() {
  document.getElementById("popupOverlay").style.display = "none";
}

// Đóng khi nhấn ESC
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closePopup();
  }
});

// Đóng khi click ra ngoài popup
document
  .getElementById("popupOverlay")
  .addEventListener("click", function (event) {
    if (event.target === this) {
      closePopup();
    }
  });

async function generateTtsDialogue() {
  const apiKey = document.getElementById("apiKeyGenTtsDialogue").value;
  const customPrompt = document.getElementById("ttsCustomPromptDialogue").value;
  const model =
    TTS_MODELS[
      ttsDialogueModelSelect.options[ttsDialogueModelSelect.selectedIndex].text
    ];
  const ttsOutputFormat =
    ttsDialogueOutputFormatSelect.options[
      ttsDialogueOutputFormatSelect.selectedIndex
    ].text;
  const ttsEmotion = document.getElementById("ttsDialogueEmotion").value;
  const voice1Id = document.getElementById("voice1Id").value;
  const voice1Name = document.getElementById("voice1Name").value;
  const voice2Id = document.getElementById("voice2Id").value;
  const voice2Name = document.getElementById("voice2Name").value;
  const ttsSpeed = document.getElementById("ttsSpeed").value || 1;

  if (!apiKey || !model || !ttsOutputFormat || !voice1Id || !voice1Name) {
    showPopup("Please fill in all required fields!");
    return;
  }

  if (ttsSpeed <= 0) {
    showPopup("Speed required value greater than 0!");
    return;
  }

  // Disable button khi bắt đầu gọi API
  const generateBtn = document.getElementById("generateTtsDialogueBtn");
  generateBtn.disabled = true;
  generateBtn.textContent = "Generating...";

  const genImageUrl = BACKEND_URL + "/uapi/v1/tts-multi-speaker";

  const voices = [];

  if (voice1Id && voice1Name) {
    voices.push({
      name: "Voice 1",
      voice: { id: voice1Id, name: voice1Name },
    });
  }

  if (voice2Id && voice2Name) {
    voices.push({
      name: "Voice 2",
      voice: { id: voice2Id, name: voice2Name },
    });
  }

  // 2. Lấy blocks
  const blocks = [];
  const blockEls = document.querySelectorAll("#dialog-container .dialog-block");

  let hasError = false;

  blockEls.forEach((block, idx) => {
    const select = block.querySelector("select");
    const textarea = block.querySelector("textarea");

    const text = textarea?.value.trim();
    const selectedVoice = select?.value;

    if (!selectedVoice) {
      showPopup(`Block #${idx + 1}: Please select a voice!`);
      hasError = true;
      return; // bỏ qua block này
    }

    if (!text) {
      showPopup(`Block #${idx + 1}: Text cannot be empty!`);
      hasError = true;
      return; // bỏ qua block này
    }

    // tìm voice label ("Voice 1" / "Voice 2")
    const voiceObj = voices.find((v) => v.voice.id === selectedVoice);
    const voiceLabel = voiceObj ? voiceObj.name : "Unknown Voice";

    blocks.push({
      input: `${voiceLabel}: ${text}`,
    });
  });

  if (hasError) {
    generateBtn.disabled = false;
    generateBtn.textContent = "Generate";
    return; // dừng luôn, không call API
  }

  if (blocks.length === 0) {
    showPopup("Please add at least one dialog block!");
    generateBtn.disabled = false;
    generateBtn.textContent = "Generate";
    return;
  }

  const request_body = {
    model: model,
    model_name: model,
    output_format: ttsOutputFormat.toLowerCase(),
    speed: parseFloat(ttsSpeed),
    blocks: blocks,
    voices: voices,
  };

  if (ttsEmotion) {
    request_body.emotion = ttsEmotion;
  }

  if (customPrompt) {
    request_body.custom_prompt = customPrompt;
  }

  try {
    const response = await fetch(genImageUrl, {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request_body),
    });

    if (!response.ok) {
      // Trường hợp backend trả JSON có error_code / error_message
      if (response.status >= 400 && response.status < 500) {
        try {
          const errData = await response.json();
          if (errData?.detail?.error_message) {
            showPopup(errData.detail.error_message);
          } else {
            showPopup("Request failed with status " + response.status);
          }
        } catch (parseErr) {
          showPopup("Client error: " + response.status);
        }
        return;
      }

      // Nếu là lỗi đã được mapping sẵn (500, 401,…)
      const msg =
        RESPONSE_MESSAGE_MAPPING[response.status] ||
        "Unexpected error: " + response.status;
      showPopup(msg);
      return;
    }

    showPopup(
      "Generate speech request initialization successful. Please check the data in your webhook."
    );
  } catch (error) {
    if (!navigator.onLine) {
      showPopup("No internet connection!");
    } else if (error instanceof TypeError && error.message.includes("fetch")) {
      showPopup("CORS blocked the request!");
    } else {
      console.error("Error calling API:", error);
      showPopup("Unexpected error: " + error.message);
    }
  } finally {
    // Enable lại button khi xong
    generateBtn.disabled = false;
    generateBtn.textContent = "Generate";
  }
}
