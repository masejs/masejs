export class ToastPlugin {
    static TOAST_CONTAINER_ID = 'masejs-toast-container';
    static DEFAULT_POSITION = 'bottom-right';

    static createToast(options) {
        const toastContainer = this.getToastContainer(options.position);
        const toastElement = document.createElement('div');
        toastElement.classList.add('masejs-toast');

        if (options.type) {
        toastElement.classList.add(`toast--${options.type}`);
        }

        if (options.icon) {
        const iconElement = document.createElement('div');
        iconElement.classList.add('toast__icon');
        iconElement.innerHTML = options.icon;
        toastElement.appendChild(iconElement);
        }

        if (options.message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('masejs-toast__message');
        messageElement.textContent = options.message;
        toastElement.appendChild(messageElement);
        }

        if (options.duration) {
        setTimeout(() => {
            toastElement.classList.add('masejs-toast--hidden');
            setTimeout(() => {
            toastContainer.removeChild(toastElement);
            }, 300);
        }, options.duration);
        }

        toastContainer.appendChild(toastElement);
        return toastElement;
    }

    static getToastContainer(position = this.DEFAULT_POSITION) {
        let toastContainer = document.getElementById(this.TOAST_CONTAINER_ID);
        if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = this.TOAST_CONTAINER_ID;
        toastContainer.classList.add('masejs-toast-container');
        this.setToastContainerPosition(toastContainer, position);
        document.body.appendChild(toastContainer);
        }
        return toastContainer;
    }

    static setToastContainerPosition(container, position) {
        container.classList.remove(
        'masejs-toast-container--top-left',
        'masejs-toast-container--top-right',
        'masejs-toast-container--bottom-left',
        'masejs-toast-container--bottom-right'
        );
        container.classList.add(`masejs-toast-container--${position}`);
    }
}