type ClassName = {
  class: string;
  properties?: string[];
  input: boolean;
};

type CodeSnippets = {
  classNames: ClassName[];
  properties?: string[];
  expected: string;
};

export const codeSnippets: CodeSnippets[] = [
  {
    classNames: [
      {
        class: 'canvas',
        properties: [],
        input: true
      }
    ],
    expected: 'position: relative;'
  },
  {
    classNames: [
      {
        class: 'canvas',
        properties: ['position: relative;'],
        input: false
      },
      {
        class: 'grass',
        properties: [],
        input: true
      }
    ],
    expected: 'position: fixed;'
  },
  {
    classNames: [
      {
        class: 'canvas',
        properties: ['position: relative;', 'overflow: scroll;'],
        input: false
      },
      {
        class: 'tree',
        properties: ['height: 110%'],
        input: false
      },
      {
        class: 'grass',
        properties: ['position: fixed;', 'bottom: 30px;'],
        input: false
      }
    ],
    expected: 'position: fixed;'
  }
];
