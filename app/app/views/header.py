from app.components.Image import Image
import reflex as rx
def header() -> rx.component:
    return rx.vstack( # Vertical stack container
        Image(), # Image
        rx.text("@unaicc", color="grey", font_size="1xl", font_weight="bold", font_family="sans-serif",),
        rx.text("👋Hola, soy unai compaired", color="grey", font_size="2xl", font_weight="bold", font_family="sans-serif",
                marguin_bottom="25px",
                ),
        rx.text("👨‍💻Soy un desarrollador de aplicaciones web fullstack centrado en REACT ⚛ y python 🐍 ademas estoy constantemente renovando mis conocimientos y aprendiendo nuevas tecnologias."
                , color="grey", font_size="2xl", font_weight="bold", font_family="sans-serif",),
    ) # End of container
