import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { LoadingFallback } from 'shared/ui/loading-fallback';
import { Navbar } from 'widgets/navbar';

export const MainLayout = () => {
  return (
    <div className='p-4'>
      <Navbar />
      <main>
        <Suspense fallback={<LoadingFallback />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
