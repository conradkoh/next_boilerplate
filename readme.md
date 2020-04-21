# Getting Started

1. Clone the project
2. Ensure that the project is fully prepared by running the command `git submodule init; git submodule update;`
3. Install the project dependencies with `npm install`
4. Start the project with `npm run dev`

# What is this project?

This project is a boilerplate for NextJS apps, best used by forking the and customizing the code in the way that suits your needs.

The main problem with using too many third party libraries is that signficant changes to certain libraries can cause you to have to rewrite an entire codebase. The best way to take control of your projects would be to write the bulk of you business logic in code that is directly accessible / maintainable by you, and reducing the coupling of your project's code with the code that is subject to changes.

NextJSLib is my attempt at wrapping all external components in other projects, to provide a common interface based on what I understand to be the current best practice, and it uses git submodules to improvde code sharing between projects so that there is no code bundling or module publish required for the sharing of code.
