import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script src="https://js.stripe.com/v3/"></script>
          <meta
            httpEquiv="Content-Security-Policy"
            content="img-src https://q.stripe.com https://m.stripe.network https://m.stripe.com https://b.stripecdn.com * data: 'unsafe-inline'
            "
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
