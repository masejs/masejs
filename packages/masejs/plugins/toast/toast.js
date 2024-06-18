import"./plugins/toast/internal/toast.js";
import { ToastStyles } from './all-styles.min.js';

const styleElement = document.createElement('style');
styleElement.innerHTML = ToastStyles;document.head.appendChild(styleElement);