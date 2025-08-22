
const baseUrl = "https://api-dev.geminigen.ai";

async function generateImage() {
  const genImageUrl = baseUrl + "/uapi/v1/generate_image";
  const apiKey = document.getElementById("apiKey").value.trim();
  const prompt = document.getElementById("prompt").value.trim();
  const imagePreview = document.getElementById("imagePreview");

  if (!apiKey || !prompt) {
    alert("Please enter API key and prompt!");
    return;
  }

  const formData = new FormData();
  formData.append("prompt", prompt);
  formData.append("model", "imagen-flash");

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
      throw new Error(`HTTP error! status: ${response.status}`);
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
