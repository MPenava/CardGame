function Controls({onSortAsc, onSortDesc, onSendData}) {

  return (
    <section className="border-2 border-solid border-white basis-2/5">
      <h1 className="text-4xl text-white ml-3 mt-2">Controls</h1>
      <div className="mt-8 ml-5 mr-5 space-x-5 flex flex-row">
        <button onClick={onSortAsc} className="text-lg uppercase hover:bg-gray-500 text-white text-center py-1 border-2 border-thin border-white basis-2/4">
          Sort ASC
        </button>
        <button onClick={onSortDesc} className="text-lg uppercase hover:bg-gray-500 text-white text-center py-1 border-2 border-thin border-white basis-2/4">
          Sort DESC
        </button>
      </div>
      <div className="my-8 ml-5 mr-5">
        <button onClick={onSendData}className="w-full text-lg uppercase hover:bg-gray-500 text-white text-center py-1 border-2 border-thin border-white ">
          Submit
        </button>
      </div>
    </section>
  );
}

export default Controls;
