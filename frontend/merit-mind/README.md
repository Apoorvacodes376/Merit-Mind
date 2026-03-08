# Merit Mind - Agentic AI System for Bias-Free and Inclusive Recruitment

A complete React-based multi-page web application built for Hack'her'thon 3.0 at SVCE.

## 🎨 Design System

### Color Palette
- **Primary Background**: `#0d0d1a` (deep dark navy)
- **Card Background**: `#1a1a2e` (dark purple-navy)
- **Accent Purple**: `#7c3aed` (vivid purple)
- **Accent Pink**: `#ec4899` (hot pink)
- **Gradient**: `linear-gradient(135deg, #7c3aed, #ec4899)`
- **Text Primary**: `#f3f4f6` (near white)
- **Text Secondary**: `#a78bfa` (light lavender)

### Typography
- **Headings**: Orbitron (futuristic feel)
- **Body**: Inter

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd frontend/merit-mind
```

2. Install dependencies (if not already installed):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📄 Pages Overview

### 1. Landing Page (`/`)
- Hero section with Merit Mind branding
- Two CTA buttons for Recruiter and Candidate roles
- 6 feature cards showcasing AI capabilities
- Impact statistics
- Animated background with floating orbs

### 2. Login/Signup (`/login`)
- Split-screen design
- Toggle between Login and Sign Up
- Role selector (Recruiter/Candidate)
- Google Sign-In option
- Form validation

### 3. Recruiter Dashboard (`/recruiter/dashboard`)
- Statistics overview (Applications, Shortlisted, Bias Alerts, BRS)
- Recent job postings table with Bias Risk Scores
- BRS gauge visualization
- Top candidates list (SilenceRank view)
- Bias alerts feed

### 4. Job Postings (`/recruiter/jobs`)
- Grid of job posting cards
- Post new job modal with bias analysis
- View candidates and rewrite JD options
- Real-time BRS calculation

### 5. Candidates List (`/recruiter/candidates`)
- Toggle between SilenceRank and Standard view
- Comprehensive candidate table
- Side drawer with detailed candidate profile
- Skill graph visualization
- Bias flags and explainability

### 6. Reverse Bias Simulator (`/recruiter/simulator`)
- 3-step wizard interface
- Configure simulation parameters
- Animated progress indicators
- Detailed results with fairness metrics
- Demographic comparison charts
- Actionable recommendations

### 7. Bias Reports (`/recruiter/reports`)
- Compliance certificate
- Simulation history timeline
- Top bias patterns fixed
- Fairness metrics trends

### 8. Candidate Dashboard (`/candidate/dashboard`)
- Welcome card with bias-free guarantee
- Application statistics
- My applications list with explainability
- Skill graph preview
- Fair evaluation badge

### 9. My Skill Graph (`/candidate/skills`)
- Interactive skill network visualization
- Skill proficiency bars
- Transferable skills mapping
- Add new skills functionality

### 10. Interview Prep (`/candidate/interview`)
- EmotionBlind AI analyzer
- Answer input and job role selection
- Score comparison (Standard vs EmotionBlind)
- Bias detection alerts
- Strengths and improvement suggestions

## 🔐 Authentication & Routing

- **Protected Routes**: All dashboard routes require authentication
- **Role-Based Access**: Recruiters and Candidates have separate dashboards
- **Mock Authentication**: Any credentials are accepted (no backend)
- **LocalStorage**: User role and name stored for session management

## 🎯 Key Features

### For Recruiters
- **Intersectional Bias Detection**: Catches compounded discrimination
- **Autonomous JD Rewriting**: Eliminates bias at the source
- **Counterfactual Simulator**: Tests fairness scientifically
- **Skill Graph Intelligence**: Capability over keywords
- **Dynamic Fairness Optimizer**: Merit + fairness balanced
- **Reverse Bias Simulator**: Pre-hiring stress test

### For Candidates
- **SilenceRank Scoring**: Blind evaluation system
- **Skill Graph Visualization**: Network-based skill representation
- **EmotionBlind AI**: Interview prep without emotional bias
- **Explainability**: Clear reasons for hiring decisions
- **Fair Evaluation Badge**: Transparency in the process

## 🛠️ Tech Stack

- **React 19.2.0**: UI framework
- **React Router 7.13.1**: Navigation and routing
- **Tailwind CSS 3.4.19**: Styling
- **Lucide React 0.577.0**: Icons
- **Vite 7.3.1**: Build tool

## 📁 Project Structure

```
src/
├── components/
│   ├── Sidebar.jsx          # Recruiter sidebar navigation
│   ├── Navbar.jsx           # Candidate top navigation
│   └── ProtectedRoute.jsx   # Route protection wrapper
├── pages/
│   ├── Landing.jsx          # Landing page
│   ├── Login.jsx            # Login/Signup page
│   ├── recruiter/
│   │   ├── Dashboard.jsx    # Recruiter dashboard
│   │   ├── Jobs.jsx         # Job postings
│   │   ├── Candidates.jsx   # Candidate list
│   │   ├── Simulator.jsx    # Bias simulator
│   │   └── Reports.jsx      # Bias reports
│   └── candidate/
│       ├── Dashboard.jsx    # Candidate dashboard
│       ├── Skills.jsx       # Skill graph
│       └── Interview.jsx    # Interview prep
├── App.jsx                  # Main app with routes
├── main.jsx                 # Entry point
└── index.css                # Global styles & animations

## 🎨 Design Features

- **Dark Theme**: Consistent dark purple-navy background
- **Gradient Accents**: Pink-to-purple gradients on buttons and text
- **Glass Morphism**: Semi-transparent cards with backdrop blur
- **Smooth Animations**: Fade-ins, hover effects, and transitions
- **Responsive Design**: Mobile, tablet, and desktop layouts
- **Animated Background**: Gradient mesh with floating orbs

## 📊 Mock Data

All data is hardcoded for demonstration purposes:
- Job postings with BRS scores
- Candidate profiles with skills
- Application statuses
- Bias alerts and recommendations
- Simulation results

## 🚫 What's NOT Included

- Backend API integration
- Real authentication system
- Database connections
- External chart libraries (using CSS/SVG)
- Real bias detection algorithms

## 🏆 Hackathon Info

**Event**: Hack'her'thon 3.0  
**Institution**: SVCE  
**Team**: SW-02  
**Project**: Merit Mind - Bias-Free Recruitment System

## 📝 License

This project was created for Hack'her'thon 3.0 educational purposes.

---

Built with ❤️ by Team Merit Mind
