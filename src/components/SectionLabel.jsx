function SectionLabel({ as: Tag = 'p', children, className = '', ...props }) {
  const classes = ['section-label', 'text-label', className]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  )
}

export default SectionLabel
