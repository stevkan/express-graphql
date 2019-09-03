import {
  GraphQLBoolean,
  GraphQLList,
  GraphQLString
} from 'graphql';

import blogPostType from '../../types/blogPost';
import BlogPostModel from '../../../models/blogPost';

export default {
  type: GraphQLBoolean,
  resolve(root, args, context, info) {
    return BlogPostModel
      .deleteMany()
      .exec(response => {
        return response
      });
  }
};
