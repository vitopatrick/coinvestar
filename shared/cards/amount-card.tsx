import { formatCurrency } from "../../utils/formatCurrency";
import { SkeletonText } from "../skeleton/Skeleton";
interface AmountCardType {
  accountType: String;
  amount: Number | any;
  loading: boolean;
}

const AmountCard = ({ accountType, amount, loading }: AmountCardType) => {
  return (
    <div className="bg-bg font-main text-white rounded font-sec w-full p-3">
      <div className="flex flex-col gap-3">
        <div>
          <h1 className="font-light">{accountType}</h1>
        </div>
        <div>
          {loading && <SkeletonText height={10} width={200} />}
          {!loading && (
            <h1 className="font-semibold text-2xl">{formatCurrency(amount)}</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export const PlanCard = ({
  accountType,
  plan,
  loading,
}: {
  accountType: string;
  plan: string;
  loading: false;
}) => {
  return (
    <div className="bg-bg font-main text-white rounded font-sec w-full p-3">
      <div className="flex flex-col gap-3">
        <div>
          <h1 className="font-semibold">{accountType}</h1>
        </div>
        <div>
          {loading && <SkeletonText height={10} width={200} />}
          {!loading && <h1 className="font-bold text-2xl">{plan}</h1>}
        </div>
      </div>
    </div>
  );
};

export default AmountCard;
