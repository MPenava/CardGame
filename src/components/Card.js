function Card({realName, playerName, asset}) {
  return (
    <article className="p-6 m-2 hover:bg-gray-500 border-2 border-solid border-white dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer">
      <p className="text-md text-white truncate">
        <span className="mr-1">-</span>{realName}
      </p>
      <p className="text-md text-white truncate">
        <span className="mr-1">-</span>{playerName}
      </p>
      <p className="text-md text-white truncate">
        <span className="mr-1">-</span>{asset}
      </p>
    </article>
  );
}

export default Card;
