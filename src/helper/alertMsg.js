import Swal from "sweetalert2";

export const alertMsg = ({ icon, title, text }) => {
  Swal.fire({
    icon: `${icon}`,
    title: `${title}`,
    text: `${text}`,
    timer: 2500,
    timerProgressBar: true,
  });
};
