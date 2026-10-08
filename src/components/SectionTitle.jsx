function SectionTitle({ as: Tag = 'h2', children, className = '', ...props }) {
  const classes = ['section-title', 'text-section', className]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  )
}

export default SectionTitle
