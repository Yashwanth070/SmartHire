import { ApplicationsProvider } from "./context/ApplicationsContext";
import { JobsProvider } from "./context/JobsContext";
import { ThemeProvider } from "./context/ThemeContext";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <ThemeProvider>
      <JobsProvider>
        <ApplicationsProvider>
          <AppRoutes />
        </ApplicationsProvider>
      </JobsProvider>
    </ThemeProvider>
  );
}