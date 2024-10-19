import { useRecoilValue } from "recoil";
import { jobsCountAtom, messagingCountAtom, networkCountAtom, notificationCountAtom, totalNotifications } from "./atom";


function App() {
   const network=useRecoilValue(networkCountAtom);
   const jobs=useRecoilValue(jobsCountAtom);
   const notification=useRecoilValue(notificationCountAtom);
   const messaging=useRecoilValue(messagingCountAtom);
   const notifications=useRecoilValue(totalNotifications);
   return (
    <>
    <div>Network {network}</div>
    <div>Jobs {jobs}</div>
    <div>notification {notification}</div>
    <div>messaging {messaging}</div>
    <div>Me {notifications}</div>
    </>
   )
}

export default App;
