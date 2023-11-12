class Db(object):
    def __init__(self, file: str) -> None:
        self.ids = set()
        self.db_url = ""
        
    