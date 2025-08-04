export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-emerald-50">
      <div className="flex space-x-2  ">
        <div className="w-8 h-8 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-8 h-8 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-8 h-8 bg-emerald-500 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
}
