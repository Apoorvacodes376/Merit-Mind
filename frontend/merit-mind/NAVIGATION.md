# 🗺️ Merit Mind - Complete Navigation Guide

## 🏠 Application Structure

```
Merit Mind
│
├── Public Pages (No Auth Required)
│   ├── Landing Page (/)
│   └── Login/Signup (/login)
│
├── Recruiter Portal (Auth Required)
│   ├── Dashboard (/recruiter/dashboard)
│   ├── Job Postings (/recruiter/jobs)
│   ├── Candidates (/recruiter/candidates)
│   ├── Bias Simulator (/recruiter/simulator)
│   └── Bias Reports (/recruiter/reports)
│
└── Candidate Portal (Auth Required)
    ├── Dashboard (/candidate/dashboard)
    ├── My Skill Graph (/candidate/skills)
    └── Interview Prep (/candidate/interview)
```

## 🚀 User Flows

### First-Time Recruiter Flow
```
Landing Page
  ↓ Click "I'm a Recruiter"
Login Page (role=recruiter pre-selected)
  ↓ Enter any email/password
  ↓ Click "Login"
Recruiter Dashboard
  ↓ Explore features
  ├── View job postings
  ├── Check candidates
  ├── Run bias simulator
  └── View reports
```

### First-Time Candidate Flow
```
Landing Page
  ↓ Click "I'm a Candidate"
Login Page (role=candidate pre-selected)
  ↓ Enter any email/password
  ↓ Click "Login"
Candidate Dashboard
  ↓ Explore features
  ├── View applications
  ├── Check skill graph
  └── Practice interviews
```

## 📄 Page-by-Page Navigation

### 1. Landing Page (/)
**Purpose**: Introduction and role selection  
**Actions**:
- Click "I'm a Recruiter" → `/login?role=recruiter`
- Click "I'm a Candidate" → `/login?role=candidate`
- Scroll to view features and stats

**Key Elements**:
- Hero section with CTA buttons
- 6 feature cards
- 4 impact stat cards
- Footer

---

### 2. Login/Signup (/login)
**Purpose**: Authentication (mock)  
**Actions**:
- Toggle between Login/Sign Up tabs
- Select role (Recruiter/Candidate)
- Enter credentials (any work)
- Click Login → Redirects based on role
- Click Google Sign In (mock)

**Redirects**:
- Recruiter → `/recruiter/dashboard`
- Candidate → `/candidate/dashboard`

---

### 3. Recruiter Dashboard (/recruiter/dashboard)
**Purpose**: Overview of recruitment pipeline  
**Navigation**:
- Sidebar: Access all recruiter pages
- Click job title → View job details
- Click candidate → View profile
- Click "Run New Simulation" → `/recruiter/simulator`

**Key Interactions**:
- View BRS gauge
- Check bias alerts
- Browse top candidates
- Monitor statistics

---

### 4. Job Postings (/recruiter/jobs)
**Purpose**: Manage job postings  
**Navigation**:
- Sidebar: Navigate to other pages
- Click "Post New Job" → Opens modal
- Click "View Candidates" → `/recruiter/candidates`
- Click "Rewrite JD" → Opens rewrite tool

**Key Interactions**:
- Post new job
- View BRS for each job
- Analyze job descriptions
- Track applications

---

### 5. Candidates (/recruiter/candidates)
**Purpose**: Review and manage candidates  
**Navigation**:
- Sidebar: Navigate to other pages
- Toggle SilenceRank/Standard view
- Click "View" → Opens side drawer
- Filter by job/status

**Key Interactions**:
- View candidate profiles
- Check SilenceRank scores
- Review bias flags
- Shortlist/Reject candidates
- View skill graphs

---

### 6. Bias Simulator (/recruiter/simulator)
**Purpose**: Test pipeline for bias  
**Navigation**:
- Sidebar: Navigate to other pages
- Step 1: Configure → Click "Run Simulation"
- Step 2: Watch progress (auto-advances)
- Step 3: View results → Click "Fix Now" buttons

**Key Interactions**:
- Select job to test
- Set profile count
- Choose demographics
- View fairness metrics
- Get recommendations
- Export report

---

### 7. Bias Reports (/recruiter/reports)
**Purpose**: View compliance and history  
**Navigation**:
- Sidebar: Navigate to other pages
- Click "View Report" → View simulation details
- Click "Download Certificate" → Export compliance

**Key Interactions**:
- Check compliance status
- Review simulation history
- View bias patterns
- Track improvements

---

### 8. Candidate Dashboard (/candidate/dashboard)
**Purpose**: Overview of applications  
**Navigation**:
- Top navbar: Access all candidate pages
- Click "Why this decision?" → Opens explainability modal
- Click "View Full Graph" → `/candidate/skills`

**Key Interactions**:
- View application status
- Check SilenceRank score
- Read explanations
- Preview skill graph

---

### 9. My Skill Graph (/candidate/skills)
**Purpose**: Visualize and manage skills  
**Navigation**:
- Top navbar: Navigate to other pages
- Click "Add Skill" → Opens modal

**Key Interactions**:
- View skill network
- Check proficiency levels
- See transferable skills
- Add new skills

---

### 10. Interview Prep (/candidate/interview)
**Purpose**: Practice with EmotionBlind AI  
**Navigation**:
- Top navbar: Navigate to other pages
- Click "Try Another Answer" → Reset form

**Key Interactions**:
- Select job role
- Enter answer
- Click "Analyze Answer"
- View scores
- Read feedback

---

## 🔐 Authentication & Access Control

### Public Routes (No Auth)
- `/` - Landing
- `/login` - Login/Signup

### Protected Routes (Auth Required)

#### Recruiter Only
- `/recruiter/dashboard`
- `/recruiter/jobs`
- `/recruiter/candidates`
- `/recruiter/simulator`
- `/recruiter/reports`

#### Candidate Only
- `/candidate/dashboard`
- `/candidate/skills`
- `/candidate/interview`

### Access Rules
1. Not logged in → Redirect to `/login`
2. Wrong role → Redirect to correct dashboard
3. Logout → Clear localStorage → Redirect to `/`

---

## 🎯 Common User Tasks

### Recruiter Tasks

#### Post a New Job
```
Dashboard → Job Postings → Post New Job → Fill form → Submit
```

#### Run Bias Simulation
```
Dashboard → Bias Simulator → Configure → Run → View Results
```

#### Review Candidate
```
Dashboard → Candidates → Click View → Review Profile → Shortlist/Reject
```

#### Check Compliance
```
Dashboard → Bias Reports → View Certificate
```

### Candidate Tasks

#### Check Application Status
```
Dashboard → My Applications → Click "Why this decision?"
```

#### View Skill Graph
```
Dashboard → My Skill Graph → Explore visualization
```

#### Practice Interview
```
Dashboard → Interview Prep → Enter answer → Analyze
```

#### Add New Skill
```
My Skill Graph → Add Skill → Fill form → Submit
```

---

## 🔄 Navigation Patterns

### Sidebar Navigation (Recruiter)
- Always visible on desktop
- Collapsible on mobile
- Active state highlighting
- User profile at bottom
- Logout button

### Top Navigation (Candidate)
- Horizontal menu bar
- Responsive tabs on mobile
- Active state highlighting
- User profile on right
- Logout button

### Breadcrumbs
Not implemented (flat navigation structure)

### Back Navigation
Use browser back button or sidebar/navbar

---

## 🎨 Visual Navigation Cues

### Active Page
- Gradient background on nav item
- White text
- Highlighted state

### Hover States
- Background color change
- Scale transform
- Glow effect

### Clickable Elements
- Cursor pointer
- Hover effects
- Transition animations

---

## 📱 Mobile Navigation

### Recruiter (Mobile)
- Hamburger menu (top-left)
- Sidebar slides in from left
- Overlay on background
- Tap outside to close

### Candidate (Mobile)
- Horizontal scroll tabs
- Compact nav items
- Touch-friendly targets

---

## 🚪 Logout Flow

```
Any Page → Click Logout → Clear localStorage → Redirect to Landing (/)
```

---

## 🔗 Quick Links

### From Landing
- Recruiter Login: `/login?role=recruiter`
- Candidate Login: `/login?role=candidate`

### From Dashboard
- Recruiter: All pages via sidebar
- Candidate: All pages via navbar

### Direct URLs (After Login)
- Recruiter Dashboard: `/recruiter/dashboard`
- Candidate Dashboard: `/candidate/dashboard`

---

## 💡 Navigation Tips

1. **Use sidebar/navbar** for main navigation
2. **Use buttons** for actions (Post Job, Add Skill)
3. **Use modals** for forms and details
4. **Use drawers** for detailed views
5. **Use browser back** to return to previous page

---

**Navigation Status**: ✅ Complete and Intuitive
