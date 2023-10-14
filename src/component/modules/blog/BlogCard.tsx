// Artical Model
// auther
// title
// thumbnail or main image
// images for any discription images
// discription
// views
// category
// date
// id
// pubish
// helpful

import TopArticalCard from './TopArticalCard';
import TopSmallArticalCard from './TopSmallArticalCard';

const articalComponents = {
  top: TopArticalCard,
  topSmall: TopSmallArticalCard,
};

interface BlogCardProps {
  type: keyof typeof articalComponents; // this line the same of union type "top" | "topSmall"
}

const BlogCard = (props: BlogCardProps) => {
  const { type } = props;
  const ComponentToRender = articalComponents[type];

  return <ComponentToRender />;
};

export default BlogCard;
