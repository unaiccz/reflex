
/** @jsxImportSource @emotion/react */import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Button, Flex, Image as ChakraImage, Link, Text, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import "focus-visible/dist/focus-visible"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <VStack>
  <Flex>
  <Link as={NextLink} href={`/`} sx={{"marginRight": "10px"}}>
  <Button sx={{"color": "white", "backgroundColor": "grey", "fontSize": "2xl", "fontWeight": "bold", "fontFamily": "sans-serif"}}>
  {`Home`}
</Button>
</Link>
  <Link as={NextLink} href={`/about`}>
  <Button sx={{"color": "white", "backgroundColor": "grey", "fontSize": "2xl", "fontWeight": "bold", "fontFamily": "sans-serif"}}>
  {`About`}
</Button>
</Link>
</Flex>
  <Text sx={{"fontSize": "6xl", "fontFamily": "sans-serif", "fontWeight": "bold", "color": "black"}}>
  {`About this page`}
</Text>
  <ChakraImage src={`/rx.png`} sx={{"width": 1000, "height": 500, "borderRadius": "15px 50px", "border": "5px solid #555", "boxShadow": "lg"}}/>
  <Text sx={{"fontSize": "3xl", "fontFamily": "sans-serif", "fontWeight": "bold", "color": "black"}}>
  {`This page is made with reflex and python, you can see the code in my github`}
</Text>
</VStack>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
