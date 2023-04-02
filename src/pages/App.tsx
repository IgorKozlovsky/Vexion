import AboutApp from 'src/modules/AboutApp'
import Banner from 'src/modules/Banner'
import Footer from 'src/modules/Footer'
import Header from 'src/modules/Header'
import Internet from 'src/modules/Internet'
import Join from 'src/modules/Join'
import Partners from 'src/modules/Partners'
import Pricing from 'src/modules/Pricing'
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
        <Internet />
        <Join />
        <Pricing />
      </Main>
      <Footer />
    </Wrapper>
  )
}
export default App
