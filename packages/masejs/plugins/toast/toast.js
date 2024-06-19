import './internal/toast.js';
import { ToastStyles } from './internal/toast-styles.js';

const ToastElement = document.createElement('style');
ToastElement.innerHTML = ToastStyles;document.head.appendChild(ToastElement);