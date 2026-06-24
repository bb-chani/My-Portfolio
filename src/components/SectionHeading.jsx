export default function SectionHeading({ index, title }) {
  return (
    <div className="sec-head reveal-up">
      <span className="sec-index">{index}</span>
      <span className="sec-title">{title}</span>
      <span className="sec-rule"></span>
    </div>
  )
}
