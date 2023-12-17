import reflex as rx
from app.components.Nav import nav
from app.components.Image import Image
from app.views.header import header
from app.views.links.links import links
class State(rx.State):
    pass

def index()-> rx.component:
    return rx.vstack( # Vertical stack container
        nav(), # Navbar
        header(), # Header 
        links(), # Links
    bg="lightblue",
    height="100vh",
    ) # End of container



app = rx.App()
app.add_page(index)
app.compile()

