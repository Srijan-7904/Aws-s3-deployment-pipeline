import './App.css'

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>🚀 CI/CD Pipeline Project</h1>
        <h2>Powered by GitHub Actions & AWS S3</h2>
      </header>
      
      <main className="content">
        <section className="message">
          <h3>A Special Note to Our Mentor</h3>
          <p>
            Dear <strong>Omkar Sharma</strong>,  
            This 6-week journey into <em>Cloud Computing</em> has been an amazing experience!  
            We explored DevOps practices, automated deployments, and built scalable applications  
            using modern tools like <strong>GitHub Actions</strong> and <strong>AWS</strong>.  
          </p>
          <p>
            Your guidance and mentorship played a crucial role in helping us understand  
            the power of CI/CD pipelines and cloud technologies. Thank you for being  
            a constant source of knowledge and inspiration throughout this journey!
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
