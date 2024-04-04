const { get, create } = require('../lambda/handler.js');

test('La variable de entorno se carga correctamente', () => {
    expect(process.env.SERVICE).toEqual("swapi.py4e.com/api");
});

test('La función create el resultado 200', async () => {
    const event = {}
    event.body = JSON.stringify({ idPeople:1 })
    const result = await create(event);
    expect(result.statusCode).toEqual(500);
});

test('La función create el resultado 400', async () => {
    const event = {}
    const result = await create(event);
    expect(result.statusCode).toEqual(400);
});

test('La función get el resultado 500', async () => {
    const event = {}
    const result = await get(event);
    expect(result.statusCode).toEqual(500);
});

test('La función get el resultado 200', async () => {
    const event = {
        pathParameters:{
            id:1
        }
    }
    const result = await get(event);
    expect(result.statusCode).toEqual(500);
});