import { H1 } from './H1';
import { CodeBlock } from './CodeBlock';
import { BlockQuote } from './BlockQuote';

export const MdxComponents = {
  h1: H1,
  code: CodeBlock,
  blockquote: BlockQuote,
};

// import 시킬 때 줄 수가 길어지면 가독성이 떨어져 이 방식으로 한번에 import 시킴
