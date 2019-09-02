import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import commentType from '../../types/comment';
import getProjection from '../../getProjection';
import CommentModel from '../../../models/comment';

export default {
  type: commentType,
  args: {
    _id: {
      name: '_id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  async resolve(root, args, context, info) {
    const projection = getProjection(info.fieldNodes[0]);
    const removedComment = await CommentModel
      .findByIdAndRemove(args._id, {
        select: projection
      })
      .exec();

    if (!removedComment) {
      throw new Error('Error removing blog post');
    }

    return removedComment;
  }
};