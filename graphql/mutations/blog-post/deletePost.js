import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import blogPostType from '../../types/blogPost';
import getProjection from '../../getProjection';
import BlogPostModel from '../../../models/blogPost';

export default {
  type: blogPostType,
  args: {
    _id: {
      name: '_id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  async resolve(root, args, context, info) {
    const projection = getProjection(info.fieldNodes[0]);
    const deletedBlogPost = await BlogPostModel
      .findByIdAndDelete(args._id, {
        select: projection
      })
      .exec();

    if (!deletedBlogPost) {
      throw new Error('Error removing blog post');
    }

    return deletedBlogPost;
  }
};
