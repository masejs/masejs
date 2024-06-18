import"./plugins/toast/internal/toast.js";
import { ToastStyles } from './all-styles.min.js';

const ToastElement = document.createElement('style');
ToastElement.innerHTML = ToastStyles;document.head.appendChild(ToastElement);