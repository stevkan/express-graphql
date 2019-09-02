import {
  GraphQLBoolean
} from 'graphql';

import CommentModel from '../../../models/comment';

export default {
  type: GraphQLBoolean,
  resolve(root, args, context, info) {
    return CommentModel
      .deleteMany()
      .exec();
  }
};