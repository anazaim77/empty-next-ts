import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NativeBaseProvider, View } from "native-base";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NativeBaseProvider isSSR>
      <head>
        {/* <title>Judul</title> */}
        <meta
          name="viewport"
          content="initial-scale=1.0, maximum-scale=1.0"
        ></meta>
      </head>
      <View
        maxW={"md"}
        flex={1}
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
      >
        <Component {...pageProps} />
      </View>
    </NativeBaseProvider>
  );
}

export default MyApp;
