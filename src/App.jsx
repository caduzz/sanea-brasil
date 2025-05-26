import { LanguageProvider } from "./contexts/LanguageContext";

import AppRoutes from "./routes";

import "./assets/css/global.css";

export function App() {
  return (
    <LanguageProvider>
      <AppRoutes />
    </LanguageProvider>
  );
}