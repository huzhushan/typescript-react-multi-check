// declare scss
declare module '*.scss' {
  const content: {[key: string]: any}
  export = content
}

// declare enzyme-adapter-react-16
declare module 'enzyme-adapter-react-16'