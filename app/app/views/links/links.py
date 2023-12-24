import reflex as rx
def links() -> rx.component:
     # Horizontal stack container
    return rx.vstack(
#github
rx.link( rx.hstack(
    rx.button("🐙 Github", color="white", background_color="grey", font_size="2xl", font_weight="bold", font_family="sans-serif", href="https://github.com/unaiccz"),
), # end github)
href="https://github.com/unaiccz"
), # end github link
    rx.link( rx.hstack( # gmail
    rx.button("✉ mail", color="white", background_color="grey", font_size="2xl", font_weight="bold", font_family="sans-serif",),
), 
href="mailto:unaicc2003@gmail.com"), # end gmail link
rx.link(
        rx.button("About this site", color="white", background_color="grey", font_size="2xl", font_weight="bold", font_family="sans-serif",), # About this site button
href="/about" # href to about page
),
    
    margin_bottom="50px", # Push to bottom
    
    ) # End of container