// @types/emotion-styled/index.d.ts

declare module '@emotion/styled' {
  import styled from '@emotion/styled'

  export * from '@emotion/styled/types/css-prop'

  interface StyledTags {
    div: any
    // 필요한 다른 HTML 태그들에 대한 정의 추가
  }

  const styled: styled & StyledTags

  export default styled
}
