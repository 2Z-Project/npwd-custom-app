fx_version("cerulean")
game("gta5")

client_script("client/*.lua")

server_script("server/*.lua")

ui_page("dist/index.html")

files {
    "dist/index.html",
    "dist/assets/*.js",
}
