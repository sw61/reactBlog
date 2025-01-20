import styled from 'styled-components';

export const H1 = (props) => {
  const { children, className, ...rest } = props;

  return <H1Style {...rest}>{children}</H1Style>;
};

const H1Style = styled.h1``;
