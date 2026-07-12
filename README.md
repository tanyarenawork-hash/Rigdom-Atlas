# Rigdom Atlas 🗺️

Rigdom Atlas is an educational financial literacy organization dedicated to helping students, young professionals, families, and aspiring entrepreneurs confidently navigate personal finance. It provides a comprehensive platform with peer-edited guides, interactive calculators, and foundational frameworks for understanding and managing personal finances.

## Badges 🏆

*   **Build Status:** [![Build Status](https://img.shields.io/travis/com/tanyarenawork-hash/Rigdom-Atlas/main?style=flat-square)](https://travis-ci.com/tanyarenawork-hash/Rigdom-Atlas)
*   **License:** [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://github.com/tanyarenawork-hash/Rigdom-Atlas/blob/main/LICENSE)
*   **Stars:** [![Stars](https://img.shields.io/github/stars/tanyarenawork-hash/Rigdom-Atlas?style=flat-square)](https://github.com/tanyarenawork-hash/Rigdom-Atlas/stargazers)
*   **Forks:** [![Forks](https://img.shields.io/github/forks/tanyarenawork-hash/Rigdom-Atlas?style=flat-square)](https://github.com/tanyarenawork-hash/Rigdom-Atlas/forks)

## Table of Contents 📜

*   [Project Title & Badges](#rigdom-atlas-100)
*   [Description](#description)
*   [Table of Contents](#table-of-contents)
*   [Features](#features)
*   [Tech Stack](#tech-stack)
*   [Installation](#installation)
*   [Usage](#usage)
*   [Project Structure](#project-structure)
*   [Contributing](#contributing)
*   [License](#license)
*   [Important Links](#important-links)
*   [Footer](#footer)

## Description 🌟

Rigdom Atlas is a meticulously crafted web application aimed at democratizing financial literacy. It serves as a comprehensive resource, offering clear, jargon-free explanations of financial concepts, practical tools like calculators, and guidance on career paths within the financial education sector. The platform emphasizes educational integrity, with all content being peer-edited and rigorously reviewed.

## Features ✨

*   **File-Based Routing:** Utilizes TanStack Start for efficient route management.
*   **Interactive Calculators:** Includes tools for compound interest, mortgage payments, budget planning (50/30/20), and debt payoff.
*   **Financial Glossary:** Provides plain-language definitions of essential personal finance terms.
*   **Downloadable Resources:** Offers templates for budgeting, debt tracking, and net worth statements.
*   **Career Guidance:** Lists recommended financial certifications and career paths.
*   **Responsive Design:** Built with Tailwind CSS for a consistent experience across devices.
*   **Component Library:** Leverages Radix UI and other component libraries for a polished and accessible UI.
*   **Error Handling:** Implements robust error capture and reporting mechanisms.

## Tech Stack 🚀

*   **Languages:** TypeScript, JavaScript, CSS, Markdown, JSON
*   **Frameworks:** React, Next.js, Node.js, Express
*   **State Management:** TanStack Router, React Query
*   **Styling:** Tailwind CSS
*   **Build Tools:** Vite
*   **Linting & Formatting:** ESLint, Prettier
*   **UI Components:** Radix UI, Lucide React, Vaul, Sonner, Input OTP
*   **Utilities:** Class Variance Authority, CLSX, Tailwind Merge

## Installation 🔧

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/tanyarenawork-hash/Rigdom-Atlas.git
    cd Rigdom-Atlas
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```
    or
    ```bash
    pnpm install
    ```
3.  **Start the development server:**
    ```bash
    npm run dev
    ```

## Usage 💡

Rigdom Atlas is designed as an educational resource. Users can navigate through various sections to:

*   **Learn about personal finance:** Explore the "Eight Pillars of Finance" and the "Atlas Journal" for guides and definitions.
*   **Utilize financial tools:** Use the interactive calculators to understand concepts like compound interest and mortgage payments.
*   **Access resources:** Download worksheets and view recommendations for financial certifications and careers.
*   **Stay updated:** Subscribe to "The Dispatch" newsletter for monthly insights.

### Example: Using the Compound Interest Calculator 🧮

1.  Navigate to the `/tools` route.
2.  Locate the "Compound Interest" calculator.
3.  Input your starting amount, monthly contribution, desired annual return, and the number of years.
4.  The calculator will display the future value, total contributed amount, and the growth from interest.

## Project Structure 📂

```
Rigdom-Atlas/
├── public/
│   ├── llms.txt
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── site/
│   │   │   ├── Disclaimer.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Nav.tsx
│   │   │   └── Section.tsx
│   │   └── ui/
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── alert.tsx
│   │       ├── aspect-ratio.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── breadcrumb.tsx
│   │       ├── button.tsx
│   │       ├── calendar.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── chart.tsx
│   │       ├── checkbox.tsx
│   │       ├── collapsible.tsx
│   │       ├── command.tsx
│   │       ├── context-menu.tsx
│   │       ├── dialog.tsx
│   │       ├── drawer.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── form.tsx
│   │       ├── hover-card.tsx
│   │       ├── input-otp.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── menubar.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── pagination.tsx
│   │       ├── popover.tsx
│   │       ├── progress.tsx
│   │       ├── radio-group.tsx
│   │       ├── resizable.tsx
│   │       ├── scroll-area.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── sidebar.tsx
│   │       ├── skeleton.tsx
│   │       ├── slider.tsx
│   │       ├── sonner.tsx
│   │       ├── switch.tsx
│   │       ├── table.tsx
│   │       ├── tabs.tsx
│   │       ├── textarea.tsx
│   │       ├── toggle-group.tsx
│   │       ├── toggle.tsx
│   │       └── tooltip.tsx
│   ├── hooks/
│   │   └── use-mobile.tsx
│   ├── lib/
│   │   ├── error-capture.ts
│   │   ├── error-page.ts
│   │   ├── lovable-error-reporting.ts
│   │   └── utils.ts
│   ├── routes/
│   │   ├── __root.tsx
│   │   ├── about.tsx
│   │   ├── contact.tsx
│   │   ├── guides.tsx
│   │   ├── index.tsx
│   │   ├── newsletter.tsx
│   │   ├── resources.tsx
│   │   ├── sitemap[.]xml.ts
│   │   └── tools.tsx
│   ├── routeTree.gen.ts
│   ├── router.tsx
│   └── server.ts
├── eslint.config.js
├── package.json
├── tsconfig.json
├── README.md
└── vite.config.ts
```

## Contributing 🤝

Contributions are welcome! Please follow these guidelines:

1.  **Fork the repository.**
2.  **Create a new branch** for your feature (`git checkout -b feature/AmazingFeature`).
3.  **Commit your changes** (`git commit -m 'Add some AmazingFeature'`).
4.  **Push to the branch** (`git push origin feature/AmazingFeature`).
5.  **Open a Pull Request.**

## License 📄

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/tanyarenawork-hash/Rigdom-Atlas/blob/main/LICENSE) file for details.

## Important Links 🔗

*   **Live Demo:** [https://rigdomatlas.com/](https://rigdomatlas.com/)
*   **GitHub Repository:** [https://github.com/tanyarenawork-hash/Rigdom-Atlas](https://github.com/tanyarenawork-hash/Rigdom-Atlas)

## Footer 🏡

© 2024 Rigdom Atlas. All rights reserved.

Repository hosted on GitHub. Built with ❤️ and TypeScript.

[Back to Top](#rigdom-atlas-100)

---
**<p align="center">Generated by [ReadmeCodeGen](https://www.readmecodegen.com/)</p>**