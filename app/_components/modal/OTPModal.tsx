import React, { useState } from "react";
import OtpInput from "react-otp-input";

const OTPModal = () => {
  const [otp, setOtp] = useState("");

//   const handleOtpChange = (otpValue : any) => {
//     setOtp(otpValue);
//   };

  const handleVerify = () => {
    // Implement your verification logic here
    console.log("Verifying OTP:", otp);
  };

  const handleResend = () => {
    // Implement your resend OTP logic here
    console.log("Resending OTP...");
  };

  return (
    <div>
        <div className="w-48 m-auto">

        <h4 className="text-center mt-6 mb-3 text-xs font-[600] text-[#494949]">
        Confirmation Code
      </h4>
        <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
    //   renderSeparator={<span></span>}
      placeholder={"."}
      renderInput={(props) => <input {...props} />}
      inputStyle={{ width: "40px", height: "40px", fontSize: "24px", border: "1px solid gray", borderRadius: "7px"}}
        containerStyle={{ display: "flex", justifyContent: "space-around" }}
    />
    </div>
    <div className="text-center mt-5 gap-3">
      <button className="bg-gray-400 border text-gray-600 p-2" onClick={handleVerify}>Cancel</button>
      <button  className="bg-red-400 border text-white p-2"  onClick={handleResend}>Confirm</button>
    </div>
    </div>
  );
};

export default OTPModal;
