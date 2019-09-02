import {
  GraphQLList
} from 'graphql';

import blogPostType from '../../types/blogPost';
import getProjection from '../../getProjection';
import BlogPostModel from '../../../models/blogPost';

export default {
  type: new GraphQLList(blogPostType),
  args: {},
  resolve(root, args, context, info) {
    const projection = getProjection(info.fieldNodes[0]);

    return BlogPostModel
      .find()
      .select(projection)
      .exec();
  }
};