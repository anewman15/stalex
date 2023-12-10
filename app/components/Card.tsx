import { ReactNode } from "react";

type Props = Readonly<{
  children: ReactNode;
}>;

export default function Card({ children }: Props) {
  return (
    <div>
      {children}
    </div>
  );
};
