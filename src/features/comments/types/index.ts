export type BaseEntity = {
  id: string;
  createdAt: number;
};

export type Comment = {
  body: string;
  authorId: string;
  discussionId: string;
} & BaseEntity;
