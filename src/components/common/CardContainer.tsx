type CardContainerProps= {
  children: React.ReactNode;
  className?: string; 
}

function CardContainer({ children, className  }: CardContainerProps) {
  return (
 <div className={`border shadow bg-ice-blue rounded-xl p-6 space-y-4 w-full ${className}`}>
      {children}
    </div>
  )
}

export default CardContainer