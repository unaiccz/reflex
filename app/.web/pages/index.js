
/** @jsxImportSource @emotion/react */import { Fragment, useCallback, useContext } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Button, Card, CardBody, Flex, HStack, Image as ChakraImage, Link, Text, VStack } from "@chakra-ui/react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event } from "/utils/state"
import "focus-visible/dist/focus-visible"
import NextLink from "next/link"
import NextHead from "next/head"



export function Vstack_da6a6692e2b4df8752f47ef6d3d702f2 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <VStack sx={{"bg": state__state.theme, "height": "100vh", "width": "100vw", "padding": "25px"}}>
  <Button_d56d321195eaf27449fd946d0fb1b88c/>
  <Button_1ac4baa34fb90ba643e23ad2f1b3d217/>
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
  <VStack sx={{"height": "100vh", "width": "50vw", "margin": "auto", "border": "1px dashed grey", "borderRadius": "10px", "padding": "25px"}}>
  <HStack>
  <ChakraImage src={`/python_img.jpg`} sx={{"width": 300, "height": 300, "borderRadius": "15px 50px", "border": "5px solid #555", "boxShadow": "lg"}}/>
  <Card>
  <Cardbody_4e7d9f96657450af4090b43942117269/>
</Card>
</HStack>
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
  <VStack sx={{"marginBottom": "50px"}}>
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
  <Link as={NextLink} href={`/about`}>
  <Button sx={{"color": "white", "backgroundColor": "grey", "fontSize": "2xl", "fontWeight": "bold", "fontFamily": "sans-serif"}}>
  {`About this site`}
</Button>
</Link>
</VStack>
</VStack>
  )
}

export function Button_1ac4baa34fb90ba643e23ad2f1b3d217 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_f7c65c696e16baa4fb1f6a8507c213b6 = useCallback((_e) => addEvents([Event("state.state.light", {})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_f7c65c696e16baa4fb1f6a8507c213b6} sx={{"color": "black", "backgroundColor": "black", "fontSize": "2xl", "fontWeight": "bold", "fontFamily": "sans-serif"}}>
  {`🌞`}
</Button>
  )
}

export function Cardbody_4e7d9f96657450af4090b43942117269 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <CardBody>
  {state__state.time}
</CardBody>
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

export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Vstack_da6a6692e2b4df8752f47ef6d3d702f2/>
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
