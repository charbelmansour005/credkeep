import Logo from "assets/logo0.png"

export default function HeaderLogo() {
  return (
    <img
      alt="logo"
      src={Logo}
      style={{
        height: "285px",
        width: "285px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "100%",
      }}
    />
  )
}
