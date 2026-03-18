import { toast } from "sonner";

// You can add custom toast variants here if needed
export const successToast = (message: string, options?: Parameters<typeof toast>[1]) => {
  return toast.success(message, options);
};

export const errorToast = (message: string, options?: Parameters<typeof toast>[1]) => {
  return toast.error(message, options);
};

export const warningToast = (message: string, options?: Parameters<typeof toast>[1]) => {
  return toast.warning(message, options);
};

export const infoToast = (message: string, options?: Parameters<typeof toast>[1]) => {
  return toast.info(message, options);
};

// Re-export the original toast if needed
export { toast };