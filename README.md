# Retrace GitHub Actions Integration

This repository demonstrates the GitHub Actions integration for **Retrace**, an AI-powered CI failure classification tool.

## What is Retrace?

Retrace analyzes CI/test failure logs and determines the likely cause of a failure.

Instead of forcing developers to manually inspect large CI logs, Retrace provides:

- Failure classification
- Confidence score
- Reasoning behind the classification
- Relevant failure evidence

## GitHub Actions Integration

This repository demonstrates how Retrace can be integrated directly into a GitHub Actions workflow.

The workflow:

1. Checks out the repository.
2. Sets up Node.js.
3. Installs dependencies.
4. Runs the test suite.
5. Captures the test failure log.
6. Sends the failure log to the Retrace `/classify` API.
7. Receives the AI-generated classification.
8. Posts the classification as a comment on the GitHub Pull Request.
9. Fails the workflow if the tests failed.

### Workflow

```text
Code pushed / Pull Request
          ↓
     GitHub Actions
          ↓
       Run tests
          ↓
      Test failure
          ↓
    Capture failure log
          ↓
   Retrace /classify API
          ↓
   AI failure analysis
          ↓
 Classification + confidence
          ↓
   GitHub PR comment
