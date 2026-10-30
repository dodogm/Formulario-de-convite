import { Brand } from "./components/Brand";
import { Invite } from "./components/Invite";


export default function App() {
return(
    <main className="bg-shape-background" >
    <div className="m-auto flex gap-5 p-5 max-w-7xl  ">

        <div className=" sticky  top-5 self-start">
        <Brand/>
        </div>
"
        <div>
        <Invite/>
        </div>
    </div>
    </main>
)
  
}
