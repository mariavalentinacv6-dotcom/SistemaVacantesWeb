
/**
 * Componente reutilizable para los campos del formulario.
 * Permite mostrar etiquetas, entradas y mensajes de validación.
 */

function FormField({
    label,
    name,
    value,
    onChange,
    error,
    placeholder,
    type = "text",
    required = false,
    maxLength,
    multiline = false
}) {
    return (
        <div className="form-field">

            <label htmlFor={name}>
                {label}
                {required && <span className="campo-obligatorio"> *</span>}
            </label>

            {multiline ? (
                <textarea
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    required={required}
                    rows="4"
                    className={error ? "campo-error" : ""}
                />
            ) : (
                <input
                    id={name}
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    required={required}
                    className={error ? "campo-error" : ""}
                />
            )}

            {error && (
                <span className="mensaje-error">
                    {error}
                </span>
            )}

        </div>
    );
}

export default FormField;
