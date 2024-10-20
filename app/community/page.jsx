import Link from "next/link";


export default function Community() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center bg-[#E1F2FD] p-10 rounded-lg">
     
      <img
                src="soon.png"
                alt="coming soon image"
                className="flex items-center h-64 justify-center py-4"
              />
      <h1 className="text-3xl text-[#1C1D32] font-bold">Coming Soon</h1>
      <p className="text-xl max-w-xl mx-auto text-[#1C1D32] mt-4">
       Are you ready to get something new from us? <span className="font-bold">Get Notified when we Launch!</span>
      </p>
      
      <Link
        href="https://forms.gle/47QSWLiFGwd9ZCM29"
        className="mt-4 flex px-8 py-3 bg-[#2196F3] text-[#1C1D32] gap-2 underline font-semibold text-lg rounded-lg hover:bg-[2196F3] transition duration-300"
      >
       <button>
          Notify Me
        </button> 

        <img src="./Send.svg" href="send icon" />
      </Link>
      
    </div>
  );
}

