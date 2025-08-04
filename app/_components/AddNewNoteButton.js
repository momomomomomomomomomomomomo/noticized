import Link from "next/link";
import { IoAddCircle } from "react-icons/io5";
function AddNewNoteButton() {
  return (
    <div className="fixed bottom-1/12 left-1/12">
      <Link
        href="/note"
        className="bg-emerald-800 text-emerald-200 rounded-full  w-12 h-12 flex items-center justify-center text-3xl md:w-20 md:h-20 md:text-5xl hover:text-emerald-800 hover:bg-emerald-200 transition-all duration-700 ease-in"
      >
        <IoAddCircle />
      </Link>
    </div>
  );
}

export default AddNewNoteButton;
