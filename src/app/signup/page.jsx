"use client";
import {
  Check,
  Envelope,
  Eye,
  EyeSlash,
  Lock,
  Person,
  Picture,
} from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-center py-8 px-4">
  {/* Header Section */}
  <div className="text-center mb-6">
    <h1 className="text-3xl md:text-4xl font-serif text-gray-900 mb-2">
      Create Account
    </h1>
    <p className="text-gray-500 text-sm md:text-base">Start your adventure with Wanderlust</p>
  </div>

  {/* Form Card */}
  <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 w-full max-w-[450px]">
    <Form className="flex flex-col gap-4">
      
      {/* Full Name */}
      <TextField
        isRequired
        name="name"
        validate={(value) => value.trim().length < 3 ? "Name must be at least 3 characters long" : null}
      >
        <Label className="text-sm font-bold text-gray-700 mb-1 block">Full Name</Label>
        <InputGroup>
          <InputGroup.Prefix>
            <Person className="size-4 text-gray-400" />
          </InputGroup.Prefix>
          <InputGroup.Input
            className="w-full bg-[#F9FAFB] border-gray-200"
            placeholder="Enter your name"
          />
        </InputGroup>
        <FieldError className="text-[11px] text-red-500 mt-1" />
      </TextField>

      {/* Email Address */}
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) ? "Invalid email address" : null}
      >
        <Label className="text-sm font-bold text-gray-700 mb-1 block">Email Address</Label>
        <InputGroup>
          <InputGroup.Prefix>
            <Envelope className="size-4 text-gray-400" />
          </InputGroup.Prefix>
          <InputGroup.Input
            className="w-full bg-[#F9FAFB] border-gray-200"
            placeholder="Enter your email"
          />
        </InputGroup>
        <FieldError className="text-[11px] text-red-500 mt-1" />
      </TextField>

      {/* Password */}
      <TextField
        isRequired
        name="password"
        type="password"
        validate={(value) => value.length < 8 ? "At least 8 characters" : null}
      >
        <Label className="text-sm font-bold text-gray-700 mb-1 block">Password</Label>
        <InputGroup>
          <InputGroup.Prefix>
            <Lock className="size-4 text-gray-400" />
          </InputGroup.Prefix>
          <InputGroup.Input
            className="w-full bg-[#F9FAFB] border-gray-200"
            placeholder="Create a password"
            type={isVisible ? "text" : "password"}
          />
          <InputGroup.Suffix>
            <Button isIconOnly variant="ghost" size="sm" onPress={() => setIsVisible(!isVisible)}>
              {isVisible ? <Eye className="size-4 text-gray-400" /> : <EyeSlash className="size-4 text-gray-400" />}
            </Button>
          </InputGroup.Suffix>
        </InputGroup>
        <FieldError className="text-[11px] text-red-500 mt-1" />
      </TextField>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full bg-[#1DA1C1] hover:bg-[#178ba7] text-white font-bold h-11 rounded-lg mt-2 transition-all active:scale-[0.98]"
      >
        Create Account
      </Button>

      {/* Divider - Gap optimized */}
      <div className="relative flex items-center justify-center my-2">
        <div className="border-t border-gray-200 w-full"></div>
        <span className="absolute bg-white px-3 text-[12px] text-gray-400 uppercase tracking-wider">
          Or sign up with
        </span>
      </div>

      {/* Google Login - React Icon used */}
      <Button
        variant="bordered"
        className="w-full rounded-md border-gray-200 h-11 font-bold text-gray-700 flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors"
      >
        <FcGoogle className="size-5" />
        Sign Up With Google
      </Button>

      {/* Footer Link - Gap optimized */}
      <p className="text-center text-sm text-gray-500 mt-2">
        Already have an account?{" "}
        <Link href={'/login'} className="text-[#1DA1C1] font-bold cursor-pointer hover:underline">
          Sign In
        </Link>
      </p>
    </Form>
  </div>
</div>
  );
};

export default SignUp;
