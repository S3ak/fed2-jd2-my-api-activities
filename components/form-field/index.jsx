export default function FormField({
  children,
  errorMessage,
  label = "Default Label",
}) {
  return (
    <div className="w-full max-w-xs gap-2 form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>

      {children}

      {!!errorMessage && (
        <label className="label">
          <span className="text-xs label-text-alt text-error">
            {errorMessage}
          </span>
        </label>
      )}
    </div>
  );
}
