import React, { Dispatch, SetStateAction, useState } from "react";
import type { FC } from "react";

import OtpInput from "react-otp-input";
import { OTPModal } from "../../_lib/types/genericComponents";

const OTPModal: FC<OTPModal> = ({ verifyOtp, setOtpModalOpen }) => {
  const [otp, setOtp] = useState<string>("");

  const handleVerify = () => {
    verifyOtp(otp || "")
  };

  const handleResend = () => {
    setOtpModalOpen(false)
  };

  return (
    <div>
        <div className="w-48 m-auto">

        <h4 className="text-center mt-6 mb-3 text-xs font-[600] text-[#494949]">
        Confirmation Code
      </h4>
        <OtpInput
      value={otp || ""}
      onChange={setOtp}
      numInputs={4}
    //   renderSeparator={<span></span>}
      placeholder={"."}
      renderInput={(props) => <input {...props} />}
      inputStyle={{ width: "40px", height: "40px", fontSize: "24px", border: "1px solid gray", borderRadius: "7px"}}
        containerStyle={{ display: "flex", justifyContent: "space-around" }}
    />
    </div>
    {/* <div className="text-center mt-5 gap-3">
      <button className="bg-gray-400 border text-gray-600 p-2" onClick={handleResend}>Cancel</button>
      <button  className="bg-red-400 border text-white p-2"  onClick={handleVerify}>Confirm</button>
    </div> */}
    <div className="flex justify-center text-center gap-3 mt-5">
        <button className="py-4 text-[12px] rounded-[6px] bg-[#C02328] text-white w-[40%]"onClick={handleResend}>Cancel</button>
        <button className="py-4 text-[12px] rounded-[6px] bg-gray-200 w-[40%]" onClick={handleVerify}>Confirm
        </button>
    </div>
    </div>
  );
};

export default OTPModal;
