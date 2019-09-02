import {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';
import { Types } from 'mongoose';

import blogPostType from '../../types/blogPost';
import getProjection from '../../getProjection';
import BlogPostModel from '../../../models/blogPost';

export default {
  type: blogPostType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, args, context, info) {
    const projection = getProjection(info.fieldNodes[0]);

    return BlogPostModel
      .findById(args.id)
      .select(projection)
      .exec();
  }
};