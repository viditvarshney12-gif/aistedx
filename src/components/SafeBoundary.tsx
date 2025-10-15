import React, { Component, ErrorInfo, ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class SafeBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('SafeBoundary caught error and will render shell:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
          <Navbar />
          <div className="flex-1 container mx-auto px-4 py-10 text-center">
            <h1 className="text-2xl font-bold mb-4">We\'re loading content…</h1>
            <p className="text-muted-foreground mb-8">If this persists, please refresh the page.</p>
            <div className="flex gap-4 justify-center">
              <a href="/">
                <Button className="bg-primary text-white">Home</Button>
              </a>
              <a href="/about">
                <Button variant="outline" className="border-primary text-primary">About</Button>
              </a>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdkzkzO1tpNbt7-L6QMA7eW7tB745nKK0Sxcl0ByUpyaUnv4w/viewform?usp=dialog"
                target="_blank" rel="noopener noreferrer"
              >
                <Button className="bg-primary text-white">Buy Tickets</Button>
              </a>
            </div>
          </div>
          <Footer />
        </div>
      );
    }

    return this.props.children;
  }
}

export default SafeBoundary;
