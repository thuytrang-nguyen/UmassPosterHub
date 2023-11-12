import pandas as pd

class Db(object):
    def __init__(self, file_path: str) -> None:
        self.ids = set()
        self.db = pd.read_csv(file_path)
        if len(self.db) == 0:
            default_columns = ['ID', 'Name', 'Date', 'Label']
            self.db = pd.DataFrame(columns=default_columns)
        self.ids = set()
    
    def get(self, id: int):
        if id not in self.ids:
            return
        return[self.db['ID'] == id]
    
    def get_all(self):
        pass


    def upload(self, object):
        # New row data
        self.ids.add(len(self.ids) + 1)
        
        new_row = {'ID': len(self.ids), 'Name': object.name, 'Date': object.date, 'Label' : object.label}


        # Use append to insert the new row at the end of the DataFrame
        self.db = self.db.append(new_row, ignore_index=True)
            