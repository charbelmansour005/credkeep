import Logo from "assets/logo0.png"

export default function HeaderLogo() {
  return (
    <img
      alt="logo"
      src={Logo}
      style={{
        height: "255px",
        width: "255px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "100%",
      }}
    />
  )
}
