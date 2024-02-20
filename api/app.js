import { gql, request } from 'graphql-request';
import express from 'express';

const app = express();
const PORT = 5000;
const GRAPHQL_API_URL = 'https://api.hackthenorth.com/v3/graphql'; 

// Define a route for handling GraphQL requests
app.post('/graphql', async (req, res) => {
  try {
    const query = gql`
      query {
        sampleEvents {
          id
          name
          event_type
          permission
          start_time
          end_time
          description
          speakers {
            name
          }
          public_url
          private_url
          related_events
        }
      }
    `
    const data = await request(GRAPHQL_API_URL, query);
    res.json(data);
  } catch (error) {
    console.error('GraphQL request error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});