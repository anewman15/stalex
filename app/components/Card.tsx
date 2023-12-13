import stylex from '@stylexjs/stylex';
import { ReactNode } from 'react';
import { StyleXArray } from '@stylexjs/stylex/lib/StyleXTypes';
import { colors } from '../stylex/cssVars.stylex';

const styles = stylex.create({
  card: {
    margin: "32px",
    padding: "16px",
    border: "1px spolid transparent",
    borderRadius: "8px",
    backgroundColor: colors.secondary,
  },
});


type Props = Readonly<{
  featuredBg?: StyleXArray<any>;
  children: ReactNode;
}>;

export default function Card({ featuredBg, children }: Props) {
  return (
    <div {...stylex.props(styles.card, featuredBg)}>
      {children}
    </div>
  );
};
