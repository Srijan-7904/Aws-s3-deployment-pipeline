import './App.css'

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>🚀 CI/CD Pipeline Test</h1>
        <h2>Deployed using GitHub Actions & AWS S3</h2>
      </header>
      
      <main className="content">
        <section className="message">
          <h3>💡 A Note for Our Mentor</h3>
          <p>
            Dear <strong>Omkar Sharma</strong>,  
            These past 6 weeks in <em>Cloud Computing</em> have been an incredible journey!  
            We learned how to integrate DevOps practices, automate deployments,  
            and leverage AWS for real-world solutions.
          </p>
          <p>
            Thank you for your mentorship and guidance.  
            Your support made complex topics feel easy and enjoyable.  
            We are grateful for this amazing learning experience!
          </p>
          <p><strong>— Srijan Jaiswal 🌐</strong></p>
        </section>
      </main>

      <footer className="footer">
        <p>✨ Continuous Integration & Continuous Deployment in Action ✨</p>
      </footer>
    </div>
  )
}

export default App
