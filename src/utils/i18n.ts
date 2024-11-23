// import { GetStaticProps } from "next";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { I18nNamespaces } from "@/types/i18next";
// import i18nextConfig from "../../next-i18next.config";

// const getLocaleProps =
//   (namespaces: (keyof I18nNamespaces)[]): GetStaticProps =>
//   async ({ params }) => {
//     const { locale } = params as { locale: string };
//     return {
//       props: {
//         ...(await serverSideTranslations(locale as string, namespaces)),
//       },
//     };
//   };

// const getI18nPaths = () =>
//   i18nextConfig.i18n.locales.map((lng: string) => ({
//     params: {
//       locale: lng,
//     },
//   }));
// const getStaticPaths = () => ({
//   fallback: false,
//   paths: getI18nPaths(),
// });

// export { getLocaleProps, getStaticPaths };
