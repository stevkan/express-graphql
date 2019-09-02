import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import commentType from '../../types/comment';
import getProjection from '../../getProjection';
import CommentModel from '../../../models/comment';

export default {
  type: new GraphQLList(commentType),
  args: {
    postId: {
      name: 'postId',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, args, context, info) {
    const projection = getProjection(info.fieldNodes[0]);

    return CommentModel
      .find({
        postId: args.postId
      })
      .select(projection)
      .exec();
  }
};
