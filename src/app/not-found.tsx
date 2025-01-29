import { Button } from "@/components";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] bg-gray-100 text-center p-4">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-xl text-gray-600 mt-4">Oops! Page Not Found</p>
      <Link href="/" legacyBehavior>
        <Button extrClass="mt-6 px-4 py-2" title="Back to Home" type="submit"></Button>
      </Link>
    </div>
  );
}
