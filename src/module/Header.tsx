import HeaderCategory from "./HeaderCategory"
import HeaderMain from "./HeaderMain"
import HeaderTop from "./HeaderTop"
import HeaderSearchMobile from "./HeaderSearchMobile"
import CategoryNestedList from "./HeaderNestedList"


const Header = () => {
  return (
    <header className="mb-[27px] sm:mb-[20px] relative">
      <HeaderTop/>
      <HeaderMain/>
      <HeaderCategory/>
      <HeaderSearchMobile/>
      <CategoryNestedList/>
    </header>
  )
}

export default Header
