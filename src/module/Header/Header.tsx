import HeaderCategory from "./HeaderCategory"
import HeaderMain from "./HeaderMain"
import HeaderTop from "./HeaderTop"
import HeaderSearchMobile from "./HeaderSearchMobile"
import CategoryNestedList from "./HeaderNestedList"

const Header = () => {
  return (
    <header className="sticky top-0 z-[999] bg-white pb-[27px]"> 
      <HeaderTop/>
      <HeaderMain/>
      <HeaderCategory/>
      <HeaderSearchMobile/>
      <CategoryNestedList/>
    </header>
  )
}

export default Header