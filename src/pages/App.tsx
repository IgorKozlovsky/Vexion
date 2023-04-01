import Banner from 'src/modules/Banner'
import Footer from 'src/modules/Footer'
import Header from 'src/modules/Header'
import Partners from 'src/modules/Partners'
import Main from 'src/ui/Main'
import Wrapper from 'src/ui/Wrapper'

const App = (): JSX.Element => {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Banner />
        <Partners />
      </Main>
      <Footer />
    </Wrapper>
  )
}
export default App
