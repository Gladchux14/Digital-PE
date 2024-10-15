import DPEContent from "../components/dpecontent";

export default function Tutorial() {
    return (
      <div>
        <section className="bg-[#E1F2FD]">
      <div className="text-[#1C1D32]" >
      <h2 className="text-4xl flex items-center justify-center font-bold mb-4 pt-12">DPE Contents</h2>
        <p className="text-md font-semibold  flex items-center justify-center">
        Search for answers to your digital privacy problems by checking out all of DPE's very own content.
        </p>
      </div>
        <p className="text-[#1C1D32] font-semibold underline pt-12 pl-72 ">
            Recent Updates
        </p>
          
        <DPEContent/>
      </section>
    
      </div>
    );
  }