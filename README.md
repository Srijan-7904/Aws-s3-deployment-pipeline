# React Vite CI/CD Pipeline Test

“This project sets up an automated deployment system for a website using GitHub Actions and Amazon S3. Whenever new changes are pushed to the main branch on GitHub, the website automatically updates on AWS S3 without any manual work. This process, called CI/CD (Continuous Integration and Continuous Deployment), makes the development faster, safer, and error-free. It is perfect for hosting simple websites, portfolios, or applications on the cloud in a cost-effective and reliable way.”

## 🚀 Quick Start

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Install Dependencies
```bash
npm install
```

### Run Locally
```bash
npm run dev
```
The application will be available at `http://localhost:5173`

### Build the App
```bash
npm run build
```
This creates a production-ready build in the `dist` folder.

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure
```
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── dist/                # Production build output (generated)
├── package.json         # Dependencies and scripts
└── vite.config.js       # Vite configuration
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🚀 AWS S3 Deployment with GitHub Actions

### Setup Instructions

1. **Create an S3 bucket** in your AWS account:
   - Enable static website hosting
   - Set index document to `index.html`
   - Configure bucket policy for public read access

2. **Create IAM user** with programmatic access and attach policy:
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Effect": "Allow",
         "Action": [
           "s3:PutObject",
           "s3:PutObjectAcl",
           "s3:GetObject",
           "s3:DeleteObject",
           "s3:ListBucket"
         ],
         "Resource": [
           "arn:aws:s3:::your-bucket-name",
           "arn:aws:s3:::your-bucket-name/*"
         ]
       }
     ]
   }
   ```

3. **Add GitHub Secrets** in your repository settings:
   - `AWS_ACCESS_KEY_ID` - Your IAM user access key
   - `AWS_SECRET_ACCESS_KEY` - Your IAM user secret key
   - `AWS_S3_BUCKET` - Your S3 bucket name
   - `AWS_REGION` - Your AWS region (e.g., us-east-1)

4. **Create GitHub Actions workflow** (`.github/workflows/deploy.yml`):
   ```yaml
   name: Deploy to S3
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     deploy:
       runs-on: ubuntu-latest
       
       steps:
       - name: Checkout code
         uses: actions/checkout@v3
       
       - name: Setup Node.js
         uses: actions/setup-node@v3
         with:
           node-version: '18'
           cache: 'npm'
       
       - name: Install dependencies
         run: npm ci
       
       - name: Build application
         run: npm run build
       
       - name: Configure AWS credentials
         uses: aws-actions/configure-aws-credentials@v2
         with:
           aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
           aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
           aws-region: ${{ secrets.AWS_REGION }}
       
       - name: Deploy to S3
         run: |
           aws s3 sync dist/ s3://${{ secrets.AWS_S3_BUCKET }} --delete
           aws s3 cp dist/index.html s3://${{ secrets.AWS_S3_BUCKET }}/index.html --cache-control no-cache
   ```

### S3 Bucket Policy Example
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    }
  ]
}
```

## 🌐 Features

- ⚡ **Vite** - Fast build tool and dev server
- ⚛️ **React 18** - Latest React features
- 📱 **Responsive Design** - Mobile-friendly layout
- 🎨 **Modern CSS** - Gradient background and clean typography
- 🚀 **Production Ready** - Optimized build output
- 📦 **Minimal Bundle** - Lightweight for fast loading

## 🔍 Testing Deployment

After setting up the GitHub Actions workflow:

1. Push changes to the `main` branch
2. Check the Actions tab in your GitHub repository
3. Monitor the deployment process
4. Visit your S3 bucket's website endpoint to see the deployed app

## 📝 Notes

- The build output is in the `dist` folder (required for S3 deployment)
- The app is designed to be minimal for fast CI/CD testing
- All dependencies are kept to the minimum required for React + Vite
- The CSS uses modern features with fallbacks for older browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test the build process
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
