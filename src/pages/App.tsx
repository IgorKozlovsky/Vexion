import AboutApp from 'src/modules/AboutApp'
import Banner from 'src/modules/Banner'
import Footer from 'src/modules/Footer'
import Header from 'src/modules/Header'
import Join from 'src/modules/Join'
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
        <AboutApp />
        <Join />
      </Main>
      <Footer />
    </Wrapper>
  )
}
export default App
