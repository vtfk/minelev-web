function ErrorFallback ({ error }) {
  return (
    <div role='alert'>
      <p>Noe gikk galt under lasting av YFF</p>
      <pre>{error.message}</pre>
    </div>
  )
}

export default ErrorFallback
