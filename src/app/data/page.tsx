"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const MyDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };


  
  

  const closeDialog = () => {
    setIsOpen(false);
  };

  console.log("called?");

  void (function () {
    console.log("document is loaded!");
  })();

  return (
    <div>
      <Link href="/data/?dialog=open" shallow={false}>
        open
      </Link>
      <button onClick={openDialog}>Open Dialog</button>
      {isOpen && (
        <dialog open onClose={closeDialog}>
          <div>This is a dialog box</div>
          <button onClick={closeDialog}>Close</button>
        </dialog>
      )}
    </div>
  );
};

export default MyDialog;
