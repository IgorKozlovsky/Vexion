import styled from '@emotion/styled'

const SomeText = styled('div')(({ theme }) => ({ color: theme.colors.subText }))

export function App() {
  return <SomeText>Hello</SomeText>
}
