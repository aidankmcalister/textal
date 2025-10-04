# Contributing to Textal

Thank you for your interest in contributing to Textal! We welcome contributions from everyone. Here's how you can help:

## Getting Started

1. **Fork the Repository**
   - Click the "Fork" button in the top-right corner of the [GitHub repository](https://github.com/aidankmcalister/textal)
   - This creates a copy of the repository in your GitHub account

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/your-username/textal.git
   cd textal
   ```

3. **Set Up the Development Environment**
   ```bash
   # Install dependencies
   npm install
   
   # Run tests to make sure everything works
   npm test
   ```

## Making Changes

1. **Create a New Branch**
   Create a descriptive branch for your changes:
   ```bash
   git checkout -b fix/issue-description
   # or
   git checkout -b feat/new-feature-name
   ```

2. **Make Your Changes**
   - Follow the existing code style
   - Write tests for new functionality
   - Update documentation as needed

3. **Run Tests**
   ```bash
   # Run all tests
   npm test
   
   # Run tests in watch mode
   npm test -- --watch
   ```

4. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "Brief description of changes"
   ```
   
   We follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages.

5. **Push to Your Fork**
   ```bash
   git push origin your-branch-name
   ```

## Submitting a Pull Request

1. Go to your fork on GitHub
2. Click the "Compare & pull request" button
3. Fill in the PR template with details about your changes
4. Submit the pull request

## PR Guidelines

- Keep pull requests focused on a single feature or bug fix
- Ensure all tests pass before submitting
- Update documentation as needed
- Reference any related issues in your PR description

## Code Style

- Follow the existing code style
- Use TypeScript types where appropriate
- Keep functions small and focused
- Add JSDoc comments

## Reporting Issues

Found a bug or have a feature request? Please [open an issue](https://github.com/aidankmcalister/textal/issues/new) and include:

- A clear description of the issue
- Steps to reproduce (for bugs)
- Expected vs. actual behavior
- Browser/Node.js version if relevant

## License

By contributing to Textal, you agree that your contributions will be licensed under its MIT License.

## Thank You!

Your contributions help make Textal better for everyone. We appreciate your time and effort!