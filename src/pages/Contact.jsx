export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-heading mb-8 text-center text-primary">Contact Us</h2>
        <form className="flex flex-col gap-4 bg-white p-8 rounded-xl shadow-xl">
          <input type="text" placeholder="Your Name" className="p-3 border rounded" />
          <input type="email" placeholder="Your Email" className="p-3 border rounded" />
          <textarea placeholder="Message" className="p-3 border rounded h-32"></textarea>
          <button type="submit" className="px-6 py-3 bg-accent text-white rounded hover:bg-primary hover:text-accent transition">Send Message</button>
        </form>
        <div className="mt-6 text-center">
          <a href="https://wa.me/94771234567" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition">Chat on WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
