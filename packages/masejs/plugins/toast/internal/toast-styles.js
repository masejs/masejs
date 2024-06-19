export const ToastStyles = `
.masejs-toast-container {
  position: fixed;
  z-index: 9999;
}

.masejs-toast-container--top-left {
  top: 7.5px;
  left: 15px;
}

.masejs-toast-container--top-right {
  top: 7.5px;
  right: 15px;
}

.masejs-toast-container--bottom-left {
  bottom: 7.5px;
  left: 15px;
}

.masejs-toast-container--bottom-right {
  bottom: 7.5px;
  right: 15px;
}

.masejs-toast {
  font-family: "Inter", sans-serif;
  background-color: #09090b;
  border-radius: 5px;
  margin-bottom: 7.5px;
  margin-top: 7.5px;
  width: fit-content;
  text-align: left;
  min-width: 250px;
  height: 50px;
  padding-left: 15px;
  padding-right: 10px;
  max-width: fit-content;
  align-items: center;
  display: flex;
  font-size: 15px;
  font-weight: 450;
  color: #F1F1F1;
  line-height: 15px;
}

.masejs-toast svg {
  display: flex;
  height: 20px;
  width: 20px;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.masejs-toast--success {
  background-color: #4CAF50;
}

.masejs-toast--error {
  background-color: #7f1d1d;
}

.masejs-toast--warning {
  background-color: #FF9800;
}
`;