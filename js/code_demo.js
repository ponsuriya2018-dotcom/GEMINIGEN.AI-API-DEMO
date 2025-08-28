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
data = {
    "prompt": "A beautiful sunset over mountains with vibrant colors",
    "model": "imagen-flash"
}

response = requests.post(url, headers=headers, data=data)
print(response.json())
      `.trim(),
    },
    {
      lang: "php",
      label: "PHP",
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
  video: [
    {
      lang: "javascript",
      label: "Javascript",
      code: `
const axios = require("axios");

const url = "https://api.geminigen.ai/uapi/v1/video-gen/veo";
const headers = {
  "x-api-key": "your_api_key"
};
const data = {
  prompt: "A serene lake surrounded by mountains at sunset with gentle waves",
  model: "veo-3",
  enhance_prompt: true,
  resolution: "720p",
  duration: 5,
  aspect_ratio: "16:9"
};

axios.post(url, data, { headers })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error.response ? error.response.data : error.message);
  });
      `.trim(),
    },
    {
      lang: "java",
      label: "Java",
      code: `
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class Main {
    public static void main(String[] args) throws Exception {
        String url = "https://api.geminigen.ai/uapi/v1/video-gen/veo";
        String json = """
        {
            "prompt": "A serene lake surrounded by mountains at sunset with gentle waves",
            "model": "veo-3",
            "enhance_prompt": true,
            "resolution": "720p",
            "duration": 5,
            "aspect_ratio": "16:9"
        }
        """;

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(url))
            .header("x-api-key", "your_api_key")
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString(json))
            .build();

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}
      `.trim(),
    },
    {
      lang: "python",
      label: "Python",
      code: `
import requests

url = "https://api.geminigen.ai/uapi/v1/video-gen/veo"
headers = {
    "x-api-key": "<your api key>"
}
data = {
    "prompt": "A serene lake surrounded by mountains at sunset with gentle waves",
    "model": "veo-3",
    "enhance_prompt": True,
    "resolution": "720p",
    "duration": 5,
    "aspect_ratio": "16:9"
}

response = requests.post(url, headers=headers, data=data)
print(response.json())
      `.trim(),
    },
    {
      lang: "php",
      label: "PHP",
      code: `
&lt;?php
$url = "https://api.geminigen.ai/uapi/v1/video-gen/veo";

$data = [
    "prompt" => "A serene lake surrounded by mountains at sunset with gentle waves",
    "model" => "veo-3",
    "enhance_prompt" => true,
    "resolution" => "720p",
    "duration" => 5,
    "aspect_ratio" => "16:9"
];

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "x-api-key: your_api_key",
    "Content-Type: application/json"
]);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
if (curl_errno($ch)) {
    echo "Error: " . curl_error($ch);
} else {
    echo $response;
}
curl_close($ch);

      `.trim(),
    },
    {
      lang: "csharp",
      label: "C#",
      code: `
using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

class Program {
    static async Task Main() {
        var url = "https://api.geminigen.ai/uapi/v1/video-gen/veo";
        var json = @"{
            ""prompt"": ""A serene lake surrounded by mountains at sunset with gentle waves"",
            ""model"": ""veo-3"",
            ""enhance_prompt"": true,
            ""resolution"": ""720p"",
            ""duration"": 5,
            ""aspect_ratio"": ""16:9""
        }";

        using var client = new HttpClient();
        client.DefaultRequestHeaders.Add("x-api-key", "your_api_key");

        var content = new StringContent(json, Encoding.UTF8, "application/json");
        var response = await client.PostAsync(url, content);
        var result = await response.Content.ReadAsStringAsync();

        Console.WriteLine(result);
    }
}
      `.trim(),
    },
  ],
  vertify_webhook_data: [
    {
      lang: "javascript",
      label: "Javascript",
      code: `
// nodejs (no framework)
const fs = require('fs');
const crypto = require('crypto');

function verifySignatureByPublicKey(data, signatureHex, publicKeyPath) {
  try {
    const publicKey = fs.readFileSync(publicKeyPath, 'utf8');
    // MD5 digest bytes
    const md5Digest = crypto.createHash('md5').update(data, 'utf8').digest();
    console.log(md5Digest.toString('hex'));
    // Verify using SHA256 over the md5Digest
    return crypto.verify(
      'sha256',
      md5Digest,
      {
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_PADDING
      },
      Buffer.from(signatureHex, 'hex')
    );
  } catch (err) {
    console.error(err.message);
    return false;
  }
}

function handleRequest(request) {
  const signatureHex = request.headers['x-signature'];
  const body = JSON.parse(request.body);
  const eventUuid = body.event_uuid;
  if (!signatureHex || !verifySignatureByPublicKey(eventUuid, signatureHex, 'path/to/public_key.pem')) {
    return new Error('Invalid or missing signature');
  }
  // Your data processing logic
  // Example: print out detailed generated data
  console.log(body.data);
}

      `.trim(),
    },
    {
      lang: "java",
      label: "Java",
      code: `
// Java 11+
import java.nio.file.Files;
import java.nio.file.Paths;
import java.security.*;
import java.security.spec.*;
import java.util.Base64;
import javax.xml.bind.DatatypeConverter; // or use java.util.HexFormat in newer JDKs
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.Map;

public class WebhookUtil {
    public static boolean verifySignatureByPublicKey(String data, byte[] signature, String publicKeyPath) {
        try {
            byte[] pubBytes = Files.readAllBytes(Paths.get(publicKeyPath));
            String pem = new String(pubBytes).replaceAll("-----\\w+ PUBLIC KEY-----", "").replaceAll("\\s",""); 
            byte[] decoded = Base64.getDecoder().decode(pem);
            X509EncodedKeySpec spec = new X509EncodedKeySpec(decoded);
            PublicKey publicKey = KeyFactory.getInstance("RSA").generatePublic(spec);

            // MD5 digest
            MessageDigest md5 = MessageDigest.getInstance("MD5");
            byte[] md5Digest = md5.digest(data.getBytes("UTF-8"));
            System.out.println(javax.xml.bind.DatatypeConverter.printHexBinary(md5Digest).toLowerCase());

            // Verify using SHA256withRSA over the md5 digest
            Signature sig = Signature.getInstance("SHA256withRSA");
            sig.initVerify(publicKey);
            sig.update(md5Digest);
            return sig.verify(signature);
        } catch (Exception e) {
            System.err.println(e.getMessage());
            return false;
        }
    }

    public static void handleRequest(Map<String,Object> request) throws Exception {
        Map<String,String> headers = (Map)request.get("headers");
        String sigHex = headers.get("X-Signature");
        String bodyJson = (String)request.get("body");
        ObjectMapper om = new ObjectMapper();
        Map body = om.readValue(bodyJson, Map.class);
        String eventUuid = (String) body.get("event_uuid");
        if (sigHex == null || eventUuid == null || !verifySignatureByPublicKey(eventUuid, DatatypeConverter.parseHexBinary(sigHex), "path/to/public_key.pem")) {
            throw new Exception("Invalid or missing signature");
        }
        // Your data processing logic
        // Example: print out detailed generated data    
        System.out.println(body.get("data"));
    }
}
      `.trim(),
    },
    {
      lang: "python",
      label: "Python",
      code: `
import json
from hashlib import md5
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.asymmetric import padding
from cryptography.hazmat.primitives.serialization import load_pem_public_key

def verify_signature_by_public_key(data: str, signature: bytes, public_key_path: str) -> bool:
    try:
        # Load your public key
        with open(public_key_path, "rb") as key_file:
            public_key = load_pem_public_key(key_file.read())

        # Create MD5 hash of the data
        event_data_hash = md5(data.encode()).digest()
        print(event_data_hash.hex())
        # Verify the signature
        public_key.verify(
            signature,
            event_data_hash,
            padding.PKCS1v15(),
            hashes.SHA256()
        )
        return True
    except Exception as e:
        print(str(e))
        return False
    
def handle_request(request):
    signature_hex = request["headers"].get("X-Signature")
    body_data = json.loads(request["body"])
    event_uuid = body_data.get("event_uuid")
    if not signature_hex or not verify_signature_by_public_key(event_uuid, bytes.fromhex(signature_hex), "path/to/public_key.pem"):
        return Exception("Invalid or missing signature")
    # Your data processing logic
    # Example: print out detailed generated data
    print(body_data.get("data"))
      `.trim(),
    },
    {
      lang: "php",
      label: "PHP",
      code: `
&lt;?php
function verifySignatureByPublicKey(string $data, string $signatureHex, string $publicKeyPath): bool {
    $pub = file_get_contents($publicKeyPath);
    if ($pub === false) return false;
    $md5 = md5($data, true); // raw binary md5
    error_log(bin2hex($md5));
    $signature = hex2bin($signatureHex);
    if ($signature === false) return false;
    // openssl_verify will hash $md5 using SHA256 internally (OPENSSL_ALGO_SHA256)
    $res = openssl_verify($md5, $signature, $pub, OPENSSL_ALGO_SHA256);
    return $res === 1;
}

function handleRequest(array $request) {
    $signatureHex = $request['headers']['X-Signature'] ?? null;
    $body = json_decode($request['body'], true);
    $event_uuid = $body['event_uuid'] ?? null;
    if (!$signatureHex || !$event_uuid || !verifySignatureByPublicKey($event_uuid, $signatureHex, 'path/to/public_key.pem')) {
        return new Exception("Invalid or missing signature");
    }
    // Your data processing logic
    // Example: print out detailed generated data
    error_log(print_r($body['data'] ?? null, true));
}


      `.trim(),
    },
    {
      lang: "csharp",
      label: "C#",
      code: `
using System;
using System.Text;
using System.Security.Cryptography;
using System.IO;
using System.Text.Json;
using System.Collections.Generic;

public static class WebhookUtil {
    public static bool VerifySignatureByPublicKey(string data, byte[] signature, string publicKeyPath) {
        try {
            var pubPem = File.ReadAllText(publicKeyPath);
            // Remove PEM armor
            var base64 = pubPem.Replace("-----BEGIN PUBLIC KEY-----","").Replace("-----END PUBLIC KEY-----","").Replace("\n","").Replace("\r","");
            var pubBytes = Convert.FromBase64String(base64);
            using (var rsa = RSA.Create()) {
                rsa.ImportSubjectPublicKeyInfo(pubBytes, out _);
                // md5 of data
                using (var md5 = MD5.Create()) {
                    var md5Digest = md5.ComputeHash(Encoding.UTF8.GetBytes(data));
                    Console.WriteLine(BitConverter.ToString(md5Digest).Replace("-","").ToLower());
                    // Verify: uses SHA256 over md5Digest, padding PKCS1
                    return rsa.VerifyData(md5Digest, signature, HashAlgorithmName.SHA256, RSASignaturePadding.Pkcs1);
                }
            }
        } catch (Exception e) {
            Console.WriteLine(e.Message);
            return false;
        }
    }

    public static void HandleRequest(Dictionary<string, object> request) {
        var headers = (Dictionary<string, object>)request["headers"];
        string sigHex = headers.ContainsKey("X-Signature") ? headers["X-Signature"].ToString() : null;
        string bodyJson = request["body"].ToString();
        var body = JsonSerializer.Deserialize<Dictionary<string, object>>(bodyJson);
        string eventUuid = body.ContainsKey("event_uuid") ? body["event_uuid"].ToString() : null;
        if (string.IsNullOrEmpty(sigHex) || string.IsNullOrEmpty(eventUuid) || 
            !VerifySignatureByPublicKey(eventUuid, HexStringToBytes(sigHex), "path/to/public_key.pem")) {
            throw new Exception("Invalid or missing signature");
        }
        // Your data processing logic
        // Example: print out detailed generated data
        Console.WriteLine(body["data"]?.ToString());
    }

    static byte[] HexStringToBytes(string hex) {
        int len = hex.Length;
        byte[] bytes = new byte[len / 2];
        for (int i = 0; i < len; i += 2)
            bytes[i / 2] = Convert.ToByte(hex.Substring(i, 2), 16);
        return bytes;
    }
}
      `.trim(),
    },
  ],
  tts: [
    {
      lang: "javascript",
      label: "Javascript",
      code: `
const axios = require("axios");

const url = "https://api.geminigen.ai/uapi/v1/text-to-speech";
const headers = {
  "Content-Type": "application/json",
  "x-api-key": "your_api_key"
};
const data = {
  model: "tts-1",
  voice_id: "OA001",
  speed: 1,
  input: "Hello world!"
};

axios.post(url, data, { headers })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error.response ? error.response.data : error.message);
  });

      `.trim(),
    },
    {
      lang: "java",
      label: "Java",
      code: `
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class Main {
    public static void main(String[] args) throws Exception {
        String url = "https://api.geminigen.ai/uapi/v1/text-to-speech";
        String json = """
        {
            "model": "tts-1",
            "voice_id": "OA001",
            "speed": 1,
            "input": "Hello world!"
        }
        """;

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(url))
            .header("x-api-key", "your_api_key")
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString(json))
            .build();

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}

      `.trim(),
    },
    {
      lang: "python",
      label: "Python",
      code: `
import requests

url = "https://api.geminigen.ai/uapi/v1/text-to-speech"
headers = {
    "Content-Type": "application/json",
    "x-api-key": "<your api key>"
}
data = {
    "model": "tts-1",
    "voice_id": "OA001",
    "speed": 1,
    "input": "Hello world!"
}

response = requests.post(url, headers=headers, json=data)
print(response.json())
      `.trim(),
    },
    {
      lang: "php",
      label: "PHP",
      code: `
&lt;?php
$url = "https://api.geminigen.ai/uapi/v1/text-to-speech";

$data = [
    "model" => "tts-1",
    "voice_id" => "OA001",
    "speed" => 1,
    "input" => "Hello world!"
];

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "x-api-key: your_api_key",
    "Content-Type: application/json"
]);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
if (curl_errno($ch)) {
    echo "Error: " . curl_error($ch);
} else {
    echo $response;
}
curl_close($ch);



      `.trim(),
    },
    {
      lang: "csharp",
      label: "C#",
      code: `
using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

class Program {
    static async Task Main() {
        var url = "https://api.geminigen.ai/uapi/v1/text-to-speech";
        var json = @"{
            ""model"": ""tts-1"",
            ""voice_id"": ""OA001"",
            ""speed"": 1,
            ""input"": ""Hello world!""
        }";

        using var client = new HttpClient();
        client.DefaultRequestHeaders.Add("x-api-key", "your_api_key");

        var content = new StringContent(json, Encoding.UTF8, "application/json");
        var response = await client.PostAsync(url, content);
        var result = await response.Content.ReadAsStringAsync();

        Console.WriteLine(result);
    }
}
      `.trim(),
    },
  ],
  dts: [
    {
      lang: "javascript",
      label: "Javascript",
      code: `
const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");

const url = "https://api.geminigen.ai/uapi/v1/document-to-speech";

const form = new FormData();
form.append("model", "tts-1");
form.append("voice_id", "OA001");
form.append("speed", "1");
form.append("file", fs.createReadStream("/path/to/your/document.pdf"));
form.append("file_password", "your_password");

axios.post(url, form, {
  headers: {
    "x-api-key": "your_api_key",
    ...form.getHeaders()
  }
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error(error.response ? error.response.data : error.message);
});

      `.trim(),
    },
    {
      lang: "java",
      label: "Java",
      code: `
import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.mime.MultipartEntityBuilder;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import java.io.File;

public class Main {
    public static void main(String[] args) throws Exception {
        String url = "https://api.geminigen.ai/uapi/v1/document-to-speech";

        CloseableHttpClient client = HttpClients.createDefault();
        HttpPost post = new HttpPost(url);
        post.addHeader("x-api-key", "your_api_key");

        HttpEntity entity = MultipartEntityBuilder.create()
            .addTextBody("model", "tts-1")
            .addTextBody("voice_id", "OA001")
            .addTextBody("speed", "1")
            .addBinaryBody("file", new File("/path/to/your/document.pdf"))
            .addTextBody("file_password", "your_password")
            .build();

        post.setEntity(entity);
        CloseableHttpResponse response = client.execute(post);
        String result = EntityUtils.toString(response.getEntity());
        System.out.println(result);

        response.close();
        client.close();
    }
}

      `.trim(),
    },
    {
      lang: "python",
      label: "Python",
      code: `
import requests

url = "https://api.geminigen.ai/uapi/v1/document-to-speech"
headers = {
    "x-api-key": "<your api key>",
    "Content-Type": "multipart/form-data"
}
data = {
    "model": "tts-1",
    "voice_id": "OA001",
    "speed": 1,
    "file": open("/path/to/your/document.pdf", "rb"),
    "file_password": "your_password"
}

response = requests.post(url, headers=headers, files=data)
print(response.json())
      `.trim(),
    },
    {
      lang: "php",
      label: "PHP",
      code: `
&lt;?php
$url = "https://api.geminigen.ai/uapi/v1/document-to-speech";

$data = [
    "model" => "tts-1",
    "voice_id" => "OA001",
    "speed" => "1",
    "file" => new CURLFile("/path/to/your/document.pdf"),
    "file_password" => "your_password"
];

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "x-api-key: your_api_key"
]);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
if (curl_errno($ch)) {
    echo "Error: " . curl_error($ch);
} else {
    echo $response;
}
curl_close($ch);
      `.trim(),
    },
    {
      lang: "csharp",
      label: "C#",
      code: `
using System;
using System.IO;
using System.Net.Http;
using System.Threading.Tasks;

class Program {
    static async Task Main() {
        var url = "https://api.geminigen.ai/uapi/v1/document-to-speech";

        using var client = new HttpClient();
        client.DefaultRequestHeaders.Add("x-api-key", "your_api_key");

        using var form = new MultipartFormDataContent();
        form.Add(new StringContent("tts-1"), "model");
        form.Add(new StringContent("OA001"), "voice_id");
        form.Add(new StringContent("1"), "speed");
        form.Add(new StreamContent(File.OpenRead("/path/to/your/document.pdf")), "file", "document.pdf");
        form.Add(new StringContent("your_password"), "file_password");

        var response = await client.PostAsync(url, form);
        var result = await response.Content.ReadAsStringAsync();

        Console.WriteLine(result);
    }
}
      `.trim(),
    },
  ],
  tts_multi_speaker: [
    {
      lang: "javascript",
      label: "Javascript",
      code: `
const url = "https://api.geminigen.ai/uapi/v1/tts-multi-speaker";
const headers = {
  "Content-Type": "application/json",
  "x-api-key": "<your api key>"
};

const data = {
  voices: ["OA001", "OA002"],
  model_name: "dialogue_model",
  model: "tts-flash",
  speed: 1,
  blocks: [
    { input: "Welcome to our podcast!" },
    { input: "Thank you for having me, I'm excited to be here." }
  ],
  output_format: "mp3",
  custom_prompt: "Speak as podcast hosts with energy and engagement",
  output_channel: "stereo",
  name: "Podcast Interview"
};

fetch(url, {
  method: "POST",
  headers,
  body: JSON.stringify(data)
})
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));

      `.trim(),
    },
    {
      lang: "java",
      label: "Java",
      code: `
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class Main {
    public static void main(String[] args) throws Exception {
        String url = "https://api.geminigen.ai/uapi/v1/tts-multi-speaker";

        // Build JSON bằng code (StringBuilder)
        StringBuilder jsonBuilder = new StringBuilder();
        jsonBuilder.append("{");
        jsonBuilder.append("\"voices\":[\"OA001\",\"OA002\"],");
        jsonBuilder.append("\"model_name\":\"dialogue_model\",");
        jsonBuilder.append("\"model\":\"tts-flash\",");
        jsonBuilder.append("\"speed\":1,");
        jsonBuilder.append("\"blocks\":[");
        jsonBuilder.append("{\"input\":\"Welcome to our podcast!\"},");
        jsonBuilder.append("{\"input\":\"Thank you for having me, I'm excited to be here.\"}");
        jsonBuilder.append("],");
        jsonBuilder.append("\"output_format\":\"mp3\",");
        jsonBuilder.append("\"custom_prompt\":\"Speak as podcast hosts with energy and engagement\",");
        jsonBuilder.append("\"output_channel\":\"stereo\",");
        jsonBuilder.append("\"name\":\"Podcast Interview\"");
        jsonBuilder.append("}");

        String json = jsonBuilder.toString();

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(url))
            .header("x-api-key", "<your api key>")
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString(json))
            .build();

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}


      `.trim(),
    },
    {
      lang: "python",
      label: "Python",
      code: `
import requests

url = "https://api.geminigen.ai/uapi/v1/tts-multi-speaker"
headers = {
    "Content-Type": "application/json",
    "x-api-key": "<your api key>"
}
data = {
    "voices": ["OA001", "OA002"],
    "model_name": "dialogue_model",
    "model": "tts-flash",
    "speed": 1,
    "blocks": [
        {
            "input": "Welcome to our podcast!"
        },
        {
            "input": "Thank you for having me, I'm excited to be here."
        }
    ],
    "output_format": "mp3",
    "custom_prompt": "Speak as podcast hosts with energy and engagement",
    "output_channel": "stereo",
    "name": "Podcast Interview"
}

response = requests.post(url, headers=headers, json=data)
print(response.json())

      `.trim(),
    },
    {
      lang: "php",
      label: "PHP",
      code: `
&lt;?php
$url = "https://api.geminigen.ai/uapi/v1/tts-multi-speaker";

$data = [
    "voices" => ["OA001", "OA002"],
    "model_name" => "dialogue_model",
    "model" => "tts-flash",
    "speed" => 1,
    "blocks" => [
        ["input" => "Welcome to our podcast!"],
        ["input" => "Thank you for having me, I'm excited to be here."]
    ],
    "output_format" => "mp3",
    "custom_prompt" => "Speak as podcast hosts with energy and engagement",
    "output_channel" => "stereo",
    "name" => "Podcast Interview"
];

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "x-api-key: <your api key>"
]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

$response = curl_exec($ch);
if (curl_errno($ch)) {
    echo 'Error: ' . curl_error($ch);
}
curl_close($ch);

echo $response;
      `.trim(),
    },
    {
      lang: "csharp",
      label: "C#",
      code: `
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

class Program {
    static async Task Main(string[] args) {
        var url = "https://api.geminigen.ai/uapi/v1/tts-multi-speaker";
        var client = new HttpClient();

        client.DefaultRequestHeaders.Add("x-api-key", "<your api key>");

        // Build JSON bằng Dictionary
        var data = new Dictionary<string, object> {
            { "voices", new string[] { "OA001", "OA002" } },
            { "model_name", "dialogue_model" },
            { "model", "tts-flash" },
            { "speed", 1 },
            { "blocks", new object[] {
                new Dictionary<string,string>{{"input", "Welcome to our podcast!"}},
                new Dictionary<string,string>{{"input", "Thank you for having me, I'm excited to be here."}}
            }},
            { "output_format", "mp3" },
            { "custom_prompt", "Speak as podcast hosts with energy and engagement" },
            { "output_channel", "stereo" },
            { "name", "Podcast Interview" }
        };

        string json = JsonSerializer.Serialize(data);

        var content = new StringContent(json, Encoding.UTF8, "application/json");
        var response = await client.PostAsync(url, content);
        var responseString = await response.Content.ReadAsStringAsync();

        Console.WriteLine(responseString);
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
      ["img", "vertify_webhook_data", "video", "tts", "dts"].forEach((g) => {
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
document.querySelector("#vertify-webhook-data-tabs-container").innerHTML =
  renderTabs("vertify_webhook_data") + renderContents("vertify_webhook_data");
document.querySelector("#video-tabs-container").innerHTML =
  renderTabs("video") + renderContents("video");
  document.querySelector("#tts-tabs-container").innerHTML =
  renderTabs("tts") + renderContents("tts");
    document.querySelector("#dts-tabs-container").innerHTML =
  renderTabs("dts") + renderContents("dts");
      document.querySelector("#tts-multi-speaker-tabs-container").innerHTML =
  renderTabs("tts_multi_speaker") + renderContents("tts_multi_speaker");
attachTabEvents();
