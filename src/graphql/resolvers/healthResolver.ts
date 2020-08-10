import { IResolvers } from 'apollo-server-express';

const healthResolver: IResolvers = {
  Query: {
    check(rootValue, args, context, info) {
      console.log(rootValue);
      console.log('---------------------');
      console.log(args);
      console.log('---------------------');
      console.log(context);
      console.log('---------------------');
      console.log(info);
      console.log('---------------------');
      return 'Apollo Server is Running successfully';
    },
  },
};

export default healthResolver;
