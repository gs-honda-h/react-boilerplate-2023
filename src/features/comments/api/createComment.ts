import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';

import { Comment } from '../types';

export type CreateCommentDTO = {
  data: {
    body: string;
  };
};

export const createComment = ({ data }: CreateCommentDTO): Promise<Comment> => {
  return axios.post('/comments', data);
};

type UseCreateCommentOptions = {
  config?: MutationConfig<typeof createComment>;
};

export const useCreateComment = ({ config }: UseCreateCommentOptions) => {
  return useMutation({
    onMutate: async (newComment) => {
      await queryClient.cancelQueries(['comments']);

      const previousComments = queryClient.getQueryData<Comment[]>(['comments']);

      queryClient.setQueryData(['comments'], [...(previousComments || []), newComment.data]);

      return { previousComments };
    },
    onError: (_, __, context: any) => {
      if (context?.previousComments) {
        queryClient.setQueryData(['comments'], context.previousComments);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['comments']);
    },
    ...config,
    mutationFn: createComment,
  });
};
