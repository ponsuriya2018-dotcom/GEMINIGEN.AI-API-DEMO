
const BACKEND_URL = "https://api.geminigen.ai";
const DEFAULT_GEN_IMAGE_MODEL = "imagen-flash";
const DEFAULT_GEN_VIDEO_MODEL = "veo-2";
const RESPONSE_MESSAGE_MAPPING = {
  500: "An unknown error occurred. Please try again.",
  401: "Incorrect API key",
};

async function generateImage() {
  const genImageUrl = BACKEND_URL + "/uapi/v1/generate_image";
  const apiKey = document.getElementById("apiKey").value.trim();
  const prompt = document.getElementById("prompt").value.trim();
  const imagePreview = document.getElementById("imagePreview");

  if (!apiKey || !prompt) {
    showPopup("Please enter API key and prompt!");
    return;
  }

  const formData = new FormData();
  formData.append("prompt", prompt);
  formData.append("model", DEFAULT_GEN_IMAGE_MODEL);

  try {
    const response = await fetch(genImageUrl, {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "Accept": "application/json"
      },
      body: formData,
    });

    if (!response.ok) {
      showPopup(RESPONSE_MESSAGE_MAPPING.get(response.status));
      return;
    }

    const result = await response.json();
    console.log("API response:", result);

    // Nếu có base64_images
    if (result.base64_images && result.base64_images.length > 0) {
      const imgBase64 = result.base64_images[0];

      // Tạo thẻ img
      const imgElement = document.createElement("img");
      imgElement.src = `data:image/png;base64,${imgBase64}`;
      imgElement.alt = "Generated Image";
      imgElement.style.maxWidth = "100%";
      imgElement.style.borderRadius = "12px";
      imgElement.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";

      // Gắn vào div có id=imagePreview
      imagePreview.innerHTML = ""; // xoá ảnh cũ nếu có
      imagePreview.appendChild(imgElement);
    }
  } catch (error) {
    console.error("Error calling API:", error);
  }
}

async function generateVideo() {
  const genImageUrl = BACKEND_URL + "/uapi/v1/video-gen/veo";
  const apiKey = document.getElementById("apiKeyGenVideo").value.trim();
  const prompt = document.getElementById("promptGenVideo").value.trim();

  if (!apiKey || !prompt) {
    showPopup("Please enter API key and prompt!");
    return;
  }

  const formData = new FormData();
  formData.append("prompt", prompt);
  formData.append("model", DEFAULT_GEN_VIDEO_MODEL);
  formData.append("enhance_prompt", true)

  try {
    const response = await fetch(genImageUrl, {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "Accept": "application/json"
      },
      body: formData,
    });
    response.s

    if (!response.ok) {
      showPopup(RESPONSE_MESSAGE_MAPPING.get(response.status));
      return;
    }

    showPopup('Video gen request initialization successful. Please check the data in your webhook.')
  } catch (error) {
    console.error("Error calling API:", error);
  }
}

function showPopup(message, title = 'Notification') {
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
document.getElementById("popupOverlay").addEventListener("click", function (event) {
  if (event.target === this) {
    closePopup();
  }
});
