
import { useState, useEffect } from "react"

type ToastProps = {
  id: string
  title?: string
  description?: string
  action?: React.ReactNode
  variant?: "default" | "destructive"
}

// Créer un système de toast simple
export const useToast = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  useEffect(() => {
    // Supprimer automatiquement les toasts après 5 secondes
    const timer = setTimeout(() => {
      setToasts((prevToasts) => prevToasts.slice(1))
    }, 5000)

    return () => clearTimeout(timer)
  }, [toasts])

  const toast = (props: Omit<ToastProps, "id">) => {
    setToasts((prevToasts) => [
      ...prevToasts,
      { id: Math.random().toString(36).substring(2, 9), ...props },
    ])
  }

  return {
    toast,
    toasts,
  }
}
