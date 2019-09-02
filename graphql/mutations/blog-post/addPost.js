import {
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import blogPostInputType from '../../types/inputBlogPost';
import BlogPostModel from '../../../models/blogPost';

export default {
  type: GraphQLBoolean,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(blogPostInputType)
    }
  },
  async resolve(root, args, context, info) {
    const blogPostModel = new BlogPostModel(args.data);
    const newBlogPost = await blogPostModel.save();

    if (!newBlogPost) {
      throw new Error('Error adding new blog post');
    }
    return true;
  }
};