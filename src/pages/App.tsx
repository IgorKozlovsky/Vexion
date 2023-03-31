import Footer from 'src/modules/Footer'
import Header from 'src/modules/Header'
import Main from 'src/ui/Main'
import Wrapper from 'src/ui/Wrapper'

const App = (): JSX.Element => {
  return (
    <Wrapper>
      <Header />
      <Main>a</Main>
      <Footer />
    </Wrapper>
  )
}
export default App