import { Button, Input } from "@/components";
import React from "react";
import { InputOtp } from "@heroui/react";
const ResetPassword: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col space-y-2">
      <Input
        type="password"
        placeholder="Input new password"
        name="reset_password"
      />
      <div className="w-full">
        <p className="text-default-500 text-small mb-2">OTP code</p>
        <InputOtp length={6} className="!w-full" name="reset_otp"/>
      </div>
      <Button type="submit" title="Save" extrClass="!w-full" />
    </div>
  );
};

export default ResetPassword;
