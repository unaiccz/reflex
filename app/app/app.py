import reflex as rx
from app.components.Nav import nav
from app.components.Image import Image
from app.views.header import header
from app.views.links.links import links
from datetime import datetime
from app.views.about import about
class State(rx.State):
    
    theme: str = "lightblue"
    is_dark: bool = True
    is_light: bool = True
    time: str = datetime.now().strftime("%H:%M:%S")
    def update_time():
        State.time = datetime.now().strftime("%H:%M:%S")
    def dark(self):
        self.theme = "#26282f"
        self.is_dark = False
    def light(self):
        self.is_light = True
        self.theme = "lightblue"

def index()-> rx.component:
        return rx.vstack( # Vertical stack container
        rx.button("🌙", color="black", background_color="black", font_size="2xl", font_weight="bold", font_family="sans-serif", on_click=State.dark),
        rx.button("🌞", color="black", background_color="black", font_size="2xl", font_weight="bold", font_family="sans-serif", on_click=State.light),
        nav(), # Navbar
        header(State.time), # Header 

        links(), # Links
    bg=State.theme, # Background color
    height="100vh",
    width="100vw", # 50% of the viewport width

padding="25px", # Padding
    ) # End of container



app = rx.App()
app.add_page(index)
app.add_page(about, route="/about")
app.compile()

