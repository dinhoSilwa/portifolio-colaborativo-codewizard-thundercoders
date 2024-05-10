import { useState } from "react"
import { BiMenu } from "react-icons/bi"
import { BsGithub, BsUiChecksGrid } from "react-icons/bs"
import { CgClose } from "react-icons/cg"
import { DiReact } from "react-icons/di"
import { LiaPeopleCarrySolid } from "react-icons/lia"
import { PiProjectorScreen } from "react-icons/pi"
import { SiTailwindcss, SiTypescript, SiVite } from "react-icons/si"
import { TbBrandLinkedin, TbUsersGroup } from "react-icons/tb"

export default function Hero(){

  const [isopen, setisopen] = useState(false);
  return(
    <>
    <main className="flex flex-col border gap-[32px]">
      <nav className="flex justify-between px-4 h-32 items-center">

        <button className="flex gap-2 items-center bg-primary-button px-6 rounded-[16px] py-4 w-28 text-base font-bold">
          <BsGithub /><span>Github</span></button>
        {
          !isopen ? <BiMenu size={40} color="white" onClick={()=>setisopen(!isopen)} className="icone-menu-mobile-menu"/>
         : <CgClose size={40} color="white" onClick={()=>setisopen(!isopen)} className="icone-menu-mobile-x"/>
  
        }
        <ul className={!isopen ? 'top-[110%] absolute menu-mobile' : `menu-mobile w-screen bg-dark-color-second flex flex-col justify-start bottom-0 absolute left-0 h-[80%] rounded-2xl pt-10`}>
          <li className=" w-full h-20 flex items-center px-6 rounded-sm text-[18px] font-second-title-font text-light-color hover:bg-dark-color "><a className="flex gap-2 items-center" ><PiProjectorScreen />Sobre</a></li>
          <li className=" w-full h-20 flex items-center px-6 rounded-sm text-[18px] font-second-title-font text-light-color hover:bg-dark-color "><a className="flex gap-2 items-center" ><LiaPeopleCarrySolid /> Equipes</a></li>
          <li className=" w-full h-20 flex items-center px-6 rounded-sm text-[18px] font-second-title-font text-light-color hover:bg-dark-color "><a className="flex gap-2 items-center" ><BsUiChecksGrid /> Vantagens</a></li>
          <li className=" w-full h-20 flex items-center px-6 rounded-sm text-[18px] font-second-title-font text-light-color hover:bg-dark-color "><a className="flex gap-2 items-center" > <TbUsersGroup /> Participantes</a></li>
          <li className=" w-full h-20 flex items-center px-6 rounded-sm text-[18px] font-second-title-font text-light-color hover:bg-dark-color "><a className="flex gap-2 items-center" ><TbBrandLinkedin /> Linkedin</a></li>
        
        </ul>
      </nav>
    <article className="ml-auto mr-auto flex flex-col items-center gap-[32px]">
      <section className="flex flex-col text-center">
      <p className="text-light-color-text2 text-sub-title-mobile font-second-title-font">Projeto</p>
      <h1 className="text-light-color-text1 text-title-mobile font-main-title-font">Frontend Fusion</h1>
      <p className="text-light-color-text2 text-sub-title-mobile font-second-title-font">Codifique o seu futuro hoje!</p>
 
      </section>
      
           <div className="flex justify-around items-center gap-2 w-[90%]">
        <DiReact size={40} color="white" /> <SiTypescript size={30} color="white" /> <SiVite size={30} color="white" /> <SiTailwindcss size={40} color="white" />
      </div>
    </article>
      <section className="flex ml-auto mr-auto w-full  justify-center gap-[6px] items-center">
        <figure className="flex flex-col h-72 w-20  items-center justify-center">
           
          <img src="https://i.imgur.com/ntcIrvR.png" width={96} className="rounded-xl" /> 

        </figure>

        <figure className="flex flex-col h-40 w-20  items-center justify-center mt-[-56px] gap-2">
        <img src="https://i.imgur.com/VeJA1TV.png" width={96} className="rounded-xl" /> 
        <img src="https://i.imgur.com/bZhbr5t.png" width={96} className="rounded-xl" /> 

        </figure>

        <figure className="flex flex-col h-60 w-20  items-center justify-center  gap-2">
        <img src="https://i.imgur.com/ovqtvHZ.png" width={96} className="rounded-xl" /> 
        <img src="https://i.imgur.com/1f1GLxf.png" width={96} className="rounded-xl" /> 
        </figure>

        <figure className="flex flex-col h-72 w-20  items-center justify-center  gap-2">
        <img src="https://i.imgur.com/9vBw1JC.png" width={96} className="rounded-xl" /> 
        </figure>
      </section>
    </main>
    </>
  )
}