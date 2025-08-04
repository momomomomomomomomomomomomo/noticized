function Colors({ setColor }) {
  return (
    <div className="flex gap-3 absolute left-4 bottom-4 z-10">
      <button
        onClick={() => setColor("emerald")}
        className="w-6 h-6 lg:w-8 lg:h-8 bg-emerald-400 transition-all"
      ></button>
      <button
        onClick={() => setColor("indigo")}
        className="w-6 h-6 lg:w-8 lg:h-8 bg-indigo-400 transition-all"
      ></button>
      <button
        onClick={() => setColor("cyan")}
        className="w-6 h-6 lg:w-8 lg:h-8 bg-cyan-400 transition-all"
      ></button>
    </div>
  );
}

export default Colors;
