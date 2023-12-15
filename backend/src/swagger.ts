import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Your API Title',
      version: '1.0.0',
      description: 'Description of your API',
    },
  },
  apis: ['./src/routers/*.ts'], // Update path to your router files
};

const specs = swaggerJsdoc(options);

export default specs;