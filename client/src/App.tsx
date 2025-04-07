import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { useEffect } from "react";

// Add meta tag for color-scheme
function ColorSchemeMetaTag() {
  useEffect(() => {
    // Check if meta tag exists, if not create it
    let meta = document.querySelector('meta[name="color-scheme"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'color-scheme');
      meta.setAttribute('content', 'light dark');
      document.head.appendChild(meta);
    }
    
    // Set page title
    document.title = "Portfolio | Modern & Responsive";
  }, []);

  return null;
}

function App() {
  return (
    <ThemeProvider>
      <ColorSchemeMetaTag />
      <QueryClientProvider client={queryClient}>
        <Switch>
          <Route path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
