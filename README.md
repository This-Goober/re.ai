# ré.ai - Where Music Meets AI

A beautiful, minimalist website showcasing the intersection of music and artificial intelligence. Built with React and Firebase, featuring Apple-esque design and seamless authentication.

## 🎵 About

ré.ai is the personal website of Eidee, a 16-year-old violinist passionate about music and AI. The site showcases:

- **Musical Journey**: Years of violin study with a UW professor
- **AI Research**: Projects focusing on voice separation, music composition, and educational tools
- **Learning Resources**: Sharing knowledge about mastering challenging violin repertoire
- **Vision**: Bridging classical music and modern AI technology

## 🚀 Features

- **Modern Design**: Apple-inspired minimalist interface with smooth animations
- **Firebase Authentication**: Email/password and Google sign-in integration
- **Responsive Layout**: Beautiful experience across all devices
- **Performance Optimized**: Fast loading with modern web best practices
- **SEO Ready**: Proper meta tags and structured content
- **TypeScript Support**: Full TypeScript implementation with proper type safety
- **Profile Photo**: Elegant SVG placeholder with multiple sizes (small, medium, large)

## 🛠️ Technology Stack

- **Frontend**: React 18 with TypeScript, React Router
- **Styling**: Custom CSS with Apple-esque design principles
- **Authentication**: Firebase Auth with Google Sign-in
- **Database**: Firebase Firestore
- **Hosting**: Firebase Hosting
- **Typography**: Inter font family
- **Language**: TypeScript (.tsx files)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd re-ai-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication (Email/Password and Google)
   - Enable Firestore Database
   - Enable Hosting
   - Copy your Firebase configuration

4. **Configure Environment Variables**
   - Copy `env.example` to `.env` in the project root
   - Update `.env` with your actual Firebase configuration values:
     ```bash
     cp env.example .env
     ```
   - Fill in your Firebase credentials in the `.env` file
   - Update `.firebaserc` with your project ID

5. **Run the development server**
   ```bash
   npm start
   ```

6. **Build for production**
   ```bash
   npm run build
   ```

7. **Deploy to Firebase**
   ```bash
   npm install -g firebase-tools
   firebase login
   firebase deploy
   ```

## 🔧 Configuration

### Firebase Configuration

The Firebase configuration is now managed through environment variables. Create a `.env` file in your project root:

```bash
# Copy the example file
cp env.example .env
```

Then update the `.env` file with your Firebase project credentials:

```bash
REACT_APP_FIREBASE_API_KEY=your-actual-api-key-here
REACT_APP_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your-project-id-here
REACT_APP_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=123456789012
REACT_APP_FIREBASE_APP_ID=1:123456789012:web:abcdef1234567890abcdef
```

**Important**: Never commit your `.env` file to version control. It's already included in `.gitignore`.

### Firebase Authentication Setup

1. Go to Firebase Console → Authentication → Sign-in method
2. Enable Email/Password authentication
3. Enable Google authentication
4. Add your domain to authorized domains

### Firebase Firestore Setup

1. Go to Firebase Console → Firestore Database
2. Create database in production mode
3. Set up security rules as needed

## 🎨 Design System

The website uses a carefully crafted design system inspired by Apple's design principles:

- **Colors**: Light backgrounds (#fafafa), dark text (#1a1a1a), blue accents (#007aff)
- **Typography**: Inter font family with carefully chosen weights
- **Spacing**: Consistent 8px grid system
- **Animations**: Smooth transitions and hover effects
- **Layout**: Clean, minimalist layouts with plenty of white space

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Home.tsx        # Homepage
│   ├── About.tsx       # About page
│   ├── Research.tsx    # Research page
│   ├── Learning.tsx    # Learning page
│   ├── Login.tsx       # Login component
│   ├── Signup.tsx      # Signup component
│   ├── Navigation.tsx  # Navigation component
│   └── ProfilePhoto.tsx # Profile photo placeholder
├── contexts/           # React contexts
│   └── AuthContext.tsx # Authentication context
├── firebase/           # Firebase configuration
│   └── config.ts       # Firebase config
├── App.tsx             # Main app component
├── App.css             # Global styles
├── index.tsx           # App entry point
├── reportWebVitals.ts  # Web vitals reporting
└── tsconfig.json       # TypeScript configuration
```

## 🌐 Deployment

The site is configured for Firebase Hosting:

1. Build the project: `npm run build`
2. Deploy to Firebase: `firebase deploy`

The Firebase configuration includes:
- Single Page Application routing
- Optimized caching headers
- Gzip compression
- Static asset optimization

## 🎯 Pages Overview

### Home
- Hero section with call-to-action
- Vision statement
- Current projects showcase
- Navigation to other sections

### About
- Personal story and musical journey
- Learning experience with UW professor
- Vision for music and AI
- Mission statement

### Research
- AI music research projects
- Voice separation technology
- Technical approach
- Future research directions

### Learning
- Violin education resources
- Master class series (Bach, Paganini, Concertos)
- Teaching philosophy
- Learning resources

## 🔒 Security

- Firebase Authentication handles user management
- Environment variables for sensitive configuration (never committed to version control)
- Automatic validation of required environment variables
- Proper Firebase security rules
- HTTPS enforcement through Firebase Hosting

## 🚀 Performance

- Optimized images and assets
- Code splitting with React Router
- Lazy loading where appropriate
- Efficient CSS with minimal framework overhead
- Fast loading with Firebase CDN

## 📱 Mobile Responsiveness

- Mobile-first design approach
- Responsive navigation
- Touch-friendly interactions
- Optimized typography and spacing for mobile

## 🤝 Contributing

This is a personal website project. If you'd like to contribute or have suggestions, please reach out through the contact information on the website.

## 📄 License

This project is for personal use. Please respect the content and design.

---

Built with ❤️ by Eidee - Where Music Meets AI 