import React from "react";

const Home = () => {
  return (
    <div className="w-full h-[90vh] flex">
      <aside className="w-1/2 h-full p-10 grid gap-5 grid-cols-2 grid-rows-2">
        <section
          className="w-full h-full border 
                            rounded-10 flex flex-col
                            items-center justify-center 
                            text-3xl capitalize letter-spacing-2 cursor-pointer duration-500 blur-[1px] hover:blur-0"
        >
          <span className="hover:blur-0">+2 years</span>
          <span className="hover:blur-0">expreience</span>
        </section>
        <section
          className="w-full h-full border rounded-10 p-2 grid grid-cols-4 grid-rows-4 content-center items-center 
                            blur-[1px] duration-500 hover:blur-none cursor-pointer"
        >
          <div className="w-full h-full text-2xl flex items-center justify-center">
            js
          </div>
          <div className="w-full h-full text-2xl flex items-center justify-center">
            js
          </div>
          <div className="w-full h-full text-2xl flex items-center justify-center">
            js
          </div>
          <div className="w-full h-full text-2xl flex items-center justify-center">
            js
          </div>
          <div className="w-full h-full text-2xl flex items-center justify-center">
            js
          </div>
          <div className="w-full h-full text-2xl flex items-center justify-center">
            js
          </div>
          <div className="w-full h-full text-2xl flex items-center justify-center">
            js
          </div>
          <div className="w-full h-full text-2xl flex items-center justify-center">
            js
          </div>
          <div className="w-full h-full text-2xl flex items-center justify-center">
            js
          </div>
          <div className="w-full h-full text-2xl flex items-center justify-center">
            js
          </div>
          <div className="w-full h-full text-2xl flex items-center justify-center">
            js
          </div>
          <div className="w-full h-full text-2xl flex items-center justify-center">
            js
          </div>
          <div className="w-full h-full text-2xl flex items-center justify-center">
            js
          </div>
          <div className="w-full h-full text-2xl flex items-center justify-center">
            js
          </div>
          <div className="w-full h-full text-2xl flex items-center justify-center">
            js
          </div>
          <div className="w-full h-full text-2xl flex items-center justify-center">
            js
          </div>
        </section>
        <section className="w-full h-full border rounded-10 blur-[1px] duration-500 hover:blur-none cursor-pointer">
          {/* full stuck developer web developper */}
        </section>
        <section className="w-full h-full border rounded-10 blur-[1px] duration-500 hover:blur-none cursor-pointer">
          {/* +3 mern stuck project & +20 static projects*/}
        </section>
      </aside>
      <main className="w-1/2 h-full p-10 flex justify-center items-center">
        <section className="w-4/5 h-4/5 border rounded-10 flex flex-col"></section>
      </main>
    </div>
  );
};

export default Home;
