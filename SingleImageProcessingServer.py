from flask import *
from PIL import Image

app = Flask(__name__)

@app.route("/image", methods=["POST"])
def image_process():
    original_image = request.files["image"]
    original_image = Image.open(original_image)
    original_image.show()

if __name__ == "__main__":
    app.run(host="0.0.0.0")

    