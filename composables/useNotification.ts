export type ToastType = 'success' | 'error' | 'warning' | 'info'

export interface ToastOptions {
  title?: string
  duration?: number
  action?: {
    label: string
    handler: () => void
  }
}

export const useNotification = () => {
  const toast = useToast()

  const showNotification = (message: string, type: ToastType = 'info', options?: ToastOptions) => {
    const toastConfig = {
      title: options?.title,
      description: message,
      timeout: options?.duration || 5000,
    }

    let result

    switch (type) {
      case 'success':
        result = toast.add({
          ...toastConfig,
          color: 'green',
          icon: 'i-heroicons-check-circle',
        })
        break
      case 'error':
        result = toast.add({
          ...toastConfig,
          color: 'red',
          icon: 'i-heroicons-x-circle',
        })
        break
      case 'warning':
        result = toast.add({
          ...toastConfig,
          color: 'yellow',
          icon: 'i-heroicons-exclamation-triangle',
        })
        break
      case 'info':
      default:
        result = toast.add({
          ...toastConfig,
          color: 'blue',
          icon: 'i-heroicons-information-circle',
        })
        break
    }

    console.log('✅ Toast added, result:', result)
    return result
  }

  const showSuccess = (message: string, options?: ToastOptions) => {
    return showNotification(message, 'success', options)
  }

  const showError = (message: string, options?: ToastOptions) => {
    return showNotification(message, 'error', options)
  }

  const showWarning = (message: string, options?: ToastOptions) => {
    return showNotification(message, 'warning', options)
  }

  const showInfo = (message: string, options?: ToastOptions) => {
    return showNotification(message, 'info', options)
  }

  return {
    showNotification,
    showSuccess,
    showError,
    showWarning,
    showInfo,
  }
}
