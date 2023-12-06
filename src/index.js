import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppContextProvider } from "./context/AppContext";
import GlobalStyles from "./styles/GlobalStyles";
import "antd/dist/antd.css"; // Import Ant Design styles

import App from "./App";
// import ExampleComponent from "./components/ExampleComponent";

const queryClient = new QueryClient();
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <GlobalStyles />
        {/* <ExampleComponent /> */}
        <App />
      </AppContextProvider>
    </QueryClientProvider>
  </StrictMode>,
);
