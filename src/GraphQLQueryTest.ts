import axios from 'axios';

async function queryGraphQL() {
    try {
        const response = await axios.post('https://api.example.com/graphql', {
            query: `
                query {
                    // Your GraphQL query goes here
                }
            `,
            variables: {
                // Optional variables for your query
            },
        });

        // Handle the response data
        const data = response.data;
        // Process the data as needed

        console.log(data);
    } catch (error) {
        console.error('GraphQL query failed:', error);
    }
}

queryGraphQL();