from app.components.Image import Image
import reflex as rx
def header(time: str) -> rx.component:
    return rx.vstack( # Vertical stack container
rx.hstack(

        Image(), # Image
rx.card(
time,

)),
        rx.text("@unaicc", color="grey", font_size="1xl", font_weight="bold", font_family="sans-serif",),
        rx.text("👋Hola, soy unai compaired", color="grey", font_size="2xl", font_weight="bold", font_family="sans-serif",
                marguin_bottom="25px",
                ),
        rx.text("👨‍💻Soy un desarrollador de aplicaciones web fullstack centrado en REACT ⚛ y python 🐍 ademas estoy constantemente renovando mis conocimientos y aprendiendo nuevas tecnologias."
                , color="grey", font_size="2xl", font_weight="bold", font_family="sans-serif",),
    height="100vh", # 50% of the viewport height,
    width="50vw", # 50% of the viewport width
    margin="auto", # Center horizontally
border="1px dashed grey", # Border
border_radius="10px", # Border radius
padding="25px", # Padding

    ) # End of container
