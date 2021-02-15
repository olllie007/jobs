#for flask and restful api
from flask import Flask, session
from flask_restful import Api, Resource
#for database
import sqlite3
app = Flask(__name__)
api = Api(app)
connection = sqlite3.connect('jobs.db')
cursor = connection.cursor()

class new(Resource): #new job post
    def post(self, title, body):
        connection = sqlite3.connect('jobs.db')
        cursor = connection.cursor()
        sql = 'INSERT INTO jobs VALUES(?, ?)'
    
        cursor.execute(sql, [title, body])
        connection.commit()
class get_items(Resource): #search for job post
    def post(self):
        connection = sqlite3.connect('jobs.db')
        cursor = connection.cursor()
        sql = "SELECT * FROM jobs"
        cursor.execute(sql)
        items = cursor.fetchall()
        return items
api.add_resource(get_items, '/get')
api.add_resource(new, '/new/<string:title>/<string:body>')
if __name__  == "__main__":
    app.run(use_reloader=False, debug=True)
