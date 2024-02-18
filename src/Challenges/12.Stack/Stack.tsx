import { useState } from "react";

const Stack = () => {
  const [values, setValues] = useState<number[]>([]);
  const [newvalue, setNewValue] = useState<number>();
  const [Data, setData] = useState<string>("Empty Stack");
  const pushfunc = () => {
    if (newvalue != undefined && values.length !=10) {
      setValues((prev) => [...prev, newvalue]);
    }
    if (values.length == 10) {
      setData("Stack is Full");
    }

  };
  const popfunc = () => {
    if (values.length) {
      const poppedValue = values.pop();
      setValues([...values]); 
      setData(`${poppedValue} is removed from Stack`);
    } else {
      setData("Empty Stack");
    }
  };
  const peekfunc = () => {
    setData(`Last element is ${values[values.length - 1]} `);
  };
  const IsEmptyFunc = () => {
    if(!values.length){
        setData("Stack is Empty")
    }
    else{
        setData("Stack is not Empty")
    }
  };
  const IsFullFunc =()=>{
    if(values.length ==10){
        setData("Stack is Full")
    }else{
        setData("Stack is Not Full")
    }
  }
  return (
    <div className="flex mt-10 justify-center items-center w-full">
      <div className="border-1 flex flex-col w-[70%] justify-center items-center p-4 shadow-md">
        <input
          className="p-1 outline-none border-2 w-[80%]"
          type="number"
          placeholder="Enter a Value"
          name="value"
          value={newvalue}
          onChange={(e) => {
            setNewValue(+e.target.value);
          }}
        />
        <div className="mt-4 gap-2 flex">
          <button
            onClick={pushfunc}
            className="bg-blue-500 p-1 w-[70px] rounded-sm text-white"
          >
            Push
          </button>
          <button
            onClick={() => popfunc()}
            className="bg-blue-500 p-1 w-[70px] rounded-sm text-white"
          >
            Pop
          </button>
          <button
            onClick={() => peekfunc()}
            className="bg-blue-500 p-1 w-[70px] rounded-sm text-white"
          >
            Peek
          </button>
          <button
            onClick={() => IsEmptyFunc()}
            className="bg-blue-500 p-1 w-[70px] rounded-sm text-white"
          >
            IsEmpty
          </button>
          <button
            onClick={() => IsFullFunc()}
            className="bg-blue-500 p-1 w-[70px] rounded-sm text-white"
          >
            IsFull
          </button>
        </div>
        <span className="bg-black h-px w-[90%] mt-4 bg-opacity-35"></span>
        <div className="mt-4 flex flex-col gap-4 w-[90%] justify-center items-center">
          <p className="text-black font-bold text-lg">{Data}</p>
          {values.map((value) => (
            <button className="w-[90%] bg-blue-200 h-[30px] rounded-sm">
              {value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stack;
