import { NewArticle } from "./NewArticle";



export const NewContainer = () => {
  return (
    <aside className="bg-VeryDarkBlue text-OffWhite">
        <h1 className = "text-SoftOrange text-4xl font-bold px-[20px]">New</h1>
        <NewArticle 
            title="Hydrogen VS Electric Cars"
            description="Will hydrogen-fueled cars ever catch up to EVs?"
        />
        <NewArticle 
            title="The Downsides of AI Artistry"
            description="What are the possible adverse effects of on-demand AI image generation?"
        />
        <NewArticle
            title="Is VC Funding Drying Up?"
            description="Private funding by VC firms is down 50% YOY. We take a look at what that means."
        />
    </aside>
  )
}
