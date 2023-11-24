function Card() {
  return (
    <article className="p-6 m-2 hover:bg-gray-500 border-2 border-solid border-white dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer">
      <p className="text-md text-white">
        <span className="mr-3">-</span>Real Name 
      </p>
      <p className="text-md text-white">
        <span className="mr-3">-</span>Player Name
      </p>
      <p className="text-md text-white">
        <span className="mr-3">-</span>Asset
      </p>
    </article>
  );
}

export default Card;
