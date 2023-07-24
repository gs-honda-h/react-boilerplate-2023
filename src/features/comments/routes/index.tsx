import { Navigate, Route, Routes } from 'react-router-dom';

import { Comments } from '../components/Comments';
import { CreateComment } from '../components/CreateComment';

export const CommentsRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Comments />} />
      <Route path="/add" element={<CreateComment />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
