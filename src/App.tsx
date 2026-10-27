import { Brand } from "./components/Brand";
import { Invite } from "./components/Invite";


export default function App() {
return(
    <main className="bg-shape-background w-full min-h-dvh">
    <div className="m-auto flex gap-5 p-5  max-w-7xl h-200 ">

        <div>
        <Brand/>
        </div>

        <div>
        <Invite/>
        </div>
    </div>
    </main>
)
  
}
