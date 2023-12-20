
/** @jsxImportSource @emotion/react */import { Fragment, useCallback, useContext } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Button, HStack, Image as ChakraImage, Link, Text, VStack } from "@chakra-ui/react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event } from "/utils/state"
import "focus-visible/dist/focus-visible"
import NextLink from "next/link"
import NextHead from "next/head"



export function Button_1ac4baa34fb90ba643e23ad2f1b3d217 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_f7c65c696e16baa4fb1f6a8507c213b6 = useCallback((_e) => addEvents([Event("state.state.light", {})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_f7c65c696e16baa4fb1f6a8507c213b6} sx={{"color": "black", "backgroundColor": "black", "fontSize": "2xl", "fontWeight": "bold", "fontFamily": "sans-serif"}}>
  {`🌞`}
</Button>
  )
}

export function Button_d56d321195eaf27449fd946d0fb1b88c () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_a793ed0cda29bf254782f1d8488bdf3d = useCallback((_e) => addEvents([Event("state.state.dark", {})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_a793ed0cda29bf254782f1d8488bdf3d} sx={{"color": "black", "backgroundColor": "black", "fontSize": "2xl", "fontWeight": "bold", "fontFamily": "sans-serif"}}>
  {`🌙`}
</Button>
  )
}

export function Vstack_af8e520438adac2607ba66660bac7613 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <VStack sx={{"bg": state__state.theme, "height": "100vh"}}>
  <Button_d56d321195eaf27449fd946d0fb1b88c/>
  <Button_1ac4baa34fb90ba643e23ad2f1b3d217/>
  <HStack>
  <Text sx={{"color": "purple", "fontSize": 25, "fontFamily": "monospace"}}>
  {`Developer`}
</Text>
</HStack>
  <VStack sx={{"height": "50vh"}}>
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
  <Link as={NextLink} href={`https://github.com/unaiccz`}>
  <HStack>
  <Button sx={{"color": "white", "backgroundColor": "grey", "fontSize": "2xl", "fontWeight": "bold", "fontFamily": "sans-serif", "href": "https://github.com/unaiccz"}}>
  {`🐙 Github`}
</Button>
</HStack>
</Link>
  <Link as={NextLink} href={`mailto:unaicc2003@gmail.com`}>
  <HStack>
  <Button sx={{"color": "white", "backgroundColor": "grey", "fontSize": "2xl", "fontWeight": "bold", "fontFamily": "sans-serif"}}>
  {`✉ mail`}
</Button>
</HStack>
</Link>
</VStack>
</VStack>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Vstack_af8e520438adac2607ba66660bac7613/>
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
