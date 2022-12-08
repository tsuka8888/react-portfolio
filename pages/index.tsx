import { HomeContent } from "../organisms/HomeContent";
import { Navigation } from "../organisms/Navigation";
import { HomeTemplate } from "../templates/HomeTemplate";

export default function Home() {
  return (
    <HomeTemplate>
      <HomeContent />
    </HomeTemplate>
  )
}
