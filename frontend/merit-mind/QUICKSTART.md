# Merit Mind - Quick Start Guide

## 🚀 Running the Application

### Step 1: Navigate to Project Directory
```bash
cd d:\Projects\GitHubProjects\MeritMind\frontend\merit-mind
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Navigate to: `http://localhost:5173`

## 🔑 Test Credentials

**No real authentication required!** Any email/password combination will work.

### Test as Recruiter:
1. Click "I'm a Recruiter" on landing page
2. Enter any email and password
3. Click Login

### Test as Candidate:
1. Click "I'm a Candidate" on landing page
2. Enter any email and password
3. Click Login

## 🗺️ Navigation Map

### Recruiter Portal
```
Landing (/) 
  → Login (/login?role=recruiter)
    → Dashboard (/recruiter/dashboard)
    → Job Postings (/recruiter/jobs)
    → Candidates (/recruiter/candidates)
    → Bias Simulator (/recruiter/simulator)
    → Bias Reports (/recruiter/reports)
```

### Candidate Portal
```
Landing (/)
  → Login (/login?role=candidate)
    → Dashboard (/candidate/dashboard)
    → My Skill Graph (/candidate/skills)
    → Interview Prep (/candidate/interview)
```

## 🎯 Key Features to Demo

### For Recruiters:
1. **Dashboard**: View BRS gauge and bias alerts
2. **Job Postings**: Post new job and see bias analysis
3. **Candidates**: Toggle SilenceRank view, view candidate details
4. **Simulator**: Run 3-step bias simulation
5. **Reports**: View compliance certificate and history

### For Candidates:
1. **Dashboard**: See applications with explainability
2. **Skill Graph**: Interactive skill network visualization
3. **Interview Prep**: Analyze answers with EmotionBlind AI

## 🎨 Design Highlights

- **Pink & Purple Theme**: Consistent throughout
- **Dark Background**: #0d0d1a
- **Gradient Buttons**: Pink-to-purple gradients
- **Glass Cards**: Semi-transparent with backdrop blur
- **Smooth Animations**: Hover effects and transitions
- **Responsive**: Works on mobile, tablet, desktop

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill the process on port 5173
npx kill-port 5173
# Then restart
npm run dev
```

### Dependencies Missing
```bash
npm install
```

### Clear Cache
```bash
npm run build
rm -rf node_modules
npm install
npm run dev
```

## 📱 Mobile Testing

The app is fully responsive. Test on:
- Desktop: 1920x1080
- Tablet: 768x1024
- Mobile: 375x667

## 🎭 Demo Flow Suggestion

1. **Start at Landing Page**: Show hero and features
2. **Login as Recruiter**: Demonstrate recruiter flow
3. **View Dashboard**: Show stats and BRS gauge
4. **Run Simulator**: Complete 3-step simulation
5. **View Candidates**: Toggle SilenceRank view
6. **Logout and Login as Candidate**: Switch roles
7. **View Skill Graph**: Show visualization
8. **Try Interview Prep**: Analyze an answer

## 💡 Tips

- All data is mock/hardcoded
- No backend required
- Works offline after initial load
- Use Chrome DevTools for responsive testing
- Check console for any errors

---

**Need Help?** Check the main README.md for detailed documentation.
