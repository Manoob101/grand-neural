# Grand Neural - AI Agency Website

A production-grade React application for Grand Neural, an elite AI agency specializing in Multi-Agent Systems, Advanced RAG, and Secure AI Infrastructure.

## ⚡️ The Stack

- **Core:** React 19, TypeScript
- **Styling:** Tailwind CSS (Custom "Apple Dark Mode" Config)
- **Motion:** Framer Motion (Complex entrance & scroll animations)
- **Icons:** Lucide React
- **Architecture:** Component-based, Modular

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v18 or higher)
*   npm

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/manoob101/grand-neural.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Start the development server
    ```sh
    npm run dev
    ```

## 📦 Deployment

This project is optimized for deployment on **Vercel** or **Netlify**.

### Deploy on Vercel (Recommended)

1.  Push your code to a GitHub repository.
2.  Import the project into Vercel.
3.  Vercel will automatically detect the build settings.
4.  Click **Deploy**.

### Static Build

To create a production build manually:

```sh
npm run build
```

The build artifacts will be stored in the `dist/` (or `build/`) directory, ready to be deployed to any static hosting service.

## 🤝 How to Contribute

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  **Fork the Project**
2.  **Create your Feature Branch** (`git checkout -b feature/AmazingFeature`)
3.  **Commit your Changes** (`git commit -m 'feat: Add some AmazingFeature'`) - We prefer [Conventional Commits](https://www.conventionalcommits.org/).
4.  **Push to the Branch** (`git push origin feature/AmazingFeature`)
5.  **Open a Pull Request**

### Design Guidelines

*   **Aesthetics:** Strictly adhere to the "Dark Mode" aesthetic (Deep Slate/Charcoal background, Electric Blue accents).
*   **Performance:** Ensure animations are GPU accelerated (use `transform-gpu`).
*   **Responsiveness:** Mobile-first approach.

## 🛡 Security

As an AI engineering firm, we take security seriously.

*   Do not commit secrets or API keys.
*   Ensure all dependencies are audited (`npm audit`).

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.