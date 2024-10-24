import Image from "next/image";
import Link from "next/link";


export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center bg-[#E1F2FD] p-10 rounded-lg">
     
      <Image
                src="not-found.png"
                alt="vpn-guide-img"
                height={64}
                width={230}
                className="flex items-center h-64 justify-center py-4"
              />
      <h1 className="text-3xl text-[#1C1D32] font-bold">Not Found</h1>
      <p className="text-xl text-[#1C1D32] mt-4">
        Could not find the requested resource.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block px-6 py-3 bg-[#E1F2FD] text-[#1C1D32] underline font-semibold text-lg rounded-lg hover:bg-[2196F3] transition duration-300"
      >
        Return Home
      </Link>
    </div>
  );
}
