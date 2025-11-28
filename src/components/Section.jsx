export default function Section({ id, title, children, bg = "bg-white" }) {
  return (
    <section id={id} className={`${bg} py-20 px-6`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">{title}</h2>
        <div className="space-y-6">{children}</div>
      </div>
    </section>
  );
}
