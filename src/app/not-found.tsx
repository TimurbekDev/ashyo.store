import { Button } from "@/components";
import Footer from "@/module/Footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="containers flex flex-col items-center justify-center">
        <h1 className="text-7xl font-bold">404</h1>
        <p className="text-lg mt-4 text-gray-400">
          Oops! The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link href="/">
            <Button title="Go Back" type="submit" />
          </Link>
        </div>
      </div>
      <Footer/>
    </>
  );
}
