type CommentProps = {
  children: React.ReactNode;
};

export const Comment = ({ children }: CommentProps) => {
  return <div className="my-2 border-b border-slate-900/10">{children}</div>;
};
