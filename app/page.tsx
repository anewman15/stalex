import stylex from '@stylexjs/stylex';
import Card from './components/Card';
import { colors } from './stylex/cssVars.stylex';
import { globalTokens as $ } from "./stylex/globalTokens.stylex";

const MEDIA_MOBILE = '@media (max-width: 700px)' as const;

const style = stylex.create({
  main: {
    margin: "auto",
    fontFamily: $.fontMono,
  },
  jumbotron: {
    border: "1px transparent solid",
    padding: "16px 24px",
    backgroundColor: "#e9ecef",
  },
  jtBody: {
    padding: "8px 0",
  },
  jtHeading: {
    margin: "12px 0",
    fontFamily: $.fontSans,
    fontSize: "54px",
    fontWeight: "bold",
    color: "#4d4d4d",
  },
  jtText: {
    margin: "24px 0",
    fontSize: "24px",
  },
  jtFooter: {
    margin: "24px 0",
  },
  jtButton: {
    padding: "12px 24px",
    fontFamily: $.fontMono,
    fontSize: "20px",
    fontWeight: "bold",
    color: colors.white,
    border: "1px solid transparent",
    borderRadius: "4px",
    backgroundColor: colors.primary,
    textDecoration: {
      default: "none",
      ':hover': "underline",
    },
  },
  deck: {
    display: "flex",
    flexDirection: {
      default: "row",
      [MEDIA_MOBILE]: "column",
    },
    justifyContent: {
      default: "space-betweem",
      [MEDIA_MOBILE]: "center",
    },
    alignItems: {
      default: "center",
      [MEDIA_MOBILE]: "space-between",
    },
    margin: "24px auto",
  },
  cardHeading: {
    margin: "16px 0",
    fontFamily: $.fontMono,
    fontSize: "32px",
  },
  cardText: {
    margin: "16px 0",
    fontFamily: $.fontSans,
    fontSize: "16px",
  },
  featuredBg: {
    backgroundColor: "orange",
  }
});

export default function Home() {
  return (
    <main {...stylex.props(style.main)}>
      <div {...stylex.props(style.jumbotron)}>
        <div {...stylex.props(style.jtBody)}>
          <h1 {...stylex.props(style.jtHeading)}>Hello, world!</h1>
          <p {...stylex.props(style.jtText)}>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
        </div>
        <div {...stylex.props(style.jtFooter)}>
          <a {...stylex.props(style.jtButton)} href="#" role="button">Learn more &raquo;</a>
        </div>
      </div>

      <div {...stylex.props(style.deck)}>
        <Card featuredBg={{backgroundColor: "orange"}}>
          <h2 {...stylex.props(style.cardHeading)}>Heading</h2>
          <p {...stylex.props(style.cardText)}>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
          <p><a href="#" role="button">View details &raquo;</a></p>
        </Card>
        <Card>
          <h2 {...stylex.props(style.cardHeading)}>Heading</h2>
          <p {...stylex.props(style.cardText)}>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
          <p><a href="#" role="button">View details &raquo;</a></p>
        </Card>
        <Card>
          <h2 {...stylex.props(style.cardHeading)}>Heading</h2>
          <p {...stylex.props(style.cardText)}>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
          <p><a href="#" role="button">View details &raquo;</a></p>
        </Card>
      </div>
    </main>
  );
};
