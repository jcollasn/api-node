'use strict';
const axios = require('axios');
const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

async function getStarWarsCharacter(characterId) {
  try {
    const swapi = process.env.SERVICE;
    const response = await axios.get(`https://${swapi}/people/${characterId}/`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener información del personaje de swapi:', error);
    throw error;
  }
}


module.exports.get = async (event) => {
  console.log(event)
  try {
    const params = {
      TableName: 'people',
      Key: {
        id: event.pathParameters.id
      }
    };

    const data = await dynamodb.get(params).promise();

    if (!data.Item) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: 'El item no existe' })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(data.Item)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error })
    };
  }
};

module.exports.create = async (event) => {
  const body = JSON.parse(event.body)
  let response = {} 
  await getStarWarsCharacter(body.idPeople)
  .then(character => {
    response = character
  })
  .catch(error => {
    console.error('Error:', error);
  });
  console.log(response)
  const params = {
    TableName: 'people',
    Item: {
      id: body.idPeople.toString(),
      nombre: response.name,
      altura: response.height,
      peso: response.mass,
      color_pelo: response.hair_color,
      color_piel: response.skin_color,
      color_ojos: response.eye_color,
      anio_nacimiento: response.birth_year,
      genero: response.gender,
    }
  };

  await dynamodb.put(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({response:`Se almaceno el item ${body.idPeople}`}),
  };
};
