import clsx from "clsx";

interface ICardProps {
  className?: string;
  children: React.ReactNode;
}

const Card = ({ className, children }: ICardProps) => (
  <div
    className={clsx(
      "bg-background-100 relative flex flex-1 cursor-default items-center justify-center rounded-sm border px-3 pt-1",
      className,
    )}
  >
    {children}
  </div>
);

interface ICardLabelProps {
  className?: string;
  children: string;
}

const CardLabel = ({ className, children }: ICardLabelProps) => (
  <span
    className={clsx(
      "bg-background-100 text-text-900 absolute -top-3 px-2 text-sm uppercase",
      className,
    )}
  >
    {children}
  </span>
);

export { Card, CardLabel };
