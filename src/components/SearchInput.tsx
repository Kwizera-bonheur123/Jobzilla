import { useState } from "react";

type componetProps = {
  //   openModel: boolean;
};

const SearchInput: React.FC<componetProps> = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Web developer" },
    { id: 2, name: "Devops" },
    { id: 3, name: "Accountant" },
  ]);

  return (
    <div className=" absolute bottom-10 w-[86%] border-2 bg-white p-2 grid gap-2  rounded-md">
      <input type="text" className=" w-full bg-gray-100 rounded-md h-8" />
      <ul className=" grid gap-3">
        <li className=" text-gray-400 p-2">Select category</li>
        {items.map((item) => (
          <li className=" hover:bg-gray-200 p-2">{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchInput;
