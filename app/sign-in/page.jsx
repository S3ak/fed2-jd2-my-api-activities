import Image from "next/image";

import SignInForm from "@/components/sign-in-form";

export default function SignInPage() {
  return (
    <section className="flex flex-col items-center gap-4 place-content-center">
      <h1 className="text-4xl">Sign In</h1>

      <div className="mx-auto shadow-xl card w-96 bg-base-100">
        <figure>
          <Image
            src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
            width={100}
            height={50}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">FIll in your details</h2>
          <SignInForm />
        </div>
      </div>
    </section>
  );
}
