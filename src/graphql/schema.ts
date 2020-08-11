import { makeExecutableSchema, gql, IResolvers, mergeSchemas } from 'apollo-server-express';
import { healthTypeDef } from './typeDef';
import { healthResolver } from './resolvers';

interface BuildSchemasParams {
  typeDefs: ReturnType<typeof gql>;
  resolvers: IResolvers;
}

const createSchema = (params: BuildSchemasParams[]) => {
  const serverTypeDef = gql`
    type Query {
      _version: String
    }
  `;
  const serverResolver: IResolvers = {
    Query: {
      _version: () => '1.0',
    },
  };
  const serverSchema = makeExecutableSchema({
    typeDefs: serverTypeDef,
    resolvers: serverResolver,
  });
  const schemaList = params.map(makeExecutableSchema);
  return mergeSchemas({
    schemas: [serverSchema, ...schemaList],
  });
};

export default createSchema([{ typeDefs: healthTypeDef, resolvers: healthResolver }]);
