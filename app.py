from flask import Flask, render_template
import requests

app = Flask(__name__)


@app.route("/")
def home():
    try:
        response = requests.get("http://api.quotable.io/random")
        data = response.json()
        quote = data["content"]
        author = data["author"]
    except:
        quote = "Could not fetch quote at this moment."
        author = "Unknown"
    return render_template("index.html", quote=quote, author=author)


@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/feedback")
def feedback():
    return render_template("feedback.html")


if __name__ == "__main__":
    app.run(debug=True)
