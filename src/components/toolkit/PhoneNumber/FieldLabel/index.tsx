import { FieldLabelProps } from './types'

export const FieldLabel: React.FC<FieldLabelProps> = ({ id, label }) => {
  return label ? (
    <label className="text-sm text-neutral-700" htmlFor={id}>
      {label}
    </label>
  ) : null
}
