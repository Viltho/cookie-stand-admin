"use client";

import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Header from "@/components/Header";
import { useState } from "react";

export default function Home() {
  const [object, setObject] = useState({});
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Header />
      <div className="formcontainer">
        <Form setObject={setObject} />
      </div>
      {object && (
        <div className="flex flex-col items-center">
          <p>location is : {object.location}</p>
          <p>Min is : {object.min}</p>
          <p>Max is : {object.max}</p>
          <p>Avg is : {object.avg}</p>
        </div>
      )}
    <p className="text-center">Report table coming soon...</p>

      <Footer />
    </main>
  );
}
