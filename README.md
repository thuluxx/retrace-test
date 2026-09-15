# Retrace GitHub Actions Integration

This repository demonstrates how **Retrace** can be integrated into a GitHub Actions CI workflow to automatically classify test failures.

👉 **Main Retrace project:** https://github.com/thuluxx/retrace

## 🚀 What This Demo Shows

When a test fails in GitHub Actions, the workflow sends the failure information to Retrace.

Retrace analyzes the failure and returns:

- A failure classification
- A confidence score
- A short explanation of why the failure was classified that way

The result is then posted directly to the GitHub Pull Request.

## 🔄 Workflow

```text
Pull Request
     ↓
GitHub Actions starts
     ↓
Install dependencies
     ↓
Run tests
     ↓
Test fails
     ↓
Send failure output to Retrace
     ↓
Retrace analyzes failure
     ↓
Classification + confidence
     ↓
Post result as PR comment
```

## ⚙️ Workflow File

The GitHub Actions workflow is located at:

```text
.github/workflows/retrace-classify.yml
```

The workflow performs the following steps:

1. **Checkout repository**
2. **Set up Node.js**
3. **Install dependencies**
4. **Run tests**
5. **Classify failure with Retrace**
6. **Post classification as a PR comment**
7. **Fail the job if the tests failed**

## 🧪 Example Failure

This repository contains a deterministic failing test used to demonstrate Retrace.

Example:

```text
Expected: 1260
Received: 1400
```

The test failure is sent to Retrace for classification.

Retrace returns:

```text
Retrace classification: likely real regression
Confidence: 95%
```

with an explanation similar to:

```text
The test deterministically expects a total of 1260
but receives 1400, indicating a change in application
logic rather than timing or external factors.
```

## 💬 Pull Request Result

After the workflow runs, Retrace posts the classification directly to the Pull Request.

Example:

```text
Retrace classification: likely real regression (95% confidence)

The test deterministically expects a total of 1260
but receives 1400, indicating a change in application
logic rather than timing or external factors.
```

This means developers can see the classification without leaving the PR.

## 🔧 Configuration

The workflow uses the Retrace API through the configured API URL:

```text
RETRACE_API_URL
```

GitHub Actions secrets/environment variables can be used for any required credentials.

## 📁 Repository Structure

```text
.
├── .github/
│   └── workflows/
│       └── retrace-classify.yml
├── tests/
├── package.json
└── README.md
```

## 🛠️ Built With

- JavaScript
- Node.js
- Jest
- GitHub Actions
- GitHub
- REST API
- Retrace
- AI

## 🎯 Purpose

This repository is primarily a **demo/integration repository** for Retrace.

The main project contains the Retrace application itself:

👉 **https://github.com/thuluxx/retrace**

This repository shows how that system can be connected to a real GitHub Actions workflow.

## 🔗 Related

### Main Retrace Repository

👉 https://github.com/thuluxx/retrace

### GitHub Actions Integration

👉 https://github.com/thuluxx/retrace-test

## 🗺️ Future Improvements

Possible future improvements to the integration include:

- More failure classifications
- Better failure explanations
- Support for additional test frameworks
- Support for additional CI providers
- Historical CI failure analysis
- Richer PR comments
- Automatic suggestions for next debugging steps
