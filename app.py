from flask import Flask, render_template
import crawling

app = Flask(__name__)


@app.route('/')
def open():
    return render_template("index.html")

@app.route('/about')
def about():
    return "About Our Service"

@app.route('/newYearPlan')
def new_year_plan():
    return render_template("newYearPlan.html")

@app.route('/ott')
def ott():
    return render_template("ott.html")

@app.route('/sports')
def sports():
    return render_template("sports.html")

@app.route('/pantoneColor')
def pantone_color():
    return render_template("pantoneColor.html")


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)