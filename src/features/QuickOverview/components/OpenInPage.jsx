import { Link } from "react-router";

function OpenInPage({ itemsLength, navigateTo }) {
  return (
    <div className="flex items-center justify-between mt-5 border-t primary-border-color pt-5">
      <p className="text-sm text-neutral-500">{itemsLength} رکورد یافت شد.</p>
      <Link
        to={navigateTo || "/"}
        className="primary-bg text-sm px-3 py-1.5 font-medium"
      >
        نمایش کامل لیست
      </Link>
    </div>
  );
}

export default OpenInPage;
