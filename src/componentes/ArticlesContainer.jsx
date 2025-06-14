import img1 from "../assets/images/image-retro-pcs.jpg"
import img2 from "../assets/images/image-top-laptops.jpg"
import img3 from "../assets/images/image-gaming-growth.jpg"
import { Article } from "./Article"

export const ArticlesContainer = () => {
  return (
    
    <section className="mt-6 md:flex md:flex-warp ">
        <Article
            title="01"
            subtitle="Nueva Norma de REINFO"
            description="What happens when old PCs are given modern upgrade?"
            image={img1}
        />
        <Article
            title="02"
            subtitle="Nueva Norma de REINFO"
            description="What happens when old PCs are given modern upgrade?"
            image={img2}
        />
        <Article
            title="03"
            subtitle="Nueva Norma de REINFO"
            description="What happens when old PCs are given modern upgrade?"
            image={img3}
        />
    </section>
       
  
    
  )
}
