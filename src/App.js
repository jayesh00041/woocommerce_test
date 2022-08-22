import "./styles.css";

import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
  url: "https://project.topaajkal.com/",
  consumerKey: "ck_5f96d8b1d40d946e9b504861c390f254fa2d990e",
  consumerSecret: "cs_39814a7131b12b32f33cf256108a92aa34c80370",
  version: "wc/v3"
});
api
  .get("products", {
    per_page: 20
  })
  .then((response) => {
    if (response.status === 200) {
      console.log(response.data);
    }
  })
  .catch((error) => {});

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
