import * as z from 'zod';

import { Button, Card } from '@/components/Elements';
import { Form, TextAreaField } from '@/components/Form';

import { CreateCommentDTO, useCreateComment } from '../api/createComment';

const schema = z.object({
  body: z.string().min(1, 'Required'),
});

export const CreateComment = () => {
  const createCommentMutation = useCreateComment({});
  return (
    <>
      <Card>
        <Form<CreateCommentDTO['data'], typeof schema>
          id="create-comment"
          onSubmit={async (values) => {
            await createCommentMutation.mutateAsync({
              data: {
                body: values.body,
              },
            });
          }}
          schema={schema}
        >
          {({ register, formState }) => (
            <>
              <TextAreaField
                label="Body"
                error={formState.errors['body']}
                registration={register('body')}
              />
              <Button type="submit">送信</Button>
            </>
          )}
        </Form>
      </Card>
    </>
  );
};
