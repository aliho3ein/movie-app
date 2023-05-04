import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  showConfirmButton: false,
  timerProgressBar: true,
  position: "top",
  backdrop: false,
  customClass: {
    popup: "alertMassage",
  },
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const alertMassage = (title, icon = "success", timer = 3000) => {
  // icons : success , error , warning ,info ,question
  Toast.fire({
    icon,
    title,
    timer,
  });
};
