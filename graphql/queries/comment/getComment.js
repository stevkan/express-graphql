import {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';
import { Types } from 'mongoose';

import commentType from '../../types/comment';
import getProjection from '../../getProjection';
import CommentModel from '../../../models/comment';

export default {
  type: commentType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, args, context, info) {
    const projection = getProjection(info.fieldNodes[0]);

    return CommentModel
      .findById(args.id)
      .select(projection)
      .exec();
  }
};