import { useState } from "react";

export default function useToast() {
  const [toast, setToast] = useState(null);

  function show(message, type = "default") {
    setToast({ message, type });
    setTimeout(() => setToast(null), 2500);
  }

  return { toast, show };
}
