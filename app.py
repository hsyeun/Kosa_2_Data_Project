from flask import Flask, render_template
import crawling

app = Flask(__name__)


@app.route('/')
def open():
    return render_template("index.html")

@app.route('/about')
def about():
    return "About Our Service"

# @app.route('/newYearPlan')
# def new():
#     return render_template("newYearPlan.html")


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)