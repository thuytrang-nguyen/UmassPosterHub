from models.poster import Poster
import jsonpickle
import json
from db import Db

class Controller(object):
    def __init__(self) -> None:
        self.db = Db

    def upload_poster(self, poster: json):
        new_poster = jsonpickle.decode(poster)
        #TODO: upload to csv database
        try:
            self.db.upload(poster)
            print(new_poster)
        except Exception as e:
            print(e)
    
    def get_all(self):
        posters = self.db.get()
        return posters
    
    