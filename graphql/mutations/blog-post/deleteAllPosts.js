import {
  GraphQLBoolean
} from 'graphql';

import BlogPostModel from '../../../models/blogPost';

export default {
  type: GraphQLBoolean,
  resolve(root, args, context, info) {
    return BlogPostModel
      .deleteMany({})
      .exec();
  }
};
