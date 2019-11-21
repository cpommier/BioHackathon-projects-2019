import os

from fastapi import FastAPI
from pydantic import BaseModel
from web_server.neo4j_wrapper import execute_cypher, test, get_properties, execute_cypher_simple, execute_cypher_update

class Query(BaseModel):
    q: list = []

test()

app = FastAPI()

@app.get('/api/v1/property')
def get_property():
    return get_properties()


@app.get('/api/v1/doi')
def doi(doi: str = None):
    res = execute_cypher_simple(doi)
    return res


@app.post('/api/v1/query')
def query(q: Query):
    res = execute_cypher(q.q)
    return res


@app.post('/api/v1/update')
def update(id: str = None, score: int = 0):
    res = execute_cypher_update(id, score)
    return res


#if __name__ == '__main__':
#    host = os.environ.get('FLASK_HOST', '127.0.0.1')
#    app.run(host=host, debug=True)
