import { BiBell } from "react-icons/bi";

function Notifications() {
  return (
    <button
      className="
        flex size-10 items-center justify-center
        rounded-full border primary-border-color
        cursor-pointer ml-3
        transition-all duration-300 ease-in-out
        hover:rounded-xl hover:text-white hover:primary-bg
      "
    >
      <BiBell className="text-[21px]" />
    </button>
  );
}

export default Notifications;
