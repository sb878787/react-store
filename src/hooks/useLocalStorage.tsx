// React Import
import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    let localStorageValue = localStorage.getItem(key);

    if (localStorageValue != null) {
      return JSON.parse(localStorageValue) as T;
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as [
    typeof storedValue,
    typeof setStoredValue
  ];
}
