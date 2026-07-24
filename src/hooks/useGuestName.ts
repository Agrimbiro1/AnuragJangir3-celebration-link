import { useState, useEffect } from "react";

export function useGuestName(defaultName = "Rahul Verma"): string {
  const [guestName, setGuestName] = useState(defaultName);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const name = params.get("guest") || params.get("name") || params.get("to");
      if (name && name.trim()) {
        setGuestName(name.trim());
      }
    }
  }, []);

  return guestName;
}
