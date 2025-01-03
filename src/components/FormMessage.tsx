export default function FormMessage({ message }: { message: any }) {

  let className = message.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"

  if(message.payload) {
    return (
      <div data-component="form-message" className={`${className} rounded-lg py-4 px-5`}>
        {
          message.payload.map((msg: any, index: number) => (
            <p key={index} className="mb-1 capitalize">{msg}</p> 
          ))
        }
      </div>
    )
  }
}