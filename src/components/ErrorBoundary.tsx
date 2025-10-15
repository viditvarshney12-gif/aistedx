import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-6xl sm:text-8xl md:text-9xl font-black text-primary text-glow-strong mb-4">
                Oops!
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                Something went wrong
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-md mx-auto">
                We encountered an unexpected error. But don't worry, you can still join us for an amazing TEDx experience!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  onClick={() => window.location.reload()}
                  size="lg" 
                  className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-5 rounded-full hover:scale-110 transition-all duration-300 cursor-hover bg-primary hover:bg-primary/90 text-white font-bold shadow-xl"
                >
                  Try Again
                </Button>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdkzkzO1tpNbt7-L6QMA7eW7tB745nKK0Sxcl0ByUpyaUnv4w/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-5 rounded-full hover:scale-110 transition-all duration-300 cursor-hover border-primary text-primary hover:bg-primary hover:text-white font-bold shadow-xl"
                  >
                    Buy Tickets Now
                  </Button>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
