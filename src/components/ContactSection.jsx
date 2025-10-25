export const ContactSection = () => {
  return (
    <section className="py-20" id="contact">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-3xl font-semibold text-White-900 dark:text-white">
          Get in Touch
        </h3>
        <p className="mt-4 text-lg text-White-700 dark:text-White-300">
          I believe great ideas start with a simple conversation <br/>
          whether it’s about web dev, design, anime, or books.  
  Let’s chat and create something amazing together!🌸✨
        </p>
        <a
          href="mailto:sameenhafs@gmail.com"
          className="mt-8 inline-block bg-primary text-white py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-primary/90"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};
