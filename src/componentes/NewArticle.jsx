
 export const NewArticle = ({title, description}) => {
  return (
    <article className="p-6 border-b border-OffWhite/20
    last:border-none">
      <h2 className="cursor-pointer hover:text-SoftOrange text-[20px]
      mb-3 font-bold">{title}</h2>
      <p className="text-[15px]">description: {description}</p>
    </article>
  )
}

