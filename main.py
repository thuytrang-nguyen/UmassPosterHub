from fastapi import FastAPI
from controller import Controller

app = FastAPI()

controller = Controller()

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post("/upload/")
async def upload(object):
    """
    Upload to db with json object
    """
    controller.upload(object)
    return {"message": "Hello World"}


@app.get("/get/{id}")
def get_post(id : int):
    return {}
