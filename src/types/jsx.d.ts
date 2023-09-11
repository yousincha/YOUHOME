// src/types/jsx.d.ts

import React from 'react'

declare module 'react' {
  // 아래와 같이 사용하는 모든 컴포넌트에 대한 타입 지정
  interface HTMLProps<T> extends React.HTMLProps<T> {}
}

// JSX 요소에 대한 타입 선언 추가
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any
    }
  }
}
