import type { Blog } from '@/apps/interface/Blog';
import RequestHandler from '@/apps/server/requestHandler';

import MiniCardBlog from './MiniCardBlog';

async function listBlog() {
  const res = await RequestHandler('blog', 'GET');
  return res;
}
const MiniCardWrapper = async () => {
  const blogData: Blog[] = await listBlog();
  return (
    <div className="flex w-full flex-wrap gap-3 ">
      {blogData.map((blog) => (
        // eslint-disable-next-line no-underscore-dangle
        <MiniCardBlog key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default MiniCardWrapper;
