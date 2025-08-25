const codeSamples = {
  img: [
    {
      lang: "javascript",
      label: "Javascript",
      code: `
import axios from "axios";
import FormData from "form-data";

async function generateImage() {
  const formData = new FormData();
  formData.append("prompt", "Create a dog eat pizza");
  formData.append("model", "imagen-flash");
  // other params...

  try {
    const response = await axios.post(
      "https://api.geminigen.ai/uapi/v1/generate_image",
      formData,
      {
        headers: {
          ...formData.getHeaders(),
          "Accept": "application/json",
          "x-api-key": "your_api_key"
        }
      }
    );
    console.log(response.data);
  } catch (err) {
    console.error(err.response?.data || err.message);
  }
}

generateImage();
      `.trim(),
    },
    {
      lang: "java",
      label: "Java",
      code: `
import okhttp3.*;
import java.io.IOException;

public class GenImage {
    public static void main(String[] args) throws IOException {
        OkHttpClient client = new OkHttpClient();

        MultipartBody.Builder bodyBuilder = new MultipartBody.Builder().setType(MultipartBody.FORM);
        bodyBuilder.addFormDataPart("prompt", "Create a dog eat pizza");
        bodyBuilder.addFormDataPart("model", "imagen-flash");

        Request request = new Request.Builder()
                .url("https://api.geminigen.ai/uapi/v1/generate_image")
                .addHeader("x-api-key", "your_api_key")
                .addHeader("Accept", "application/json")
                .post(bodyBuilder.build())
                .build();

        try (Response response = client.newCall(request).execute()) {
            System.out.println(response.body().string());
        }
    }
}
      `.trim(),
    },
    {
      lang: "python",
      label: "Python",
      code: `
import requests

url = "https://api.geminigen.ai/uapi/v1/generate_image"
headers = {
    "Accept": "application/json",
    "x-api-key": "your_api_key"
}

files = {
    "prompt": (None, "Create a dog eat pizza"),
    "model": (None, "imagen-flash"),
    # other params...
}

response = requests.post(url, headers=headers, files=files)
print(response.json())
      `.trim(),
    },
    {
      lang: "php",
      label: "PhP",
      code: `
&lt;?php
$curl = curl_init();

$data = [
    "prompt" => "Create a dog eat pizza",
    "model" => "imagen-flash",
    // other params...
];

curl_setopt_array($curl, [
  CURLOPT_URL => "https://api.geminigen.ai/uapi/v1/generate_image",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_POST => true,
  CURLOPT_HTTPHEADER => [
    "Accept: application/json",
    "x-api-key: your_api_key"
  ],
  CURLOPT_POSTFIELDS => $data
]);

$response = curl_exec($curl);
if (curl_errno($curl)) {
    echo "Error: " . curl_error($curl);
}
curl_close($curl);

echo $response;
    }
}
      `.trim(),
    },
    {
      lang: "csharp",
      label: "C#",
      code: `
using System;
using System.Net.Http;
using System.Threading.Tasks;

class Program {
    static async Task Main() {
        using (var client = new HttpClient()) {
            client.DefaultRequestHeaders.Add("Accept", "application/json");
            client.DefaultRequestHeaders.Add("x-api-key", "your_api_key");

            var form = new MultipartFormDataContent();
            form.Add(new StringContent("Create a dog eat pizza"), "prompt");
            form.Add(new StringContent("imagen-flash"), "model");
            // other params...

            var response = await client.PostAsync("https://api.geminigen.ai/uapi/v1/generate_image", form);
            string result = await response.Content.ReadAsStringAsync();
            Console.WriteLine(result);
        }
    }
}
      `.trim(),
    },
  ],
  img_webhook: [
    {
      lang: "javascript",
      label: "Javascript (Express.js)",
      code: `
// server.js
const express = require("express");
const app = express();

app.use(express.json()); // parse JSON body

app.post("/receive-data", (req, res) => {
  console.log("Received data:", req.body);
  res.json({ message: "Data received successfully", data: req.body });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
      `.trim(),
    },
    {
      lang: "java",
      label: "Java (SpringBoot)",
      code: `
// DemoApplication.java
@RestController
public class DemoController {

    @PostMapping("/receive-data")
    public Map<String, Object> receiveData(@RequestBody Map<String, Object> body) {
        System.out.println("Received data: " + body);
        return Map.of("message", "Data received successfully", "data", body);
    }
}
      `.trim(),
    },
    {
      lang: "python",
      label: "Python (Flask)",
      code: `
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/receive-data", methods=["POST"])
def receive_data():
    data = request.get_json()
    print("Received data:", data)
    return jsonify({"message": "Data received successfully", "data": data})

if __name__ == "__main__":
    app.run(port=5000, debug=True)
      `.trim(),
    },
    {
      lang: "php",
      label: "PHP (Laravel)",
      code: `
&lt;?php
// routes/api.php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/receive-data', function (Request $request) {
    $data = $request->all();
    \Log::info('Received data: ', $data);
    return response()->json([
        'message' => 'Data received successfully',
        'data' => $data
    ]);
});
      `.trim(),
    },
    {
      lang: "csharp",
      label: "C# (ASP.NET Core)",
      code: `
// Controllers/ReceiveDataController.cs
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("[controller]")]
public class ReceiveDataController : ControllerBase
{
    [HttpPost]
    public IActionResult Post([FromBody] object data)
    {
        Console.WriteLine("Received data: " + data);
        return Ok(new { message = "Data received successfully", data });
    }
}
      `.trim(),
    },
  ],
};

// Copy function
function copyCode(id) {
  const code = document.getElementById(id).innerText;
  navigator.clipboard.writeText(code).then(() => {
    showToast("Code copied!");
  });
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.innerText = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500); // 2.5s biến mất
}

// ...thêm vào cuối file, trước </body>...
function renderTabs(group) {
  const tabsHtml = codeSamples[group]
    .map(
      (item, idx) =>
        `<div class="tab${idx === 0 ? " active" : ""}" data-lang="${
          item.lang
        }" data-group="${group}">${item.label}</div>`
    )
    .join("");
  return `<div class="tabs">${tabsHtml}</div>`;
}

function renderContents(group) {
  const contentsHtml = codeSamples[group]
    .map(
      (item, idx) =>
        `<div class="tab-content${idx === 0 ? " active" : ""}" id="${
          item.lang
        }-${group}">
              <button class="copy-btn" onclick="copyCode('code-${
                item.lang
              }-${group}')">
                <i class="fa-regular fa-copy"></i>
              </button>
              <pre><code id="code-${item.lang}-${group}" class="language-${
          item.lang
        }">${item.code}</code></pre>
            </div>`
    )
    .join("");
  return contentsHtml;
}

function attachTabEvents() {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      const lang = tab.dataset.lang;
      const group = tab.dataset.group;

      // Đổi tab trong group hiện tại
      document
        .querySelectorAll(`.tab[data-group="${group}"]`)
        .forEach((t) => t.classList.remove("active"));
      document
        .querySelectorAll(`.tab-content[id$="-${group}"]`)
        .forEach((c) => c.classList.remove("active"));

      tab.classList.add("active");
      const activeContent = document.getElementById(`${lang}-${group}`);
      if (activeContent) activeContent.classList.add("active");

      // Đồng bộ các group khác
      ["img", "img_webhook"].forEach((g) => {
        if (g !== group) {
          document
            .querySelectorAll(`.tab[data-group="${g}"]`)
            .forEach((t) => t.classList.remove("active"));
          document
            .querySelectorAll(`.tab-content[id$="-${g}"]`)
            .forEach((c) => c.classList.remove("active"));
          const tabToActivate = document.querySelector(
            `.tab[data-group="${g}"][data-lang="${lang}"]`
          );
          if (tabToActivate) tabToActivate.classList.add("active");
          const contentToActivate = document.getElementById(`${lang}-${g}`);
          if (contentToActivate) contentToActivate.classList.add("active");
        }
      });
    });
  });
}

// Render vào HTML
document.querySelector("#img-tabs-container").innerHTML =
  renderTabs("img") + renderContents("img");
  document.querySelector("#img-webhook-tabs-container").innerHTML =
  renderTabs("img_webhook") + renderContents("img_webhook");
attachTabEvents();
