import reflex as rx
from app.components.Nav import nav
from app.components.Image import Image
from app.views.header import header
from app.views.links.links import links
class State(rx.State):
    theme: str = "lightblue"
    def dark(self):
        self.theme = "#26282f"
    def light(self):
        self.theme = "lightblue"

def index()-> rx.component:
    return rx.vstack( # Vertical stack container
        rx.button("🌙", color="black", background_color="black", font_size="2xl", font_weight="bold", font_family="sans-serif", on_click=State.dark),
        rx.button("🌞", color="black", background_color="black", font_size="2xl", font_weight="bold", font_family="sans-serif", on_click=State.light),
        nav(), # Navbar
        header(), # Header 
        links(), # Links
    bg=State.theme, # Background color
    height="100vh",
    ) # End of container



app = rx.App()
app.add_page(index)
app.compile()

