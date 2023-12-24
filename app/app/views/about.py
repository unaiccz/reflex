import reflex as rx
from app.components.Nav import nav
def about() -> rx.component:
    return rx.vstack(
        nav(),
rx.text("About this page", font_size="6xl", font_family="sans-serif", font_weight="bold", color="black"),    
rx.image(src="/rx.png" , width=1000, height=500,     border_radius="15px 50px",
    border="5px solid #555",
    box_shadow="lg",
    ), # Image
rx.text("This page is made with reflex and python, you can see the code in my github", font_size="3xl", font_family="sans-serif", font_weight="bold", color="black"),
)
    