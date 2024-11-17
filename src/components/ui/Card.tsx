export default function Card({ children, className }: Props): JSX.Element {
  return (
    <div className={`border p-5 flex-1 space-y-5 flex flex-col bg-white ${className}`}>
      {children}
    </div>
  )
}