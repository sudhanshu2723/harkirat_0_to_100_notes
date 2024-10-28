
import Admin from "@repo/ui/admin";
import { Button } from "@repo/ui/button";


export default function Home() {
  return (
   <div>
    <Admin/>
    <Button  appName="no name">children here</Button>
   </div>
  );
}
