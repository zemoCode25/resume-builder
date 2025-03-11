// import image from "../../public/assets/PR10.png";
export function Templates() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-stone-100 py-5">
      <div className="flex justify-center flex-col items-center mb-5">
        <h1 className="text-4xl font-bold text-center">
          Choose your template.
        </h1>
        <p className=" text-center">Select a Harvard style resume template</p>
      </div>
      <div className="gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:lg:grid-cols-4 px-10">
        <div className="p-2 border border-gray-400 shadow-md cursor-pointer hover:border-black hover:shadow-lg">
          <img
            className="w-100"
            src="../../public/assets/harvard-resume-free-google-docs-template-t.jpg"
            alt=""
          />
        </div>
        <div className="p-2 border border-gray-400 shadow-md cursor-pointer hover:border-black hover:shadow-lg">
          <img
            className="w-100 h-full"
            src="../../public/assets/Stanford-Resume-Template-Example.svg"
            alt=""
          />
        </div>
        <div className="p-2 border border-gray-400 shadow-md cursor-pointer hover:border-black hover:shadow-lg">
          <img
            className="w-100 h-full object-cover"
            src="../../public/assets/Harvard-Resume-Template-Example.svg"
            alt=""
          />
        </div>
        <div className="p-2 border border-gray-400 shadow-md cursor-pointer hover:border-black hover:shadow-lg">
          <img
            className="w-100 h-full object-cover"
            src="../../public/assets/PR10.png"
            alt=""
          />
        </div>
      </div>
    </main>
  );
}
