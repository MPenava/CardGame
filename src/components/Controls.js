function Controls() {
  return (
    <section className="border-2 border-solid border-white basis-2/5">
      <h1 className="text-4xl text-white ml-3 mt-2">Controls</h1>
      <div className="mt-8 ml-5 mr-5 space-x-5 flex flex-row">
        <button className="text-lg hover:bg-gray-500 text-white text-center py-1 border-2 border-thin border-white basis-2/4">SORT ASC</button>
        <button className="text-lg hover:bg-gray-500 text-white text-center py-1 border-2 border-thin border-white basis-2/4">SORT DESC</button>
      </div>
      <div className="my-8 ml-5 mr-5">
        <button className="w-full text-lg hover:bg-gray-500 text-white text-center py-1 border-2 border-thin border-white ">SUBMIT</button>
      </div>
    </section>
  );
}

export default Controls;
