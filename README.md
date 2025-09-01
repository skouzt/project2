### **Converso: Your AI Companion Tutor**

Converso is an AI-powered educational platform designed to be a personalized companion tutor. It helps you learn and master any topic by providing interactive voice-based explanations, engaging in conversational learning, and offering tailored study assistance.

-----

### 🚀 **Features**

  * **AI Voice Agents:** Take tutoring sessions with voiced AIs specializing in the topics you want to get better at.
  * **Authentication:** Secure user sign-up and sign-in with **Clerk**, including Google authentication and many more.
  * **Billing & Subscriptions:** Easily manage plans, upgrades, and payment details.
  * **Bookmarks and Session History:** Let users organize their learning by bookmarking tutors and accessing previous sessions.
  * **Create a Tutor:** Create your own AI tutors, choosing a subject, topic, and style of conversation.
  * **Search Functionality:** Find tutors quickly with robust filters and search bar.
  * **Cross-Device Compatibility:** Fully responsive design that works seamlessly across all devices.
  * **Modern UI/UX:** A clean, responsive design built with **Tailwind CSS** and **shadcn/ui** for a sleek user experience.
  * **Code Reusability:** Leverage reusable components and a modular codebase for efficient development.

-----

### ⚙️ **Tech Stack**

  * **Framework**: **Next.js** (App Router)
  * **Language**: **TypeScript**
  * **Authentication**: **Clerk**
  * **Database**: **Supabase** (PostgreSQL)
  * **Voice AI**: **Vapi**
  * **Error Monitoring**: **Sentry**
  * **Styling**: **Tailwind CSS** & **shadcn/ui**
  * **Data Validation**: **Zod**

-----

### 🤸 **Quick Start**

Follow these steps to set up the project locally on your machine.

#### Prerequisites

  * Git
  * Node.js
  * npm (Node Package Manager)

#### Cloning the Repository

```bash
git clone https://github.com/adrianhajdin/saas-app.git
cd saas-app
```

#### Installation

Install the project dependencies using npm:

```bash
npm install
```

#### Set Up Environment Variables

Create a new file named `.env` in the root of your project and add the following content, replacing the placeholders with your actual credentials.

```env
# Sentry
SENTRY_AUTH_TOKEN=
# Vapi
NEXT_PUBLIC_VAPI_WEB_TOKEN=
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

#### Running the Project

```bash
npm run dev
```

Open `http://localhost:3000` in your browser to view the project.