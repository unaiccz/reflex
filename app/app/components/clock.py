from datetime import datetime
import reflex as rx





def time()-> rx.component:
    return rx.div(
        rx.text(State.time),
        rx.button("Update Time", on_click=update_time),
    )