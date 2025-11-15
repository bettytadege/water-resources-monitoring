type CardProps={
    value:string,
    bgColor:string,
    title:string,
    textColor:string
}

function Card({value,bgColor,title,textColor}:CardProps) {
  return (
    <div className="flex flex-col h-20 justify-center items-center" style={{background:bgColor}}>
        <p className="text-2xl font-semibold" style={{color:textColor}}>{value}</p>
        <span className="text-sm text-slate-purple">{title}</span>
    </div>
  )
}

export default Card