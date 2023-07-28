import { Card } from '@/components/Elements';

import { Comment } from './Comment';

export const Comments = () => {
  const comments = [
    { id: 1, body: 'test' },
    { id: 2, body: 'test2' },
    { id: 3, body: 'test3' },
    { id: 4, body: 'test4' },
  ];
  return (
    <Card>
      <div>
        <div className="mb-4">
          <h3 className="text-xl font-bold">Comments:</h3>
          <div>
            {comments.map((comment) => (
              <Comment key={comment.id}>{comment.body}</Comment>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};
