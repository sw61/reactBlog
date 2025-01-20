import styled from 'styled-components';

export const BlockQuote = (props) => {
  const { children, className, ...rest } = props;

  return <QuoteText {...rest}>{children}</QuoteText>;
};

const QuoteText = styled.blockquote`
  border-left: 4px solid #e5e7eb;
  padding-left: 25px;
  margin-left: 0px;
`;
