import { useState } from "react";
import QRCode from "qrcode.react";

const QRCodeGenerator = () => {
  const [text, setText] = useState("");
  const [Show, setShow] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="flex h-[90vh] flex-col justify-center items-center gap-10">
      <div className="flex justify-center items-center flex-col gap-4">
        <p className="font-bold">Enter text for QR code:</p>
        <input
          className="border-2 outline-none p-2 w-[90vw] rounded-md"
          type="text"
          value={text}
          onChange={handleInputChange}
        />
        <button className="border-2 p-2 w-[150px] rounded-md bg-green-500 font-bold text-lg" onClick={() => setShow(true)}>Generate</button>
      </div>

      {Show && (
        <div>
          <QRCode value={text} />
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;
