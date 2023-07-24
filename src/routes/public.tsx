import { lazyImport } from '@/lib/lazyImport';

const { CommentsRoutes } = lazyImport(
  () => import('@/features/comments/routes/CommentsRoutes'),
  'CommentsRoutes'
);

export const publicRoutes = [
  {
    path: '/comments/*',
    element: <CommentsRoutes />,
  },
];
