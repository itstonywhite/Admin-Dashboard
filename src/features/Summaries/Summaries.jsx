import { generateSummaries } from "@/utils/home";
import SummaryCard from "./components/SummaryCard";
import { products } from "@/data/products";
import { users } from "@/data/users";

function Summaries() {
  const summaries = generateSummaries({
    productsLength: products.length,
    usersLength: users.length,
    ticketsLength: 246,
    adminsLength: 3,
  });

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-6">
      {summaries.map((summary) => (
        <SummaryCard key={summary.id} {...summary} />
      ))}
    </div>
  );
}

export default Summaries;
