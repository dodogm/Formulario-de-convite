
import logoSvg from "../../public/Logo.svg" 
import bgPng from "../assets/Background.png"

export function Brand() {
    return(
        <aside className="h-182 w-100 rounded-xl ">
            
          
        <div className="h-full w-full bg-contain bg-center bg-no-repeat  p-6  "
          style={{ backgroundImage: `url(${bgPng})` }}
          >
              <div>
                 <img className="h-[45.85px] w-12 mb-4" 
            src={logoSvg}
             alt="Ilustração estilizada de um lançador de confetes" 
             />

             <h1 className="text-pink font-logo text-logo textlogo"> Festivite  </h1> 
             <p className="text-body-md text-text-heading">Crie um convite digital para o seu evento</p>
            </div>
        </div>
        </aside>
    )
}