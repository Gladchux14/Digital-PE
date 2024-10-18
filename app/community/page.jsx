import Link from "next/link";


export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center bg-[#E1F2FD] p-10 rounded-lg">
     
      <img
                src="soon.png"
                alt="coming soon image"
                className="flex items-center h-64 justify-center py-4"
              />
      <h1 className="text-3xl text-[#1C1D32] font-bold">Coming Soon</h1>
      <p className="text-xl text-[#1C1D32] mt-4">
       Are you ready to get something new from us? <span className="font-bold">Get notified when we launch</span>
      </p>
      <button>
      <Link
        href="/"
        className="mt-6 inline-block px-6 py-3 bg-[#E1F2FD] text-[#1C1D32]  font-semibold text-lg rounded-lg hover:bg-[2196F3] transition duration-300"
      >
         Notify Me
      </Link>
      </button>
    </div>
  );
}
