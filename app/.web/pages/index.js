
/** @jsxImportSource @emotion/react */import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Button, HStack, Image as ChakraImage, Text, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <VStack sx={{"bg": "lightblue", "height": "100vh"}}>
  <HStack>
  <Text sx={{"color": "purple", "fontSize": 25, "fontFamily": "monospace"}}>
  {`Developer`}
</Text>
</HStack>
  <VStack>
  <ChakraImage src={`/python_img.jpg`} sx={{"width": 300, "height": 300, "borderRadius": "15px 50px", "border": "5px solid #555", "boxShadow": "lg"}}/>
  <Text sx={{"color": "grey", "fontSize": "1xl", "fontWeight": "bold", "fontFamily": "sans-serif"}}>
  {`@unaicc`}
</Text>
  <Text sx={{"color": "grey", "fontSize": "2xl", "fontWeight": "bold", "fontFamily": "sans-serif", "marguinBottom": "25px"}}>
  {`👋Hola, soy unai compaired`}
</Text>
  <Text sx={{"color": "grey", "fontSize": "2xl", "fontWeight": "bold", "fontFamily": "sans-serif"}}>
  {`👨‍💻Soy un desarrollador de aplicaciones web fullstack centrado en REACT ⚛ y python 🐍 ademas estoy constantemente renovando mis conocimientos y aprendiendo nuevas tecnologias.`}
</Text>
</VStack>
  <VStack>
  <HStack alignItems={`center`} justifyContent={`center`} sx={{"borderWidth": 2, "borderColor": "blue", "borderRadius": 10, "padding": 5, "margin": 10, "width": "100%", "backgroundColor": "grey", "shadow": 2}}>
  <Button sx={{"color": "white", "backgroundColor": "blue", "fontSize": "2xl", "fontWeight": "bold", "fontFamily": "sans-serif", "href": "mailto:unaicc2003@gmail.com"}}>
  {`📧 Contactame`}
</Button>
  <Text>
  {`unaicc2003@gmail.com`}
</Text>
</HStack>
  <HStack>
  <Button sx={{"color": "white", "backgroundColor": "black", "fontSize": "2xl", "fontWeight": "bold", "fontFamily": "sans-serif", "href": "https://github.com/unaiccz"}}>
  {`🐙 Github`}
</Button>
</HStack>
</VStack>
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
