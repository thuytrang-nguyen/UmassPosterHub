from fastapi import FastAPI
from controller import Controller
import logging

logging.basicConfig(format='%(levelname)s:%(message)s', level=logging.DEBUG)

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


@app.get("/get/")
def get_post():
    try:
        posters = controller.get_all()
        return {"message" : 200, "data" : posters}
    except Exception as e:
        logging.debug(e)
        return {"message" : 404}
    

@app.get("/get/{id}")
def get_post(id : int):
    return {}
