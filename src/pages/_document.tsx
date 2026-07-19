import { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from "next/document";

Document.getInitialProps = async (ctx: DocumentContext): Promise<DocumentInitialProps & { locale?: string }> => {
  const initialProps = await ctx.defaultGetInitialProps(ctx);
  return { ...initialProps, locale: ctx.locale };
};

export default function Document({ locale }: DocumentInitialProps & { locale?: string }) {
  return (
    <Html lang={locale ?? "en"} className="dark scroll-smooth scroll-pt-24">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
