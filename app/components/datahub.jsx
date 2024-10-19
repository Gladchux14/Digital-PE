const DataHub = () => {
    return (
      <section
        className="py-16 bg-cover bg-center text-white text-center"
        style={{ backgroundImage: "url('/PRIVACY HUB Background.png')" }} 
      >
        <h2 className="text-4xl font-bold mb-4">Privacy Protection Hub</h2>
        <p className="text-lg p-4 mb-12">
          Explore informative articles, tools, and tutorials to protect your digital landscape!
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
         
          <div className="bg-[#1C1D32] border border-[#9c9c9c] text-white  rounded-md p-6 transform transition-transform duration-300 hover:scale-105 max-w-xs mx-auto">
            <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center">
              <img src="/privacy-lock.png" alt="lock-icon" /> Your Data
            </h3>
            <p className="text-[#9c9c9c]">Learn how to protect your data and comply with NLPD.</p>
          </div>
  
          <div className="bg-[#1C1D32] text-white border border-[#9c9c9c] rounded-md p-6 transform transition-transform duration-300 hover:scale-105 max-w-xs mx-auto">
            <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center">
              <img src="/privacy-earth.png" alt="earth-icon"/> Your Network
            </h3>
            <p className="text-[#9c9c9c]">Protected so you can surf the web more safely</p>
          </div>
  
          <div className="bg-[#1C1D32] text-white border border-[#9c9c9c] rounded-md p-6 transform transition-transform duration-300 hover:scale-105 max-w-xs mx-auto mt-10">
            <h3 className="text-2xl font-semibold mb-4">Your Communications</h3>
            <p className="text-[#9c9c9c]">Now there is a way to reveal less about yourself online.</p>
          </div>
  
          <div className="bg-[#1C1D32] text-white border border-[#9c9c9c] rounded-md p-6 transform transition-transform duration-300 hover:scale-105 max-w-xs mx-auto mt-10">
            <h3 className="text-2xl font-semibold mb-4">Your Website</h3>
            <p className="text-[#9c9c9c]">Outsourcing and maintenance have never been so simple.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default DataHub;
  