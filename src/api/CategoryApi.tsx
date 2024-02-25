import { GraphQLClient, gql } from 'graphql-request'
import { Category } from "./Types";

const client = new GraphQLClient('http://localhost:8080/graphql')

async function createCategory(name: string): Promise<Category> {
    const query = `
     mutation MyMutation { 
        createCategory(name: "${name}") {
             id 
             name 
            } 
        } 
    `;

    const data = await client.request(query);
    debugger;
    return (data as Category);
}

export { createCategory };

