import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  // 🔥 IMPORTANT: receive the error
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("Error caught by ErrorBoundary:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "15px", background: "#d02f2f" }}>
          <h3>⚠️ Sidebar Error</h3>
          <p>{this.state.error.message}</p>
        </div>
      );
    }

     return this.props.children;
  }
}

export default ErrorBoundary;
