import { NavigationItem } from "../atoms/NavigationItem"
import { navigationStyles as styles } from "./navigation.css"

export const Navigation = () => {
  return (
    <ul className={styles.container}>
      <NavigationItem>ABOUT</NavigationItem>
      <span>/</span>
      <NavigationItem>SKILL</NavigationItem>
      <span>/</span>
      <NavigationItem>WORKS</NavigationItem>
      <span>/</span>
      <NavigationItem>CONTACT</NavigationItem>
    </ul>
  )
}