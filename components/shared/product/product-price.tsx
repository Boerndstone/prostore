import { cn } from "@/lib/utils";

const ProductPrice = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  // Ensure two decimal places
  const sttingValue = value.toFixed(2);
  // Get the int/float
  const [intValue, floatValue] = sttingValue.split(".");
  return (
    <p className={cn("text-2xl", className)}>
      <span className="text-xs align-super">$</span>
      {intValue}
      <span className="text-xs align-super">. {floatValue}</span>
    </p>
  );
};

export default ProductPrice;
