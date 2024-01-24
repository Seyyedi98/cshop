/* eslint-disable react/prop-types */
function Helmet(props) {
  document.title = "CShop - " + props.title;
  return <div>{props.children}</div>;
}

export default Helmet;
