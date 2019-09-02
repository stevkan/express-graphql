import {
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import commentInputType from '../../types/inputComment';
import CommentModel from '../../../models/comment';

export default {
  type: GraphQLBoolean,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(commentInputType)
    }
  },
  async resolve(root, args, context, info) {
    const commentModel = new CommentModel(args.data);
    const newComment = await commentModel.save();

    if (!newComment) {
      throw new Error('Error adding new comment');
    }
    return true;
  }
};