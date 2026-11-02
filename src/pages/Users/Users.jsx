import { useState } from "react";
import { products } from "@/data/products";
import TitleSection from "@/components/common/TitleSection";
import UsersTableView from "@/features/UsersView/UsersTableView";

function Users() {
  const [paginatedProducts] = useState([...products]);

  return (
    <>
      <TitleSection title="کاربران وبسایت" />
      <section className="mt-10 w-full! min-w-full!">
        <UsersTableView products={[...paginatedProducts].reverse()} />
      </section>
    </>
  );
}

export default Users;
