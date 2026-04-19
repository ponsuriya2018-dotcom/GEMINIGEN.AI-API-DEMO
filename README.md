# GenminiGen AI
<img src="assets/images/logo.png" alt="GenminiGen AI logo" width="824" />

Geminigen.ai offers AI-generated images and videos from text at a more affordable price compared to other applications on the market. In addition to image and video generation from text, we also provide text-to-speech services and text-based conversation generation.

🌐 Our Website: https://geminigen.ai/


## 🚀 Why GeminiGen AI?
- 🤖 Advanced AI: Use cutting-edge AI technology to generate high-quality content with amazing accuracy.

- ⚡ Fast Generation: Transform your ideas into content in just seconds. No long waiting times.

- 🎨 Unlimited Creativity: Create content in any style, from animation to realistic, from artistic to professional.

- 🖼️ High Quality: Output with high resolution, smooth motion, and sharp details.

- 🤝 Easy Collaboration: Share and collaborate on projects with your team easily.

- 📤 Multi-Format Export: Export content in various formats suitable for all platforms and purposes.


## 📚 Documentation
We provide APIs to generate images/videos. Please follow the instructions below.
- To try out the photo and video generate APIs visit: <a href="https://ainnate-geminigen.github.io/GEMINIGEN.AI-API-DEMO/" target="_blank">Getting started</a>
- Use APIs with the programming languages ​​you use. See how to <a href="https://ainnate-geminigen.github.io/GEMINIGEN.AI-API-DEMO/demo.html" target="_blank">integrate API with your language</a>.


## 👋 Contributing
GeminiGen AI always looking for new contributions. From documentation, contributing to our  reporting a bug; any contribution is valued and welcome. Are you interested in contributing to GeminiGen AI? Read our guide and get started with GeminiGen AI now!
from flask import Flask, render_template, request
import google.generativeai as genai

app = Flask(__name__)

genai.configure(api_key="ใส่ API KEY ตรงนี้")

model = genai.GenerativeModel("gemini-1.5-flash")

@app.route("/", methods=["GET", "POST"])
def index():
    result = ""

    if request.method == "POST":
        name = request.form["name"]
        detail = request.form["detail"]
        target = request.form["target"]

        prompt = f"""
คุณคือผู้เชี่ยวชาญขายของ TikTok

สินค้า: {name}
จุดเด่น: {detail}
กลุ่มลูกค้า: {target}

สร้าง:
1.สคริปต์ขาย 15 วินาที
2.Hook เปิดคลิป
3.Caption
4.Hashtag
5.Prompt ทำคลิป AI
"""

        response = model.generate_content(prompt)
        result = response.text

    return render_template("index.html", result=result)

app.run(debug=True)

