from datetime import datetime

class Poster:
    def __init__(self, name: str,  msg: str, location: str, date : datetime):
        self.name = name
        self.msg = msg
        self.location = location  
        self.date = date
        