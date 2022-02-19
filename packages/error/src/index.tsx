type ErrorProps = {
  children?: React.ReactNode
  as?: 'span' | 'p' | 'div'
} & React.HTMLAttributes<
  HTMLSpanElement | HTMLParagraphElement | HTMLDivElement
>

export const Error: React.FC<ErrorProps> = ({ children, as, ...props }) => {
  const Tag = as || 'p'

  return <Tag {...props}>{children}</Tag>
}
