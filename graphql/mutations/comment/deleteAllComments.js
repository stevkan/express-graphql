import {
  GraphQLBoolean,
  GraphQLList
} from 'graphql';

import blogPostType from '../../types/comment';
import CommentModel from '../../../models/comment';

export default {
  type: GraphQLBoolean,
  resolve(root, args, context, info) {
    return CommentModel
      .deleteMany()
      .exec(response => {
        return response
      });
  }
};