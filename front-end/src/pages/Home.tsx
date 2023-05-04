import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Wilders from "../components/Wilders/Wilders"
import AddWilder from "../components/AddWilder/AddWilder"
import { WildersProvider } from "../context/WildersProvider"

const Home = () => {
   return (
      <WildersProvider>
         <Header />
         <AddWilder />
         <Wilders />
         <Footer />
      </WildersProvider>
   )
}
export default Home
