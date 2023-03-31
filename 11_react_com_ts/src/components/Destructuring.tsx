import React from 'react';

interface Props {
  title: string;
  content: string;
  commentsQty: number;
  tags: string[];
  category: Category;
}
// 7 - enum

// we export it so that we can use these values
// where the component is being used
export enum Category {
  JS = 'javascript',
  TS = 'typescript',
}

const Destructuring = ({ title, content, commentsQty, tags, category }: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Número de comentários: {commentsQty}</p>
      <div>
        {tags.map((tag) => (
          <span>#{tag} </span>
        ))}
      </div>
      <h4>{category}</h4>
    </div>
  );
};

export default Destructuring;
