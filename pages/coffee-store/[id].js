import Link from "next/link";
import { useRouter } from "next/router";

const CoffeeStore = () => {
  const router = useRouter();
  return (
    <div>
      On coffee store page - {router.query.id}
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </div>
  );
};

export default CoffeeStore;
