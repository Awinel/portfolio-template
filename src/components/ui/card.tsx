import { ReactNode } from 'react'

export default function Card({
  className,
  children,
  id,
}: {
  className?: string
  children?: ReactNode
  id?: string
}) {
  return (
    <div className={`text-muted-foreground p-2 ${className}`} id={id}>
      {children}
    </div>
  )
}
