import { useContext } from "react";
import { submissions } from "../../../constants/subimissions";

import { LanguageContext } from "../../../contexts/LanguageContext";


export function EixoCard () {
  const { language } = useContext(LanguageContext);
  const submissionsLanguage = submissions[language] || submissions.pt;

  return (
    <div className="flex flex-col items-start w-full mb-20">
      {submissionsLanguage.map(({eixo, temas}) => (
        <div key={eixo} className="w-full flex flex-col items-start justify-start gap-4 mt-8">
          <div className="w-auto p-6 bg-[#477599] rounded-2xl">
            <h1 className="text-white text-2xl font-bold">{eixo}</h1>
          </div>
          <div className="w-full flex flex-col gap-4 my-2">
            {temas.map(item => (
              <div className="p-4 bg-[#a7bed0] rounded-2xl">
                <h2 className="text-[#345772] font-bold">{item}</h2>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}