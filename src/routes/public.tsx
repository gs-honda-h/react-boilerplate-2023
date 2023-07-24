import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Spinner } from '@/components/Elements';
import { MainLayout } from '@/components/Layout';
import { lazyImport } from '@/lib/lazyImport';

const { CommentsRoutes } = lazyImport(
  () => import('@/features/comments/routes/'),
  'CommentsRoutes'
);

// eslint-disable-next-line react-refresh/only-export-components
const PublicOutlet = () => {
  return (
    <MainLayout>
      <Suspense
        fallback={
          <div className="h-full w-full flex items-center justify-center">
            <Spinner size="xl" />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};

export const publicRoutes = [
  {
    path: '/',
    element: <PublicOutlet />,
    children: [{ path: '/comments/*', element: <CommentsRoutes /> }],
  },
];
