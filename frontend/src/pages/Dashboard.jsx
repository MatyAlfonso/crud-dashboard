import { Navbar } from "../components/Navbar";
import { GiveawayList } from "../components/GiveawayList";
import { CreateGiveawayButton } from "../components/CreateGiveawayButton";

export const Dashboard = () => {
  return (
    <div className='bg-sky-400 h-screen'>
      <Navbar />
      <CreateGiveawayButton />
      <GiveawayList />
    </div>
  )
}
