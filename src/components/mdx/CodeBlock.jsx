import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const CodeBlock = (props) => {
  const { children, className, ...rest } = props;
  const match = /language-(\w+)/.exec(className || '');

  return match ? (
    <SyntaxHighlighter
      {...rest}
      PreTag="div"
      children={String(children).replace(/\n$/, '')}
      language={match[1]}
      style={dracula}
    />
  ) : (
    <code {...rest} className={className}>
      {children}
    </code>
  );
};
