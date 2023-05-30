import Head from "./head";
function Header(props) {
  return (
    <div className="header">
      {props.val}
      <Head />
    </div>
  );
}

export default Header;
