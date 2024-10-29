import React from "react";

export interface PageProps {
  title: string;
  content: string;
}
const Page: React.FC<PageProps> = ({ title, content }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>{content}</div>
    </div>
  );
};

export default Page;
