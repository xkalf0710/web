import Link from "next/link";
import React from "react";
// import SignUpForm from "./signupForm";

const SignUpPage = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-96 flex flex-col justify-center items-center ">
      <h1 className="text-center text-2xl font-bold mb-4">Бүртгүүлэх</h1>
      {/* <SignUpForm /> */}
      <div className="flex justify-between text-sm">
        <p>Та бүртгэлтэй юу?</p>
        <Link className="underline" href={"/auth/signin"}>
          Нэвтрэх
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;