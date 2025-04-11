
import { useState, useEffect } from "react"

type ToastProps = {
  id: string
  title?: string
  description?: string
  action?: React.ReactNode
  variant?: "default" | "destructive"
}

// Create a reference to store the toast function
let toastFunction: (props: Omit<ToastProps, "id">) => void = () => {
  console.warn("Toast function called before it was initialized");
};

// Standalone toast function that can be imported without the hook
export const toast = (props: Omit<ToastProps, "id">) => {
  toastFunction(props);
};

// Simple toast system
export const useToast = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  useEffect(() => {
    // Automatically remove toasts after 5 seconds
    const timer = setTimeout(() => {
      setToasts((prevToasts) => prevToasts.slice(1))
    }, 5000)

    return () => clearTimeout(timer)
  }, [toasts])

  const internalToast = (props: Omit<ToastProps, "id">) => {
    setToasts((prevToasts) => [
      ...prevToasts,
      { id: Math.random().toString(36).substring(2, 9), ...props },
    ])
  }

  // Update the reference to the toast function
  useEffect(() => {
    toastFunction = internalToast;
    return () => {
      if (toastFunction === internalToast) {
        toastFunction = () => {
          console.warn("Toast called after component unmounted");
        };
      }
    };
  }, []);

  return {
    toast: internalToast,
    toasts,
  }
}
