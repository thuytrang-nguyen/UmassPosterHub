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

        print(new_poster)
    
    