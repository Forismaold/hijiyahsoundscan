export default function ErrorFallback({ error }) {
    // Call resetErrorBoundary() to reset the error boundary and retry the render.

    return (
        <div role="alert">
            <p>Sepertinya ada yang salah:</p>
            <pre style={{ color: "red" }}>{error?.message}</pre>
        </div>
    )
}