"use client";

import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Header from "@/components/Header";
import Json from "@/components/Json";
import { useState } from "react";

export default function Home() {
  const [object, setObject] = useState({});
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Header />
      <div className="formcontainer">
        <Form setObject={setObject} />
      </div>
      <Json object={object}/>
    <p className="text-center">Report table coming soon...</p>

      <Footer />
    </main>
  );
}
